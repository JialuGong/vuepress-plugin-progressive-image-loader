<center> VuePress image progressive loader</center>


![npm badge](https://nodei.co/npm/uepress-plugin-progressive-image-loader.png)

### Description

A VuePress plugin to help loading the image in a progressive way,just like gatsby.js and medium.

Just like this!
![a demo](./.images/screen-shot.gif)


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

### features

- Follow the laws of progressive loading.
- Generate a small base64 thumbnail for place holder, so it can save the loading time of pages.
- Add a blur for the thumnail to make the transition more fluent.
- 
### Warning 

It's just a very naive version,having many bugs to fix!!!

### TODO
- [ ] support custom image size in markdown
