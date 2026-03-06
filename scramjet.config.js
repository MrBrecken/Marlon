/* Scramjet Proxy Configuration */
self.__scramjet$config = {
    prefix: '/service/',
    codec: 'xor', // Standard encryption for URLs
    base: 'https://bare.asteris.xyz/', // Active Bare Server
    handler: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/bundle.js',
    worker: '/sw.js',
    config: '/scramjet.config.js'
};
