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
    transition: '0.7s cubic-bezier(.25, 0, .1, 1)',
})

sliderImages.forEach(img => createImg(img))












