const { AIRPORT_NAMES, normalizeDate } = require('./constants');

// ─── Station Lookup ───────────────────────────────────────────────────────────

/**
 * Build IATA-code → city name map from the SuperStationsWithCountries mock.
 */
function buildStationLookup(mocks) {
    const map = {};
    const stationsMock = mocks.find(m => {
        try { return new URL(m.url).pathname.includes('SuperStationsWithCountries'); } catch { return false; }
    });
    if (!stationsMock || !Array.isArray(stationsMock.response?.body)) return map;
    for (const country of stationsMock.response.body) {
        if (!Array.isArray(country.stations)) continue;
        for (const st of country.stations) {
            if (st.code && st.value) map[st.code] = st.value;
        }
    }
    return map;
}

// ─── Flight Response Transformation ───────────────────────────────────────────

/**
 * Substitute recorded flight params with user-selected params in a response.
 * This is the ONLY date/city substitution mechanism — no shiftDates().
 * @param {object} options - Optional. { skipDates: true } to skip date substitution
 *   (used for fare-cache responses which have their own date shifting).
 */
function transformFlightResponse(responseBody, recorded, current, stationLookup, options) {
    if (!responseBody || !recorded || !current) return responseBody;
    if (!recorded.origin || !current.origin) return responseBody;
    // Skip if search is identical to recording
    if (recorded.origin === current.origin
        && recorded.destination === current.destination
        && recorded.departureDate === current.departureDate
        && recorded.returnDate === current.returnDate) return responseBody;

    const isJson = typeof responseBody === 'object';
    let s = isJson ? JSON.stringify(responseBody) : String(responseBody);

    const sub = (from, to) => {
        if (!from || !to || from === to) return;
        s = s.split(from).join(to);
    };

    // Helper: strip accents for alternate matching
    const stripAccents = (str) => str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : str;

    // 1. IATA codes
    sub(recorded.origin, current.origin);
    sub(recorded.destination, current.destination);

    // 2. City names (both accented and non-accented forms)
    if (stationLookup) {
        const recOriginCity = stationLookup[recorded.origin];
        const recDestCity = stationLookup[recorded.destination];
        const curOriginCity = stationLookup[current.origin];
        const curDestCity = stationLookup[current.destination];
        // Accented forms
        sub(recOriginCity, curOriginCity);
        sub(recDestCity, curDestCity);
        // Non-accented forms (API often uses 'Medellin' not 'Medellín')
        const recOriginPlain = stripAccents(recOriginCity);
        const recDestPlain = stripAccents(recDestCity);
        const curOriginPlain = stripAccents(curOriginCity);
        const curDestPlain = stripAccents(curDestCity);
        if (recOriginPlain !== recOriginCity) sub(recOriginPlain, curOriginPlain || curOriginCity);
        if (recDestPlain !== recDestCity) sub(recDestPlain, curDestPlain || curDestCity);
    }

    // 3. Airport names
    sub(AIRPORT_NAMES[recorded.origin], AIRPORT_NAMES[current.origin]);
    sub(AIRPORT_NAMES[recorded.destination], AIRPORT_NAMES[current.destination]);

    // 4. Dates (YYYY-MM-DD) — skip for fare-cache (already shifted by shiftFareCacheDates)
    if (!(options && options.skipDates)) {
        if (recorded.departureDate && current.departureDate) {
            sub(recorded.departureDate, current.departureDate);
            // Compact YYYYMMDD
            sub(recorded.departureDate.replace(/-/g, ''), current.departureDate.replace(/-/g, ''));
            // MM/DD/YYYY (used in SellKeys)
            const rp = recorded.departureDate.split('-'), cp = current.departureDate.split('-');
            if (rp.length === 3 && cp.length === 3) {
                sub(`${rp[1]}/${rp[2]}/${rp[0]}`, `${cp[1]}/${cp[2]}/${cp[0]}`);
            }
        }
        if (recorded.returnDate && current.returnDate) {
            sub(recorded.returnDate, current.returnDate);
            sub(recorded.returnDate.replace(/-/g, ''), current.returnDate.replace(/-/g, ''));
            const rp = recorded.returnDate.split('-'), cp = current.returnDate.split('-');
            if (rp.length === 3 && cp.length === 3) {
                sub(`${rp[1]}/${rp[2]}/${rp[0]}`, `${cp[1]}/${cp[2]}/${cp[0]}`);
            }
        }
    }

    // 5. Passenger counts
    if (recorded.adults && current.adults && recorded.adults !== current.adults) {
        s = s.replace(new RegExp(`"(?:adult|adt|adultCount|AdultCount|ADT)"\\s*:\\s*${recorded.adults}`, 'gi'),
            m => m.replace(recorded.adults, current.adults));
    }

    if (isJson) {
        try { return JSON.parse(s); } catch { return responseBody; }
    }
    return s;
}

