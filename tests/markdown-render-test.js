const md = require("markdown-it")();
const options = {
  sourceDir: "/Users/huaiyu/personal-project/host-of-loader/docs",
};
let ans = md
  .use(require("../markdown-it-base64"), options)
  .render("![dd](1.jpeg)");
console.log(ans);
