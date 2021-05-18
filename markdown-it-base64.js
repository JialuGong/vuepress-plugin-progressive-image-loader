// A temp version
// placehold is base64 
// TODO compare the base64 & lazy load image
const imageThumbnailSync = require('./util.js')
const { logger } = require('@vuepress/shared-utils')
const readChunk = require('read-chunk')
const imageType = require('image-type')
const path=require('path')

module.exports = function (md,params) {
    let defaultImageRender = md.renderer.rules.image;
    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        let token = tokens[idx];
        const originSrc = token.attrs.filter(x => x[0] === 'src').map(x => x[1])[0];
        const imgAbsolutePath = path.resolve(params.sourceDir, originSrc)
        let thumbnailOptions = {responseType: 'base64', percentage: 1 }
        const { mime } = imageType(readChunk.sync(imgAbsolutePath, 0, 12));
        let placeholder;
        try {
            let response = imageThumbnailSync(imgAbsolutePath, thumbnailOptions);
            placeholder = `data:${mime};base64,${response}`;
        } catch (err) {
            placeholder = originSrc;
           // logger.error(err);
        }
        token.attrSet('src', placeholder);
        token.attrSet('data-src', originSrc)
        token.attrSet('loading', 'lazy');
        token.attrSet('style','width:1280px;height:300px');
        token.attrSet('ref', 'placeHolder');
        return defaultImageRender(tokens, idx, options, env, self);
    }
}