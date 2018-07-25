import css from './style'

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')

const createImg = (i, cls)=>{
    const img = document.createElement('img')
    const div = document.createElement('div')
        img.src = i.src
        css(img, {
            transition: 'all 0.6s cubic-bezier(0.67, -0.4, 0.97, 0.97) 0s'
        })
        div.appendChild(img)
        div.classList.add(cls)
        css(div,{
            float: 'left',
            width: `${sliderContainer.offsetWidth}px`
        })
        slider.appendChild(div)
}
export default createImg