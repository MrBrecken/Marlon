/* --- STEP 1: IMPORT NECESSARY SCRIPTS --- */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js');
importScripts('/uv.config.js');

/* --- STEP 2: WAIT AND INITIALIZE --- */
if (self.Ultraviolet) {
    const sw = new self.UVServiceWorker();

    self.addEventListener('fetch', (event) => {
        event.respondWith(sw.fetch(event));
    });
} else {
    console.error("Ultraviolet failed to load inside the Service Worker.");
}
