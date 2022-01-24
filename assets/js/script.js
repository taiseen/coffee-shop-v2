// 24 - Jan - 2022 

const searchBtn = document.getElementById('searchBtn');
const cartBtn = document.getElementById('cartBtn');
const menuBtn = document.getElementById('menuBtn');

const cartItems = document.querySelectorAll('.cart-item');
const cartContainer = document.querySelector('.cart-item-container');
const navbar = document.querySelector('.navbar')
const searchForm = document.querySelector('.search-form')

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('user-click-at-search');

    // close remaining all...
    cartContainer.classList.remove('user-click-at-cart');
    navbar.classList.remove('user-click-at-menu');
});

cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('user-click-at-cart');

    // close remaining all...
    searchForm.classList.remove('user-click-at-search');
    navbar.classList.remove('user-click-at-menu');
});

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('user-click-at-menu');

    // close remaining all...
    searchForm.classList.remove('user-click-at-search');
    cartContainer.classList.remove('user-click-at-cart');
});

// just close by clicking...
cartItems.forEach(item => {
    item.children[2].addEventListener('click', () => {
        item.style.display = 'none';
    });
});


window.addEventListener('scroll', () => {
    // close remaining all by scrolling...
    searchForm.classList.remove('user-click-at-search');
    cartContainer.classList.remove('user-click-at-cart');
    navbar.classList.remove('user-click-at-menu');
});