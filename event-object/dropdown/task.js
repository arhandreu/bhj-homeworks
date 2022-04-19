const mainButtons = document.querySelectorAll('.dropdown')

function openList (event) {
    event.preventDefault();        
    this.closest('.dropdown').querySelector('.dropdown__list').classList.add('dropdown__list_active');
    return false;
}

function selectItem (event) {
    event.preventDefault();    
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
    this.closest('ul').classList.remove('dropdown__list_active')    
    return false;
}

mainButtons.forEach( button => {     
    button.querySelector('.dropdown__value').addEventListener('click', openList);
    button.querySelectorAll('.dropdown__item').forEach(item => {
    item.addEventListener('click', selectItem);
    })    
})
