const progress = document.getElementById( 'progress' )
const form = document.forms.form


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    
    const formData = new FormData(form)
    
    xhr.upload.onprogress = function(event) {        
        if (event.lengthComputable) {                       
            let complete = Math.round((event.loaded / event.total) * 100) / 100            
            progress.value = complete
          }          
    }
    
    // xhr.onloadend = (() => {
    //     console.log('Завершено')
    // })

    xhr.open('POST', form.action)    
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');    
    xhr.send(formData)    
})

