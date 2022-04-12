let counter = Number(document.getElementById('clicker__counter').textContent)
const clicker = document.getElementById('cookie')
let timeW = 0
let start = 0
let end = 0

clicker.onclick = () => {
    console.log(counter)            
    counter +=1;    
    if (counter % 2 !== 0) {
        clicker.width -=30
        start = new Date().getTime();        
        if (end !== 0) {
            timeW = start - end
        }                
    }
    else {
        clicker.width +=30
        end = new Date().getTime();
        timeW = end - start
    }
    if (timeW === 0){
    document.getElementById('clicker__counter').textContent = `${counter}`
    }
    else {
        document.getElementById('clicker__counter').textContent = `${counter} Скорость клика ${timeW}`
    }
}
