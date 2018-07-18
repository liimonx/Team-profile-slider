import css from './function/style'
import createImg from './function/createImg'

window.addEventListener('load', ()=>{
    const sliderImages = document.querySelectorAll('.thumbnail__images img')
    const sliderContainer = document.querySelector('.slider__container')
    const slider = document.querySelector('.slider')


    sliderImages.forEach( img =>{
        img.addEventListener('click', (e)=>{
            const currentImage = document.querySelector('.current img')
            const nextImage = document.querySelector('.next img')
            const prevImage = document.querySelector('.prev img')
            const currentIndex = [...sliderImages].findIndex(img => (img.src) == currentImage.src)
            const index = [...sliderImages].findIndex(img => (img.src) == e.target.src)
            if (currentIndex < index) {

            } else {

            }
            
        })
    })

})

