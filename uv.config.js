/* Updated Config - Switching to an active Bare Server */
self.__uv$config = {
    prefix: '/service/',
    
    // This server is currently a more stable alternative
    bare: 'https://bare.asteris.xyz/', 
    
    /* If it goes black again, try replacing the 'bare' line with:
       bare: 'https://bare.fly.dev/',
       OR
       bare: 'https://api.tunmetet.net/bare/',
    */

    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.3/dist/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
