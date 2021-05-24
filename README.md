# VUEPRESS image progressive loader

### Description

A plugin to help loading the image in a progressive way,just like gatsby.js and medium.

Just like this!
![a demo](./.images/screen-shot.gif)

### Warning 

It's just a very naive version,having many bugs to fix!!!

### How to use

If you want to have a try, you can do like follows.

```shell
$ npm install vuepress-plugin-progressive-image-loader
```

And in `.vuepress/config.js`:

```js
module.exports={
    plugin:{'vuepress-plugin-progressive-image-loader'}
}
```

### TODO
- [ ] support custom image size in markdown
