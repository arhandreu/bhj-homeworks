const buttonsFont = [...document.querySelectorAll('.font-size')];
const buttonsColor = [...document.querySelector('.book__control_color').querySelectorAll('.color')];
const buttonsBg = [...document.querySelector('.book__control_background').querySelectorAll('.color')];
const book = document.getElementById('book');

function onClickFont(e) {
    e.preventDefault();
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    this.classList.add('font-size_active');
    if (this.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big')
        book.classList.add('book_fs-small');
    }
    else if (this.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small')
        book.classList.add('book_fs-big');
    }
    else {
        book.classList.remove('book_fs-big', 'book_fs-small')
    }    
}

function onClickBg(e) {
    e.preventDefault();
    document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active')
    if (this.classList.contains('bg_color_black')) {
        book.classList.remove('book_bg-gray', 'book_bg-white');
        book.classList.add('book_bg-black');
    }
    else if (this.classList.contains('bg_color_gray')) {
        book.classList.remove('book_bg-black', 'book_bg-white');
        book.classList.add('book_bg-gray');
    }
    else {
        book.classList.remove('book_bg-black', 'book_bg-gray');
        book.classList.add('book_bg-white');
    }
    
}

function onClickColor(e) {
    e.preventDefault();
    document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active')
    if (this.classList.contains('text_color_gray')) {
        book.classList.remove('book_color-whitesmoke', 'book_color-blacke');
        book.classList.add('book_color-gray');
    }
    else if (this.classList.contains('text_color_whitesmoke')) {
        book.classList.remove('book_color-gray', 'book_color-black');
        book.classList.add('book_color-whitesmoke');
    }
    else {
        book.classList.remove('book_color-gray', 'book_color-whitesmoke');
        book.classList.add('book_color-black');
    }
}



buttonsFont.forEach(button => {    
    button.addEventListener('click', onClickFont);
})

buttonsColor.forEach(color => {    
    color.addEventListener('click', onClickColor);
})

buttonsBg.forEach(bg => {    
    bg.addEventListener('click', onClickBg);
})