let modal = document.querySelector('#modal_main')
modal.className = 'modal modal_active'


let buttonSuccess = document.querySelector('.show-success')
buttonSuccess.onclick = () => {
    modal.className = 'modal'
    modal = document.querySelector('#modal_success')    
    modal.className = 'modal modal_active'
}

let buttonsClose = Array.from(document.querySelectorAll('.modal__close_times'))
buttonsClose.forEach(button => {
    button.onclick = () => {
        modal.className = 'modal'
     }
});
