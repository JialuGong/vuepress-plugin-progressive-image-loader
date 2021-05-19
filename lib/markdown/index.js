// A temp version
// placehold is base64 
// TODO compare the base64 & lazy load image
const { logger } = require('@vuepress/shared-utils')
const { imageThumbnailSync,getType,getSize}=require('./util')

const path=require('path')

module.exports = function (md,params) {
    let defaultImageRender = md.renderer.rules.image;
    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        let token = tokens[idx];
        const originSrc = token.attrs.filter(x => x[0] === 'src').map(x => x[1])[0];
        const imgAbsolutePath = path.resolve(params.sourceDir, originSrc)
        let thumbnailOptions = {responseType: 'base64', percentage: 1 }
        try {
            let {width:originWidth,height:originHeight}=getSize(imgAbsolutePath);
            let type=getType(imgAbsolutePath);
            let response = imageThumbnailSync(imgAbsolutePath, thumbnailOptions);
            let placeholder = `data:${type};base64,${response}`;
            token.attrSet('src', placeholder);
            token.attrSet('data-src', originSrc)
            token.attrSet('style', `width:${originWidth};height:${originHeight}`);
            token.attrSet('ref', 'placeHolder');
        } catch (err) {
            logger.error(err);
        }      
        return defaultImageRender(tokens, idx, options, env, self);
    }
}