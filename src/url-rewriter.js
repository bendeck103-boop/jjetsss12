const { JETSMART_DOMAINS } = require('./constants');

/**
 * Replace all JetSmart absolute URLs with the local server base URL.
 * Domain list is ordered longest-first to avoid partial matches.
 */
function rewriteUrls(content, localBase) {
    let result = content;
    for (const d of JETSMART_DOMAINS) {
        result = result
            .split(`https://${d}`).join(localBase)
            .split(`http://${d}`).join(localBase)
            .split(`https:\\/\\/${d}`).join(localBase.replace(/\//g, '\\/'))
            .split(`http:\\/\\/${d}`).join(localBase.replace(/\//g, '\\/'))
            .split(`https%3A%2F%2F${d}`).join(encodeURIComponent(localBase).replace(/%3A/g, ':'))
            .split(`http%3A%2F%2F${d}`).join(encodeURIComponent(localBase).replace(/%3A/g, ':'));
    }
    return result;
}

module.exports = { rewriteUrls };
