//import cheerio from 'cheerio'
export default{
    mounted(){
        console.log(`mouted`)
        console.log(document.getElementsByTagName('img'))
        let imagesToLoad=document.querySelectorAll('img[data-src]')
        console.log(imagesToLoad)
        this.$nextTick(()=>{
            this.reRenderImage(imagesToLoad);
        })
    },
    methods:{
        reRenderImage(imagesToLoad){
            const loadImages = (image) => {
                image.setAttribute('src', image.getAttribute('data-src'));
                image.onload = () => {
                    image.removeAttribute('data-src');
                };
               
            };
            imagesToLoad.forEach((img) => {
                console.log(image)
                loadImages(img)
            })
        }
    }
}