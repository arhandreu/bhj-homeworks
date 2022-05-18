const url = 'https://netology-slow-rest.herokuapp.com/poll.php'
const pollTitle = document.querySelector('#poll__title')
const pollAnswer =  document.querySelector('#poll__answers')

function showPercent(json) {
    pollHTML = ''
    const initialValue = 0   
    let sum = json.stat.reduce((pv, cv) => pv + cv.votes, initialValue)    
    for (let answer of json.stat){        
        pollHTML += `<div class="poll__title" id="poll__title">
                            ${answer.answer}: <strong>${Math.round((answer.votes/sum*100) * 100) / 100}%</strong>    
                    </div>`
    }
    pollAnswer.innerHTML = pollHTML

}

async function sendAnswer(answerId){
    alert('Ваш голос засчитан!')    
    let send = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',            
        },
        body: `vote=${sessionStorage.getItem('pollId')}&answer=${answerId}`
      });
    json = await send.json()
    showPercent(json)
}

async function getRandomPoll(url) {

    let response = await fetch(url);

    if (response.ok) { 
        let json = await response.json();        
        let pollId = json.id
        sessionStorage.setItem('pollId', pollId)                
        pollTitle.textContent = json.data.title
        for (let answer of json.data.answers){
            pollAnswer.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${answer}</button>`)
        }      
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
     
    let buttons = [...pollAnswer.querySelectorAll('.poll__answer')]
    buttons.forEach((button, index) => {
        button.addEventListener('click', sendAnswer.bind(button, index))
    })

}

getRandomPoll(url)