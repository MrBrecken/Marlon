/* Scramjet Service Worker */
importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/sw.js');
importScripts('/scramjet.config.js');

const scramjet = new Scramjet(self.__scramjet$config);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(location.origin + self.__scramjet$config.prefix)) {
        event.respondWith(scramjet.fetch(event));
    }
});
