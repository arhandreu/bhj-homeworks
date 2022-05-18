const url = 'https://netology-slow-rest.herokuapp.com'
const img = document.querySelector('.loader')
const items = document.querySelector('#items')

const xhr = new XMLHttpRequest

if (localStorage.getItem('dataV')) {    
    img.classList.remove('loader_active')
    for (let valute of JSON.parse(localStorage.getItem('dataV'))) {        
            items.innerHTML += `<div class="item">
                                    <div class="item__code">
                                        ${valute.code}
                                    </div>
                                    <div class="item__value">
                                        ${valute.value}
                                    </div>
                                    <div class="item__currency">
                                        руб
                                    </div>
                                </div>`
    }
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {        
        img.classList.remove('loader_active')
        items.innerHTML = ''        
        let data = JSON.parse(xhr.responseText).response.Valute                
        let valutes = []                         
        for (let valute in data){            
            valutes.push({'code': data[valute].CharCode, 'value': data[valute].Value,})
            items.innerHTML += `<div class="item">
                                    <div class="item__code">
                                        ${data[valute].CharCode}
                                    </div>
                                    <div class="item__value">
                                        ${data[valute].Value}
                                    </div>
                                    <div class="item__currency">
                                        руб
                                    </div>
                                </div>`
        }           
        localStorage.setItem('dataV', JSON.stringify(valutes))                        
    }
})

xhr.open('GET', url)

xhr.send()

// async function showValutes(url) {

//     let response = await fetch(url);

//     if (response.ok) { // если HTTP-статус в диапазоне 200-299
//       // получаем тело ответа (см. про этот метод ниже)
//       let json = await response.json();
//       console.log(json)
//     } else {
//       alert("Ошибка HTTP: " + response.status);
//     }

// }

// showValutes(url)