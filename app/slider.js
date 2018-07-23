import css from './function/style'

window.addEventListener('load', ()=>{
    const thumbnailImages = document.querySelectorAll('.thumbnail__images img')
    const sliderContainer = document.querySelector('.slider__container')
    const slider = document.querySelector('.slider')
    const sliderImages = document.querySelectorAll('.slider img')
    let csm = 0


    thumbnailImages[0].parentNode.dataset.slide = 'current'

    thumbnailImages.forEach( img =>{
        img.addEventListener('click', (e)=>{
            const targetIndex = [...thumbnailImages].findIndex(img => (img.src) == e.target.src)
            const currentIndex = [...thumbnailImages].findIndex(img => (img.parentNode.dataset.slide ) == 'current' )
            

            sliderImages.forEach(simg => {
                css(simg, {
                    transform : 'scale(1)',
                    opacity: '0'
                })
            })


            if ( currentIndex < targetIndex) {
                sliderImages[`${(csm/sliderContainer.offsetWidth) + 1}`].src = e.target.src
                css( sliderImages[`${(csm/sliderContainer.offsetWidth) + 1}`],{
                    opacity: '1',
                    transform : 'scale(1.5)'
                })
                slide('next')
            } else {
                slide('prev')
                sliderImages[`${(csm/sliderContainer.offsetWidth)}`].src = e.target.src
                css( sliderImages[`${(csm/sliderContainer.offsetWidth)}`],{
                    opacity: '1',
                    transform : 'scale(1.5)'
                })
            }

            thumbnailImages.forEach(img => {
                if (img.parentNode.dataset.slide == 'current'){
                    img.parentNode.dataset.slide = ''
                }
            })

            if(img.parentNode.dataset.slide != 'current'){
                img.parentNode.dataset.slide = 'current'
            }

          
            
        })
    })
    


    const slide = (d) =>{
        if(d == 'next' && (slider.offsetWidth  - sliderContainer.offsetWidth) != csm){
            csm += sliderContainer.offsetWidth
            slider.style.transform = `translateX(-${csm}px)`
        }else if(d == 'prev' && csm != 0){
            csm -= sliderContainer.offsetWidth
            slider.style.transform = `translateX(-${csm}px)`
        }
    }
})

