//const {logger}=require("@vuepres/shared-utils")
const {resolve} =require('path')
const {logger}=require('@vuepress/shared-utils');

module.exports=(options,ctx)=>{
    return {
        extendMarkdown:md=>{
            md.set({breaks:true})
            md.use(require(resolve(__dirname, './markdown-it-base64.js')), { 'sourceDir': ctx.sourceDir })
        },
        clientRootMixin: resolve(__dirname, './mixin.js')

    }
}