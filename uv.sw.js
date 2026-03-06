/* Ultraviolet Service Worker - Direct Version */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js');
importScripts('/uv.config.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// We use a slight delay to ensure uv.bundle.js is parsed
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/service/')) {
        const sw = new self.UVServiceWorker();
        event.respondWith(sw.fetch(event));
    }
});
