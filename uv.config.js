/* Essential: Import Bare-Mux for communication between the page and the worker */
importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux@1.1.0/dist/index.js');

self.__uv$config = {
    prefix: '/service/',
    
    /* BARE SERVER: If the screen is black, change this URL to one of the alternates below.
    */
    bare: 'https://uv.radon.games/bare/', 
    
    // Alternates to try if radon.games is slow:
    // bare: 'https://bare.fly.dev/',
    // bare: 'https://bare.astral.sh/',

    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