// ─── Fare-Cache Date Window Shift ─────────────────────────────────────────────

/**
 * Shift all dates in a fare-cache response so they start from today.
 * This is the ONLY date-shifting in the entire system, isolated to fare-cache.
 * After shifting, entries with dates before today are removed.
 * @param {object} body - Parsed JSON response
 * @param {string} recordedDepDate - The recorded departure date (YYYY-MM-DD)
 * @returns {object} Shifted body
 */
function shiftFareCacheDates(body, recordedDepDate) {
    if (!body || !recordedDepDate) return body;

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const recDate = new Date(recordedDepDate + 'T00:00:00Z');
    const todayDate = new Date(todayStr + 'T00:00:00Z');
    const shiftMs = todayDate.getTime() - recDate.getTime();

    // Clip past dates from outbound/inbound arrays (timetable responses)
    // This MUST run even when shiftMs === 0, because the timetable data
    // may contain dates before today (e.g. recorded on day X, served on day X+1).
    const clipPastDates = (arr) => {
        if (!Array.isArray(arr)) return arr;
        return arr.filter(entry => {
            if (entry && entry.departureDate && typeof entry.departureDate === 'string') {
                return entry.departureDate >= todayStr;
            }
            return true;
        });
    };

    if (shiftMs === 0) {
        // No date shifting needed, but still clip past dates
        const result = JSON.parse(JSON.stringify(body));
        if (result.outbound) result.outbound = clipPastDates(result.outbound);
        if (result.inbound) result.inbound = clipPastDates(result.inbound);
        return result;
    }

    const shifted = shiftDatesInObject(body, shiftMs);
    if (shifted.outbound) shifted.outbound = clipPastDates(shifted.outbound);
    if (shifted.inbound) shifted.inbound = clipPastDates(shifted.inbound);

    return shifted;
}

/** Recursively shift all date strings in an object by the given ms offset. */
function shiftDatesInObject(obj, shiftMs) {
    if (Array.isArray(obj)) return obj.map(v => shiftDatesInObject(v, shiftMs));
    if (obj && typeof obj === 'object') {
        const result = {};
        for (const key in obj) result[key] = shiftDatesInObject(obj[key], shiftMs);
        return result;
    }
    if (typeof obj === 'string') {
        const isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(obj);
        const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(obj);
        if (isIso || isDateOnly) {
            const d = new Date(obj);
            if (!isNaN(d.getTime())) {
                const shifted = new Date(d.getTime() + shiftMs);
                if (isDateOnly) {
                    return `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, '0')}-${String(shifted.getUTCDate()).padStart(2, '0')}`;
                }
                return shifted.toISOString();
            }
        }
    }
    return obj;
}

// ─── Browser State Transformation ─────────────────────────────────────────────

/**
 * Transform browser state so cached booking data reflects the user's current
 * search rather than the original recording.
 */
function transformBrowserState(rawState, recorded, current, stationLookup) {
    if (!recorded?.origin || !current?.origin) return rawState;
    if (recorded.origin === current.origin && recorded.destination === current.destination
        && recorded.departureDate === current.departureDate
        && recorded.returnDate === current.returnDate) return rawState;

    const st = JSON.parse(JSON.stringify(rawState));

    const transformBase64 = (b64) => {
        try {
            let decoded = Buffer.from(b64, 'base64').toString('utf8');
            decoded = transformFlightResponse(decoded, recorded, current, stationLookup);
            return Buffer.from(decoded).toString('base64');
        } catch { return b64; }
    };

    if (Array.isArray(st.sessionStorage)) {
        for (const entry of st.sessionStorage) {
            if (entry[0] === 'js-cached-booking-data') entry[1] = transformBase64(entry[1]);
        }
    }
    if (Array.isArray(st.cookies)) {
        for (const c of st.cookies) {
            if (c.name === 'JS_PreviousSearch') c.value = transformBase64(c.value);
        }
    }
    return st;
}

// ─── Auto-detect Recorded Flight Params ───────────────────────────────────────

function autoDetectFlightParams(mocks) {
    // Try FlightPageData.SearchInfo first
    const fpdMock = mocks.find(m => {
        try { return new URL(m.url).pathname.toLowerCase().includes('/flight/flightpagedata'); } catch { return false; }
    });
    if (fpdMock?.response?.body?.SearchInfo) {
        const si = fpdMock.response.body.SearchInfo;
        return {
            origin: si.OriginIata || null,
            destination: si.DestinationIata || null,
            departureDate: normalizeDate(si.DepartureDate || null),
            returnDate: normalizeDate(si.ReturnDate || null),
            adults: String(si.Passengers?.Adults || 1),
            children: String(si.Passengers?.Children || 0),
            infants: String(si.Passengers?.Infants || 0),
        };
    }
    // Fallback: scan InternalSelect URLs
    const { extractFlightParams } = require('./constants');
    for (const mock of mocks) {
        const p = extractFlightParams(mock.url);
        if (p.origin && p.destination) return p;
        if (mock.requestBody) {
            const p2 = extractFlightParams(`http://x?${mock.requestBody}`);
            if (p2.origin && p2.destination) return p2;
        }
    }
    return {};
}

