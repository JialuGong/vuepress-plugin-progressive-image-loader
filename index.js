const { resolve, relative } = require("path");
const { config } = require("process");

module.exports = (_options, ctx) => {
  return {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require(resolve(__dirname, "./lib/markdown")), {
        sourceDir: ctx.sourceDir,
      });
    },
    chainWebpack(config, _isServer) {
      config.module
      .rule('vue')
      .use("vue-loader")
      
      .options({
        transformAssetUrls: {
          video: ["src", "poster"],
          source: "src",
          img: ["src","data-src"],
          image: ["xlink:href", "href"],
          use: ["xlink:href", "href"],
        },
      });
    },
    clientRootMixin: resolve(__dirname, "./lib/mixins/mixin.js"),
  };
};
