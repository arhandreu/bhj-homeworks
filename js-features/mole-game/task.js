getHole = index => document.getElementById(`hole${index}`) 
for (index=1; index <= 9; index++) {        
    getHole(index).onclick = (click) => {
        if (click.target.className.includes('hole hole_has-mole')) {
            dead = document.getElementById(`dead`);            
            dead.textContent = Number(dead.textContent) + 1
            click.target.className = 'hole'
            if (Number(dead.textContent) === 10) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы выиграли')
            }
        }    
        else {
            lost = document.getElementById(`lost`);            
            lost.textContent = Number(lost.textContent) + 1
            if (Number(lost.textContent) === 10) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы проиграли')                
            }
        }    
        
    }    
}
