const hasTooltips = [...document.querySelectorAll('.has-tooltip')]
let textA = ''

function onClick (e) {
    e.preventDefault();       
    if (document.querySelector('.tooltip_active') && textA === this.textContent) {         
        document.querySelector('.tooltip_active').remove();       
    }
    else{
        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').remove();
        }
        this.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${this.title}</div>`);    
        document.querySelector('.tooltip').style.left = this.offsetLeft + 'px';
        document.querySelector('.tooltip').style.top = this.offsetTop + this.offsetHeight - window.pageYOffset + 'px';
        textA = this.textContent;
    }
}

for (let tt of hasTooltips) {
    tt.addEventListener('click', onClick);
}