import css from './function/style'
import createImg from './function/createImg'

window.addEventListener('load', ()=>{
    const sliderImages = document.querySelectorAll('.thumbnail__images img')
    const sliderContainer = document.querySelector('.slider__container')
    const slider = document.querySelector('.slider')
    const currentImage = document.querySelector('.current img')


    sliderImages.forEach( img =>{
        img.addEventListener('click', (e)=>{
            const nextImage = document.querySelector('.next img')
            const prevImage = document.querySelector('.prev img')
            const currentIndex = [...sliderImages].findIndex(img => (img.src) == currentImage.src)
            const index = [...sliderImages].findIndex(img => (img.src) == e.target.src)
            if (currentIndex < index) {
                nextImage.src = e.target.src
                css(slider, {
                    transform: `translateX(-${sliderContainer.offsetWidth * 2}px)`
                })
            } else {
                prevImage.src = e.target.src
                css(slider, {
                    transform: `translateX(0px)`
                })
            }
        })
    })

})

