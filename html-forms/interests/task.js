mainCheck = [...document.querySelectorAll('.interest__check')];
    

function onCheck () {
    if (this.closest('.interest') !== null && this.closest('.interest').querySelector('.interests_active') !== null && this.closest('.interest').querySelector('.interests_active').querySelectorAll('input') !== null) {
        let childChecks = this.closest('.interest').querySelector('.interests_active').querySelectorAll('input')
        for (let childCheck of [...childChecks]) {
            childCheck.checked = this.checked
        }
    }
    for (let check of mainCheck) {        
        if (check.closest('.interest') !== null && check.closest('.interest').querySelector('.interests_active') !== null && check.closest('.interest').querySelector('.interests_active').querySelectorAll('input') !== null) {
            if ([...check.closest('.interest').querySelector('.interests_active').querySelectorAll('input')].length == [...check.closest('.interest').querySelector('.interests_active').querySelectorAll('input:checked')].length) {
                check.indeterminate = false
                check.checked = true
            }
            else if ([...check.closest('.interest').querySelector('.interests_active').querySelectorAll('input:checked')].length ===0){
                check.indeterminate = false
                check.checked = false
            } 
            else if ([...check.closest('.interest').querySelector('.interests_active').querySelectorAll('input')].length > [...check.closest('.interest').querySelector('.interests_active').querySelectorAll('input:checked')].length) {
                check.indeterminate = true
            }
                                   
        }
    } 
} 

mainCheck.forEach(element => {        
    element.addEventListener('change', onCheck);    
});

