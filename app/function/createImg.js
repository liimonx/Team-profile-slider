import css from './style'

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')

const createImg = (i)=>{
    const img = document.createElement('img')
    const div = document.createElement('div')
        img.src = i.src
        css(img, {
            transition: '0.7s cubic-bezier(.25, 0, .1, 1)'
        })
        div.appendChild(img)
        css(div,{
            float: 'left',
            width: `${sliderContainer.offsetWidth}px`
        })
        slider.appendChild(div)
}
export default createImg