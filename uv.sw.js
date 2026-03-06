/* --- STEP 1: IMPORT THE ENGINE --- */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js');

/* --- STEP 2: IMPORT THE CONFIG --- */
importScripts('/uv.config.js');

/* --- STEP 3: INITIALIZE --- */
if (self.Ultraviolet) {
    const sw = new self.UVServiceWorker();

    self.addEventListener('fetch', (event) => {
        event.respondWith(sw.fetch(event));
    });
}
