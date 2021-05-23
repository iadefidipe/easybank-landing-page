'use strict'

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

// litens for clich on the hamburger menu
btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.toggle('open');
        overlay.classList.add('fadeout');
    }
    else{
        header.classList.toggle('open');
        overlay.classList.remove('fadeout');


    }

})