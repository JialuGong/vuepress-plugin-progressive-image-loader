const {resolve} =require('path')


module.exports=(_options,ctx)=>{
    return {
        extendMarkdown:md=>{
            md.set({breaks:true})
            md.use(require(resolve(__dirname, './lib/markdown')), { 'sourceDir': ctx.sourceDir })
        },
        chainWebpack(config,isServer){
            config.delete('url-loader')
        },
        clientRootMixin: resolve(__dirname, './lib/mixins/mixin.js')
    }
}