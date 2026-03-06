self.__scramjet$config = {
    prefix: '/service/',
    codec: 'xor',
    base: 'https://bare.asteris.xyz/', 
    handler: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/bundle.js',
    worker: '/sw.js',
    config: '/scramjet.config.js'
};
