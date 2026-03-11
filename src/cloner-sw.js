// Service Worker v2 — intercepts cross-origin requests and proxies them
// through the local server. Google Fonts pass through to CDN.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names => Promise.all(names.map(n => caches.delete(n))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const selfHost = self.location.host;

    // Only intercept external requests (not our own server)
    const fontPassthrough = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    if (url.host !== selfHost && url.protocol.startsWith('http') && !fontPassthrough.includes(url.host)) {
        const proxyUrl = `/__spa_proxy?url=${encodeURIComponent(event.request.url)}`;

        if (['POST', 'PUT', 'PATCH'].includes(event.request.method)) {
            event.respondWith((async () => {
                const body = await event.request.clone().arrayBuffer();
                return fetch(new Request(proxyUrl, {
                    method: event.request.method,
                    headers: event.request.headers,
                    body, mode: 'cors'
                }));
            })());
        } else {
            event.respondWith(fetch(new Request(proxyUrl, {
                method: event.request.method,
                headers: event.request.headers,
                mode: 'cors', credentials: event.request.credentials,
                redirect: 'follow'
            })));
        }
    }
});
