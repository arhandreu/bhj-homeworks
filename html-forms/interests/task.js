mainCheck = [...document.querySelectorAll('.interests_active')]
    .map((check) => check.closest('.interest').querySelector('input'))

function onCheck () {
    let childChecks = this.closest('.interest').querySelector('.interests_active').querySelectorAll('input')
    for (let childCheck of [...childChecks]) {
        childCheck.checked = this.checked
    }
}

mainCheck.forEach(element => {
    element.addEventListener('change', onCheck)
});
