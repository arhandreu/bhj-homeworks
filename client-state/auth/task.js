const form = document.forms.signin__form
const user = document.getElementById('user_id')
const errorAuthor = document.querySelector('.error')
const formSign = document.querySelector('.signin')

async function sendAutor(){
    const formData = new FormData(form)        
    let send = await fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',            
        },
        body: formData,
      });
      
    json = await send.json()
    
    if (json['success']) {
        user.id = json['user_id']
        user.classList.add('welcome_active')
    }
    else {
        formSign.remove('signin_active')
        errorAuthor.classList.add('error_active')
        errorAuthor.textContent = 'Вы не авторизованы!!!'
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault()    
    sendAutor()
})