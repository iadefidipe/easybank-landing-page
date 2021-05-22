'use strict'

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

// litens for clich on the hamburger menu
btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.toggle('open');
    }
    else{
        header.classList.toggle('open');
    }

})