const imageThumbnail = require('image-thumbnail');
const { sleep } = require('deasync');
module.exports = (path, options) => {
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
