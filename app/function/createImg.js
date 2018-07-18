import css from './style'

const sliderContainer = document.querySelector('.slider__container')
const slider = document.querySelector('.slider')

const createImg = (src, cls, add)=>{
    const img = document.createElement('img')
    const div = document.createElement('div')
        img.src = src 
        div.appendChild(img)
        div.classList = cls
        css(div,{
            float: 'left',
            width: `${sliderContainer.offsetWidth}px`
        })
        if (add === 'append') {
            slider.append(div)
        } else {
            slider.prepend(div)
        }
}
export default createImg