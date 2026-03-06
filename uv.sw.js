/* Ultraviolet Service Worker */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js');
importScripts('/uv.config.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    // Check if the request is for the proxied service
    if (event.request.url.startsWith(location.origin + '/service/')) {
        event.respondWith((async () => {
            // Wait for Ultraviolet to be defined
            if (!self.Ultraviolet) {
                return fetch(event.request);
            }
            
            const sw = new self.UVServiceWorker();
            return sw.fetch(event);
        })());
    }
});
