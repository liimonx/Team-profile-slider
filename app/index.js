/**
 * Application entry point
 */

// Load application styles
import '../assets/style/index.scss';
// ================================
// START YOUR APP HERE
// ================================
// load all function
import createImg from './function/createImg'

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.thumbnail__images img')

slider.style.width = `${sliderContainer.offsetWidth * sliderImages.length}px`

sliderImages.forEach(img => createImg(img.src, slider))
