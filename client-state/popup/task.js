// получение cookie
function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
function setCookie(name, value, props={}) {    
    let exp = props.expires

    if (typeof exp == "number" && exp) {
        const date = new Date()
        date.setTime(date.getTime() + exp*1000)
        exp = props.expires = date
    }

    if(exp && exp.toUTCString) { 
        props.expires = exp.toUTCString() 
    }

    value = encodeURIComponent(value)
    let updatedCookie = name + "=" + value

    for(const propName in props){
        updatedCookie += "; " + propName
        const propValue = props[propName]
        if(propValue !== true) { 
            updatedCookie += "=" + propValue 
        }
    }

    document.cookie = updatedCookie
}

// удаляет cookie
function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
}

const modal = document.querySelector('#subscribe-modal')
const buttonClose = document.querySelector('.modal__close_times')

if (getCookie('countVisit') === undefined) {
    modal.classList.add('modal_active')
}
else {
    setCookie('countVisit', Number(getCookie('countVisit')) + 1, {expires: 5000} )
}

buttonClose.addEventListener('click', (event) => {
    event.preventDefault()
    setCookie('countVisit', '1', {expires: 5000} )
    modal.remove('modal_active')
})



