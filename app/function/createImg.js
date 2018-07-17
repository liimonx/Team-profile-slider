import css from './style'

const sliderContainer = document.querySelector('.slider__container')


const createImg = (src, grid)=>{
    const img = document.createElement('img')
    const div = document.createElement('div')
        img.src = src 
        div.appendChild(img)
        css(div,{
            float: 'left',
            width: `${sliderContainer.offsetWidth}px`
        })
        grid.appendChild(div)
}
export default createImg