const products = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');
const cart = [];

function changeQuantity(e) {
    e.preventDefault();
    let quantity = this.closest('.product__quantity-controls').querySelector('.product__quantity-value')
    if (this.classList.contains('product__quantity-control_dec')) {
       if (quantity.textContent > 1) --quantity.textContent;        
    }
    else {
        ++quantity.textContent;
    }
 }

 function addProduct(e) {
    e.preventDefault()
    let id = this.closest('.product').dataset.id
    let quantity = this.previousElementSibling.querySelector('.product__quantity-value').textContent
    let src = this.closest('.product').querySelector('img').src
    if (cart.includes(id)){
        let currentQuantity = document.querySelector(`.cart__product[data-id='${id}']`).querySelector('.cart__product-count')
        currentQuantity.textContent = Number(currentQuantity.textContent) + Number(quantity)
    }
    else {
            
        cartProducts.innerHTML +=   `<div class="cart__product" data-id=${id}>
                                        <img class="cart__product-image" src=${src}>
                                        <div class="cart__product-count">${quantity}</div>
                                        <a href="#" class="cart__product__remove">&times;</a>
                                    </div>`
        cart.push(id)                                    
    }
    removeProduct()           
 }

function removeProduct() {
    for (let product of [...cartProducts.querySelectorAll('.cart__product')]) {        
        product.querySelector('.cart__product__remove').addEventListener('click', (e) => {
            e.preventDefault()    
            cart.splice(cart.indexOf(e.target.closest('.cart__product').dataset.id), 1)
            e.target.closest('.cart__product').remove()
            checkDisplayCart();            
        })        
    }
    checkDisplayCart();                 
}

function checkDisplayCart() {
    console.log(cartProducts.querySelectorAll('.cart__product'))
    if (cartProducts.querySelectorAll('.cart__product') === null || cartProducts.querySelectorAll('.cart__product').length === 0) {
        cartProducts.style.display = 'None'
        cartProducts.previousElementSibling.style.display = 'None'
    }
    else {
        cartProducts.style.display = 'flex'
        cartProducts.previousElementSibling.style.display = 'inline'
    }
}


for (let product of products) {
    for (let control of [...product.querySelectorAll('.product__quantity-control')]) {
        control.addEventListener('click', changeQuantity)
    }
    
    product.querySelector('.product__add').addEventListener('click', addProduct)    
}

checkDisplayCart();






