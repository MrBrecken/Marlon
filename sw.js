importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/sw.js');

const scramjet = new Scramjet();

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(location.origin + '/service/')) {
        event.respondWith(scramjet.fetch(event));
    }
});
