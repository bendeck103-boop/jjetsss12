self.onmessage = function (e) {
    const intervalTime = e.data.intervalTime || 1000;
    const cookieLifetime = e.data.cookieLifetime || 2;
    const tabId = e.data.tabId;

    // eslint-disable-next-line no-restricted-globals
    setInterval(() => {
        self.postMessage({ tabId, cookieLifetime });
    }, intervalTime);
};
