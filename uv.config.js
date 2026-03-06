/* Ultraviolet Configuration
   This check prevents the "importScripts is not defined" error on the main page.
*/
if (typeof importScripts === 'function') {
    try {
        importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux@1.1.0/dist/index.js');
    } catch (e) {
        console.error('Bare-mux failed to load inside the worker:', e);
    }
}

self.__uv$config = {
    prefix: '/service/',
    bare: 'https://uv.radon.games/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
