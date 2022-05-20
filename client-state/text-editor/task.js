const editor = document.getElementById('editor')
const clear = document.getElementById('clear')

editor.value = localStorage.getItem('text')

editor.addEventListener('input', (event) =>{
    event.preventDefault()
    localStorage.setItem('text', editor.value)
})

clear.addEventListener('click', (event) => {
    event.preventDefault()
    editor.value = ''
    localStorage.clear()
})
