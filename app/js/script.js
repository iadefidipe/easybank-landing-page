'use strict'

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const sections = document.querySelectorAll('.section');
const btnJump = document.querySelector('.btnJump');

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

// sticky nav (used jump button instead)

// const headerHeight = header.getBoundingClientRect().height;

// const stickyNav = function(entries, observer){
//     const [entry] = entries;

//      console.log(entry)

//     // if (entry.isIntersecting) console.log(entry);

// }

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${headerHeight1}px`,
// });

// headerObserver.observe(header);\

//  btnjump funtionality

btnJump.addEventListener('click', function(){

    header.scrollIntoView({behaviour:'smooth'})
})



