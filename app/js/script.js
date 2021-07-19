'use strict'

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const sections = document.querySelectorAll('.section')

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


// intersection observer

const revealSection = function(entries,observer){

    const [entry] = entries;

    if (!entry.isIntersecting)  return;
    entry.target.classList.toggle('section--hidden');
    observer.unobserve(entry.target);
}

const options = {
    root:null,
    threshold:0,

};
const sectionObserver = new IntersectionObserver (revealSection, options);

sections.forEach( function(section){
    sectionObserver.observe(section)
});
