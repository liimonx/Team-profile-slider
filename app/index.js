/**
 * Application entry point
 */
// Load application styles
import '../assets/style/index.scss';

// load all function
import createImg from './function/createImg'
import css from './function/style';
import './slider'

// ================================
// START YOUR APP HERE
// ================================

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.thumbnail__images img')

css(slider, {
    width: `${sliderContainer.offsetWidth * sliderImages.length }px`,
    transition: '0.5s cubic-bezier(0.15, 0.56, 0.98, 0.58)',
})

sliderImages.forEach(img => createImg(img))












