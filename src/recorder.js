const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { v4: uuidv4 } = require('uuid');
const { isEssentialDomain, extractFlightParams, normalizeDate, detectStepLabel } = require('./constants');
const { hashBody } = require('./mock-matcher');

async function record(targetUrl, outputDir) {
    console.log(`\n🎬 Starting recording: ${targetUrl}`);
    console.log(`   Output: ${outputDir}\n`);

    // ── Clean slate: backup old recording ──────────────────────────────────
    if (fs.existsSync(outputDir)) {
        const backupDir = outputDir + '.bak.' + Date.now();
        fs.renameSync(outputDir, backupDir);
        console.log(`📦 Backed up previous recording → ${path.basename(backupDir)}`);
    }

    const publicDir = path.join(outputDir, 'public');
    fs.mkdirSync(publicDir, { recursive: true });

    // ── Storage ───────────────────────────────────────────────────────────
    const mocks = [];
    const wsMocks = [];
    const flowSteps = [];
    let recordedFlight = null;
    let mockCount = 0;
    let assetCount = 0;
    let skippedCount = 0;

    const mocksFile = path.join(outputDir, 'mocks.json');
    const wsMocksFile = path.join(outputDir, 'ws-mocks.json');
    const stateFile = path.join(outputDir, 'state.json');
    const metaFile = path.join(outputDir, 'meta.json');

    // Write empty files so we can append
    fs.writeFileSync(mocksFile, '[]');
    fs.writeFileSync(wsMocksFile, '[]');

    // ── Launch browser ────────────────────────────────────────────────────
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // ── Track page navigations ────────────────────────────────────────────
    page.on('framenavigated', frame => {
        if (frame !== page.mainFrame()) return;
        const url = frame.url();
        if (!url || url === 'about:blank') return;
        const label = detectStepLabel(url);
        flowSteps.push({ url, label, timestamp: Date.now() });
        console.log(`📍 Step: ${label} → ${url.substring(0, 100)}...`);

        // Try to extract flight params from navigation URLs
        if (url.toLowerCase().includes('internalselect')) {
            const params = extractFlightParams(url);
            if (params.origin && params.destination) {
                recordedFlight = params;
                console.log(`✈  Detected flight: ${params.origin} → ${params.destination} | ${params.departureDate} / ${params.returnDate}`);
            }
        }
    });

    // ── WebSocket interceptor ─────────────────────────────────────────────
    page.on('websocket', ws => {
        const wsUrl = ws.url();
        let currentInteraction = { request: null, responses: [] };
        const interactions = [];

        ws.on('framereceived', frame => {
            currentInteraction.responses.push({
                payload: frame.payload,
                delay: currentInteraction.request ? (Date.now() - currentInteraction.request.time) : 0
            });
        });

        ws.on('framesent', frame => {
            if (currentInteraction.request || currentInteraction.responses.length > 0) {
                interactions.push({ ...currentInteraction });
            }
            currentInteraction = { request: { payload: frame.payload, time: Date.now() }, responses: [] };
        });

        ws.on('close', () => {
            if (currentInteraction.request || currentInteraction.responses.length > 0) {
                interactions.push({ ...currentInteraction });
            }
            wsMocks.push({
                url: wsUrl,
                interactions: interactions.map(i => ({
                    requestPayload: i.request?.payload || null,
                    requestHash: i.request ? hashBody(i.request.payload) : null,
                    responses: i.responses
                }))
            });
            fs.writeFileSync(wsMocksFile, JSON.stringify(wsMocks, null, 2));
        });
    });

    // ── Response interceptor ──────────────────────────────────────────────
    page.on('response', async response => {
        const url = response.url();
        const request = response.request();
        const method = request.method();

        if (!url.startsWith('http')) return;

        // Domain whitelist filter
        if (!isEssentialDomain(url)) {
            skippedCount++;
            return;
        }

        try {
            const headers = response.headers();
            const status = response.status();
            const resourceType = request.resourceType();
            const parsedUrl = new URL(url);
            const isRedirect = status >= 300 && status < 400;
            const isApi = ['fetch', 'xhr'].includes(resourceType) || isRedirect || !!headers['location'];

            if (isApi) {
                const bodyBuffer = await response.body().catch(() => null);
                let bodyStr = null;
                let isJson = false;
                let isBase64 = false;

                if (bodyBuffer) {
                    const ct = headers['content-type'] || '';
                    if (ct.includes('application/json')) {
                        try { bodyStr = JSON.parse(bodyBuffer.toString('utf8')); isJson = true; }
                        catch { bodyStr = bodyBuffer.toString('base64'); isBase64 = true; }
                    } else if (ct.includes('text/')) {
                        bodyStr = bodyBuffer.toString('utf8');
                    } else {
                        bodyStr = bodyBuffer.toString('base64');
                        isBase64 = true;
                    }
                }

                const postData = request.postData();
                const requestHash = hashBody(postData);

                // Dedup: update existing or add new
                const existing = mocks.findIndex(m => m.url === url && m.method === method && m.requestHash === requestHash);
                const entry = {
                    id: uuidv4(), url, method,
                    requestBody: postData, requestHash,
                    response: { status, headers, body: bodyStr, isJson, isBase64 }
                };

                if (existing >= 0) {
                    mocks[existing] = entry;
                } else {
                    mocks.push(entry);
                    mockCount++;
                }

                // Also try to extract flight params from FlightPageData response
                if (url.toLowerCase().includes('flightpagedata') && bodyStr?.SearchInfo) {
                    const si = bodyStr.SearchInfo;
                    recordedFlight = {
                        origin: si.OriginIata || null,
                        destination: si.DestinationIata || null,
                        departureDate: normalizeDate(si.DepartureDate || null),
                        returnDate: normalizeDate(si.ReturnDate || null),
                        adults: String(si.Passengers?.Adults || 1),
                        children: String(si.Passengers?.Children || 0),
                        infants: String(si.Passengers?.Infants || 0),
                    };
                    console.log(`✈  Flight params from API: ${recordedFlight.origin} → ${recordedFlight.destination}`);
                }

                // Save continuously
                fs.writeFileSync(mocksFile, JSON.stringify(mocks, null, 2));

            } else {
                // Static asset
                let pathname = parsedUrl.pathname;
                if (pathname === '/') pathname = '/index.html';
                if (pathname.endsWith('/')) pathname += 'index.html';

                const localFilePath = path.join(publicDir, parsedUrl.hostname, pathname);
                fs.mkdirSync(path.dirname(localFilePath), { recursive: true });

                const body = await response.body().catch(() => null);
                if (body) {
                    fs.writeFileSync(localFilePath, body);
                    assetCount++;
                }
            }
        } catch (err) {
            // Silently skip problematic responses
        }
    });

    // ── Navigate ──────────────────────────────────────────────────────────
    console.log('🌐 Navigating... Interact with the page to record the booking flow.');
    console.log('   Close the browser when done.\n');

    await page.goto(targetUrl, { waitUntil: 'load', timeout: 60000 })
        .catch(e => console.warn('⚠ Navigation timeout, proceeding:', e.message));

    // ── Continuous state extraction ───────────────────────────────────────
    const stateInterval = setInterval(async () => {
        try {
            if (page.isClosed()) return;
            const cookies = await context.cookies();
            const browserState = await page.evaluate(() => ({
                localStorage: Object.entries(localStorage),
                sessionStorage: Object.entries(sessionStorage)
            }));
            browserState.cookies = cookies;
            fs.writeFileSync(stateFile, JSON.stringify(browserState, null, 2));
        } catch { }
    }, 2000);

    // ── Wait for browser close ────────────────────────────────────────────
    await new Promise(resolve => browser.on('disconnected', resolve));
    clearInterval(stateInterval);

    // ── Save meta ─────────────────────────────────────────────────────────
    fs.writeFileSync(metaFile, JSON.stringify({
        recordingTime: new Date().toISOString(),
        recordedFlight,
        flowSteps,
    }, null, 2));

    console.log(`\n✅ Recording complete!`);
    console.log(`   📦 ${mockCount} API mocks | ${assetCount} static assets | ${skippedCount} skipped (junk)`);
    if (recordedFlight) {
        console.log(`   ✈  Template: ${recordedFlight.origin} → ${recordedFlight.destination} | ${recordedFlight.departureDate} / ${recordedFlight.returnDate}`);
    }
    console.log(`   📁 Saved to: ${outputDir}\n`);
}

module.exports = { record };
