'use strict'

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const sections = document.querySelectorAll('.section');
const btnJump = document.querySelector('.btnJump');
const hero = document.querySelector('.hero')

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

overlay.addEventListener('click', function(){
    header.classList.toggle('open');
})


// revael section intersection observer

const revealSection = function(entries,observer){

    const [entry] = entries;

    if (!entry.isIntersecting) {
      btnJump.style.display = "none";
      return;
    } 

    else{
        entry.target.classList.remove('section--hidden');
        btnJump.style.display = "grid";

    }
}

const options = {
    root:null,
    threshold:0,

};
const sectionObserver = new IntersectionObserver (revealSection, options);

sections.forEach( function(section){
    sectionObserver.observe(section)
});



//  btnjump funtionality

btnJump.addEventListener('click', function(){

    header.scrollIntoView({behaviour:'smooth'})
})