module.exports = {
    buildStationLookup, transformFlightResponse, shiftFareCacheDates,
    transformBrowserState, autoDetectFlightParams,
};

// ─── Passenger Multiplexer ───────────────────────────────────────────────────

function multiplexPassengers(body, currentParams) {
    if (!body || typeof body !== 'object') return body;
    const requestedAdults = parseInt(currentParams.adults || '1', 10);
    const requestedChildren = parseInt(currentParams.children || '0', 10);
    // Ignore infants for seat/baggage as they sit on laps and don't occupy seats usually, but they do appear in Passengers array.
    const requestedInfants = parseInt(currentParams.infants || '0', 10);
    const totalPax = requestedAdults + requestedChildren + requestedInfants;
    if (totalPax <= 1) return body;

    let modified = false;

    const expandPassengersArray = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0) return arr;
        if (arr.length >= totalPax) return arr; // Already expanded

        const template = JSON.parse(JSON.stringify(arr[0]));
        const newArr = [];

        let currentId = 1;

        for (let i = 0; i < requestedAdults; i++) {
            const p = JSON.parse(JSON.stringify(template));
            p.PassengerType = 'Adult';
            // Some endpoints use "PassengerNumber", others "PassengerKey"
            if (p.PassengerKey) p.PassengerKey = `PAX${currentId}`;
            if (p.PassengerNumber !== undefined) p.PassengerNumber = currentId - 1;
            newArr.push(p);
            currentId++;
        }
        for (let i = 0; i < requestedChildren; i++) {
            const p = JSON.parse(JSON.stringify(template));
            p.PassengerType = 'Child';
            if (p.PassengerKey) p.PassengerKey = `PAX${currentId}`;
            if (p.PassengerNumber !== undefined) p.PassengerNumber = currentId - 1;
            newArr.push(p);
            currentId++;
        }
        for (let i = 0; i < requestedInfants; i++) {
            const p = JSON.parse(JSON.stringify(template));
            p.PassengerType = 'Infant';
            if (p.PassengerKey) p.PassengerKey = `PAX${currentId}`;
            if (p.PassengerNumber !== undefined) p.PassengerNumber = currentId - 1;
            newArr.push(p);
            currentId++;
        }
        modified = true;
        return newArr;
    };

    if (body.BookingSummary && Array.isArray(body.BookingSummary.Passengers)) {
        body.BookingSummary.Passengers = expandPassengersArray(body.BookingSummary.Passengers);
    }
    if (Array.isArray(body.Passengers)) {
        body.Passengers = expandPassengersArray(body.Passengers);
    }
    
    // Root level PassengerTotals
    if (Array.isArray(body.PassengerTotals)) {
        body.PassengerTotals = expandPassengersArray(body.PassengerTotals);
    }

    if (body.Data && body.Data.BookingSummary && Array.isArray(body.Data.BookingSummary.Passengers)) {
        body.Data.BookingSummary.Passengers = expandPassengersArray(body.Data.BookingSummary.Passengers);
    }

    const expandBreakdownCharges = (bd) => {
        if (!bd) return;
        ['OutboundJourney', 'InboundJourney', 'ReturnJourney'].forEach(key => {
            if (bd[key] && bd[key].PassengerSection && Array.isArray(bd[key].PassengerSection.Charges)) {
                const originalCharges = bd[key].PassengerSection.Charges;
                const baseCharge = originalCharges.find(c => c.Name === 'Adulto' || c.ChargeCode === '' || c.ChargeCode === null);
                if (baseCharge && originalCharges.length !== (requestedAdults + requestedChildren)) {
                    // Infants typically don't get a full passenger section charge
                    const newCharges = [];
                    for (let i = 0; i < requestedAdults; i++) {
                        const charge = JSON.parse(JSON.stringify(baseCharge));
                        charge.Name = 'Adulto';
                        newCharges.push(charge);
                    }
                    for (let i = 0; i < requestedChildren; i++) {
                        const charge = JSON.parse(JSON.stringify(baseCharge));
                        charge.Name = 'Niño';
                        newCharges.push(charge);
                    }
                    bd[key].PassengerSection.Charges = newCharges;
                    modified = true;
                }
            }
        });
    };

    expandBreakdownCharges(body.UncommittedBreakdown);
    expandBreakdownCharges(body.CommittedBreakdown);

    return modified ? body : body; // Always return body
}

module.exports.multiplexPassengers = multiplexPassengers;
