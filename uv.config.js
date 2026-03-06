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
