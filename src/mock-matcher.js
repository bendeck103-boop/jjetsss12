const crypto = require('crypto');

function deterministicStringify(obj) {
    if (obj === null || typeof obj !== 'object') return JSON.stringify(obj);
    if (Array.isArray(obj)) return '[' + obj.map(deterministicStringify).join(',') + ']';
    const keys = Object.keys(obj).sort();
    return '{' + keys.map(k => JSON.stringify(k) + ':' + deterministicStringify(obj[k])).join(',') + '}';
}

function hashBody(body) {
    if (!body || (typeof body === 'object' && Object.keys(body).length === 0)) return null;
    let str = typeof body === 'string' ? body : '';
    if (typeof body === 'object') {
        str = deterministicStringify(body);
    } else {
        try { str = deterministicStringify(JSON.parse(body)); } catch { }
    }
    if (!str || str.trim() === '') return null;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * 3-tier mock matching:
 *   1. Exact: URL + method + request body hash
 *   2. Path:  pathname + method (ignores query string)
 *   3. Pattern: pathname prefix + method (for fare-cache etc.)
 *
 * Returns { mock, matchType } or null.
 */
function findMock(mocks, targetUrl, method, requestHash) {
    let targetParsed;
    try { targetParsed = new URL(targetUrl); } catch { return null; }

    // 1. Exact match
    const exact = mocks.find(m => {
        try {
            const mu = new URL(m.url);
            return mu.pathname + mu.search === targetParsed.pathname + targetParsed.search
                && m.method === method
                && (m.requestHash === requestHash || (!m.requestHash && !requestHash));
        } catch { return false; }
    });
    if (exact) return { mock: exact, matchType: 'exact' };

    // 2. Path match (same pathname, ignore query)
    //    When multiple mocks share the same pathname (e.g. Breakdown/Get with
    //    different numbers of SellKeys), pick the one whose repeated-param
    //    signature best matches the incoming request.
    const pathMatches = mocks.filter(m => {
        try {
            return new URL(m.url).pathname === targetParsed.pathname && m.method === method;
        } catch { return false; }
    });
    if (pathMatches.length === 1) {
        return { mock: pathMatches[0], matchType: 'path' };
    }
    if (pathMatches.length > 1) {
        // Count repeated query-string keys in the request (e.g. SellKeys appears twice)
        const countRepeatedParams = (url) => {
            try {
                const counts = {};
                for (const [k] of new URL(url).searchParams) counts[k] = (counts[k] || 0) + 1;
                return counts;
            } catch { return {}; }
        };
        const targetCounts = countRepeatedParams(targetUrl);
        let bestMock = pathMatches[0];
        let bestScore = -Infinity;
        for (const m of pathMatches) {
            const mCounts = countRepeatedParams(m.url);
            // Score: penalize the sum of absolute differences in repeated param counts
            let score = 0;
            const allKeys = new Set([...Object.keys(targetCounts), ...Object.keys(mCounts)]);
            for (const k of allKeys) {
                score -= Math.abs((targetCounts[k] || 0) - (mCounts[k] || 0));
            }
            if (score > bestScore) { bestScore = score; bestMock = m; }
        }
        return { mock: bestMock, matchType: 'path' };
    }

    // 3. Pattern match (pathname starts with same prefix, at least 2 segments)
    const segments = targetParsed.pathname.split('/').filter(Boolean);
    if (segments.length >= 2) {
        const prefix = '/' + segments.slice(0, 2).join('/');
        const pattern = mocks.find(m => {
            try {
                return new URL(m.url).pathname.startsWith(prefix) && m.method === method;
            } catch { return false; }
        });
        if (pattern) return { mock: pattern, matchType: 'pattern' };
    }

    return null;
}

module.exports = { findMock, hashBody, deterministicStringify };
