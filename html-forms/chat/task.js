const widget = document.querySelector('.chat-widget');
const inputWidget = document.querySelector('#chat-widget__input');
const answers = ['Привет', 'Пока', 'Сам виноват', 'Нет', 'Да'];
const container = document.querySelector('#chat-widget__messages')

function getDate () {
    return new Date().toDateString();
}

function createHtml (message, cl = 'message message_client') {    
    container.innerHTML += `
        <div class= '${cl}'>
            <div class="message__time">${getDate()}>
            <div class="message__text">
                ${message}
            </div>
        </div>
        `;
}

function openWidget () {
    widget.classList.add('chat-widget_active')
    setTimeout(() => {
        if (container.querySelector('.message_client') === null) {
            createHtml('Мы можем Вам помочь?', 'message');
        }
    }, 30000)
}

function sentMessage (e) {
    e.preventDefault();                
    if (e.keyCode === 13 && inputWidget.value.trim() != '') {
        
        let messageClient = inputWidget.value;
        let answer = answers[Math.floor(Math.random()*answers.length)]; 

        createHtml(messageClient);
        createHtml(answer, 'message');
        inputWidget.value = '';        
    }                     
}



widget.addEventListener('click', openWidget);
inputWidget.addEventListener('keyup', sentMessage);



