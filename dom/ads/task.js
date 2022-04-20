const cases = [...document.querySelectorAll('.rotator__case')]

let index = -1;

function rotate() {
if (cases[index]){
    cases[index].classList.remove('rotator__case_active');
}
++index
if (index === cases.length) {
    index = 0;
}
let {color, speed} = cases[index].dataset;
cases[index].style.color = color;
if (!cases[index].classList.contains('rotator__case_active')){
    cases[index].classList.add('rotator__case_active');
}
setTimeout(rotate, speed)
}

rotate()