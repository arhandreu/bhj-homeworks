const tabs = Array.from(document.querySelectorAll('.tab'))
const tabsContent = Array.from(document.querySelectorAll('.tab__content'))

function selectTab (event) {
    event.preventDefault();
    if (this.classList.contains('tab_active')){

    }    
    else {
        document.querySelector('.tab_active').classList.remove('tab_active')
        document.querySelector('.tab__content_active').classList.remove('tab__content_active')
        this.classList.add('tab_active')
        tabsContent[tabs.indexOf(this)].classList.add('tab__content_active')
    } 
}

tabs.forEach(tab => {
    tab.addEventListener('click', selectTab)
})