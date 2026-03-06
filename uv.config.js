self.__scramjet$config = {
    prefix: '/service/',
    codec: self.__scramjet$config?.codec || 'xor', // Uses XOR encryption for URLs
    base: 'https://bare.asteris.xyz/', // You can use the same Bare servers
    handler: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/bundle.js',
    worker: '/sw.js',
    config: '/scramjet.config.js'
};
