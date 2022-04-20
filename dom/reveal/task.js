function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0 || top > window.innerHeight) {            
        return false
    }    
    return true
}

function showElement() {
    for (let el of document.querySelectorAll('.reveal')) {
        if (isVisible(el)) {
            el.classList.add('reveal_active')
        }
        else if (el.classList.contains('reveal_active') && (!isVisible(el))) {
            el.classList.remove('reveal_active')
        }
    }
}

window.addEventListener('scroll', showElement)