const timer = document.getElementById('timer');
let t = Number(timer.textContent);

 

let sI = setInterval(() => {
    t -=1
    let timeT = new Date(t * 1000);
    let second = timeT.getSeconds()
    let minute = timeT.getMinutes()
    let hour = timeT.getHours() - 5
    second = (second < 10) ? '0' + second : second;
    minute = (minute < 10) ? '0' + minute : minute;
    hour = (hour < 10) ? '0' + hour : hour;               
    timer.textContent = `${hour}:${minute}:${second}`
    if (t === 0) {
        alert('Вы победили в конкурсе!');
		location = "http://download.myshared.ru/mXfnC10fFPaf_l3lQTc-Ng/1649849363/1442879.ppt";
        clearInterval(sI);
    }    
}, 1000)
