### 简介
一个用于渐进式加载图片的vuepress插件，就像[gatsby.js](https://www.gatsbyjs.com/)和 [medium](https://medium.com/)一样。

例子如下：
![a demo](./.images/screen-shot.gif)

### 如何使用
```shell
$ npm install vuepress-plugin-progressive-image-loader
```

然后再 `.vuepress/config.js`添加如下的代码:

```js
module.exports={
    plugin:{'vuepress-plugin-progressive-image-loader'}
}
```

### 特性
- 遵从渐进式加载哲学
- 产生一个小的、压缩后的base64格式的图片作为真正图片的占位符，所以能够节省页面加载的时间
- 为压缩图片添加模糊效果，使图片的切换更为顺滑

### 警告⚠️
该代码可能存在许多bug，欢迎提交issue或者pr

### 更多
[思否 vuepress实现渐进式加载](https://segmentfault.com/a/1190000040056541?_ea=134049527)