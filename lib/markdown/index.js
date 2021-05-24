const { logger } = require("@vuepress/shared-utils");
const { imageThumbnailSync, getType, getSize } = require("./util");

const path = require("path");

module.exports = function (md, params) {
  let defaultImageRender = md.renderer.rules.image;
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    let token = tokens[idx];
    let originSrc = token.attrs
      .filter((x) => x[0] === "src")
      .map((x) => x[1])[0];
    let imgAbsolutePath = path.resolve(params.sourceDir, originSrc);
    logger.info(`imgAbsolutePath is ${imgAbsolutePath}`);
    let thumbnailOptions = { responseType: "base64", percentage: 1 };
    try {
      let { width: originWidth, height: originHeight } =
        getSize(imgAbsolutePath);
      let type = getType(imgAbsolutePath);
      let response = imageThumbnailSync(imgAbsolutePath, thumbnailOptions);
      let placeholder = `data:${type};base64,${response}`;
      token.attrSet("src", placeholder);
      token.attrSet("data-src", originSrc);
      token.attrSet("style", `width:${originWidth}px;`);
      token.attrSet("ref", "placeHolder");
    } catch (err) {
      logger.error(err);
    }
    return defaultImageRender(tokens, idx, options, env, self);
  };
};
