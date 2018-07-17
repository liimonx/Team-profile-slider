import css from './style'

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')

const createImg = (src, cls)=>{
    const img = document.createElement('img')
    const div = document.createElement('div')
        img.src = src 
        div.appendChild(img)
        div.classList = cls
        css(div,{
            float: 'left',
            width: `${sliderContainer.offsetWidth}px`
        })
        slider.appendChild(div)
}
export default createImg