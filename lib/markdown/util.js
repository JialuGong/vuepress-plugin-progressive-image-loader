const imageThumbnail = require('image-thumbnail');
const sizeOf=require('image-size')
const { sleep } = require('deasync');
const readChunk = require('read-chunk')
const imageType = require('image-type')

const imageThumbnailSync=(path,options)=>{
    let data;
    let err;
    imageThumbnail(path, options)
        .then(res => data = res)
        .catch(e => err = e);
    while (data === undefined && err === undefined) {
        sleep(100);
    }
    if (data || err) {
        if (err) throw new Error(err);
        else return data;
    }
}
const getSize=(path)=>{
    return sizeOf(path)
}
/**
 * 
 * @param {string} path 
 */
const getType=(path)=>{
    let { mime } = imageType(readChunk.sync(imgAbsolutePath, 0, 12));
    return mime;
}
module.exports={
    imageThumbnailSync,
    getSize,
    getType
}