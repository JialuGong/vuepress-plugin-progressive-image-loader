//import cheerio from 'cheerio'
export default {
  mounted() {
    let style = document.createElement("style");
    style.textContent = `
        img[data-src] {
            filter: blur(0.2em);
        }
        img {
            filter: blur(0em);
            transition: filter 0.3s;
        }
        `;
    document.head.appendChild(style);
    console.log(this.$children[0]);
  },
  updated(){
    this.$nextTick(() => {
      this.reRenderImage();
    });
  },
  methods: {
    reRenderImage() {
      const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
          image.removeAttribute("data-src");
        };
      };
      let imagesToLoad = document.querySelectorAll("img[data-src]");
      imagesToLoad.forEach((item) => loadImages(item));
    },
  },
};
