//import cheerio from 'cheerio'
export default {
    mounted() {
        setTimeout(()=>{
            this.reRenderImage()
        },1000)
        //this part is to add a global style for 
        let style = document.createElement('style');
        style.textContent = `
        img[data-src] {
            filter: blur(0.2em);
        }
        img {
            filter: blur(0em);
            transition: filter 0.5s;
        }
        `  
        document.head.appendChild(style);
        console.log(this.$children[0])
        //this is to change the <img> src from base64 code to the origin one
        this.$nextTick(() => {
            this.reRenderImage();
        })
    },
    methods: {
        reRenderImage() {
            //this is on globalLayout component
            // recuire find children
            const loadImages = (image) => {
                image.setAttribute('src', image.getAttribute('data-src'));
                image.onload = () => {
                    image.removeAttribute('data-src');
                };
            };
            let imagesToLoad=document.querySelectorAll('img[data-src]');
          // console.log(document.querySelectorAll('div'));
            imagesToLoad.forEach(item=>loadImages(item))
            // const dfs = (root) => {
            //     if (root) {
            //         if (root.$refs.placeHolder) {
            //             let imagesToLoad = this.$refs.placeHolder;
            //             console.log(imagesToLoad);
            //             imagesToLoad.forEach((img) => {
            //                 console.log(image)
            //                 loadImages(img)
            //             })
            //             return;
            //         }
            //         if (root.$children) {

            //             console.log(root.$children)
            //             root.$children.forEach(el => {
            //                 console.log(el);
            //                 dfs(el);
            //             })
            //         }
            //     }
            // }
            // dfs(this)
        }
    }
}