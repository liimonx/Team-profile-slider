const css = (el, styles)=>{
    for (const property in styles) {
        el.style[property] = styles[property]
    }
}
export default css