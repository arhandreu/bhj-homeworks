const form = document.forms.signin__form
const user = document.getElementById('user_id')
const errorAuthor = document.querySelector('.error')
const formSign = document.querySelector('.signin')
const exit = document.getElementById('exit')


function showWelcome(id) {
    user.textContent = id
    formSign.classList.remove('signin_active')
    user.closest('div').classList.add('welcome_active')    
}


async function sendAutor(){
    const formData = new FormData(form)        
    let send = await fetch(form.action, {
        method: 'POST',        
        body: formData,
      });
      
    json = await send.json()
    
    if (json.success) {
        id = json.user_id
        showWelcome(id)
        form.reset()
        localStorage.setItem('id', id)
        
    }
    else {        
        form.reset()
        alert('Неверный логин/пароль')        
    }
}

localStorage.getItem('id') ? showWelcome(localStorage.getItem('id')) : null

form.addEventListener('submit', (event) => {
    event.preventDefault()    
    sendAutor()
})

exit.addEventListener('click', (event) =>{
    event.preventDefault()
    localStorage.clear()
    location.reload()
})