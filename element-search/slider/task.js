sliders = Array.from(document.querySelectorAll('.slider__item'))
dots = Array.from(document.querySelectorAll('.slider__dot'))
index = 0
dots[index].className = 'slider__dot slider__dot_active'


sliderShow = (index) => {
    document.querySelector('.slider__item_active').className = 'slider__item'
    sliders[index].className = 'slider__item slider__item_active'
    document.querySelector('.slider__dot_active').className = 'slider__dot'
    dots[index].className = 'slider__dot slider__dot_active'
}


document.querySelector('.slider__arrow_prev').onclick = () => {
    index -=1
    if (index < 0) {
        index = sliders.length - 1
    }
    sliderShow(index)    
}

document.querySelector('.slider__arrow_next').onclick = () => {
    index +=1
    if (index > 4) {
        index = 0
    }
    sliderShow(index)    
}

dots.forEach((dot, dotIndex) => {
    dot.onclick = () => {
        index = dotIndex     
        sliderShow(index)        
    }
});
