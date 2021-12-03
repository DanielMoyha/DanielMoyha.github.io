
//inicializar aos
AOS.init();

//para el parallax
gsap.to("#restaurant", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 1.5
});
gsap.to("#hamburguesa", {
    scrollTrigger: {
        scrub: 1
    },
    x: -500,
});
gsap.to("#papasFritas", {
    scrollTrigger: {
        scrub: 1
    },
    x: 500,
});

gsap.to("#text", {
    scrollTrigger: {
        scrub: 1
    },
    y: 500,
});

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 500);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}


//videos
const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');
var index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');
var i = 0;

function nextSlideText() {
    slidesText[i].classList.remove('active');
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add('active');
}

function prevSlideText() {
    slidesText[i].classList.remove('active');
    i = (i - 1 + slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active');
}


// // Cambiar fondo
// const body = document.querySelector('body');
// const toggle = document.getElementById('toggle');
// toggle.onclick = function(){
// 	toggle.classList.toggle('active');
// 	body.classList.toggle('active');
// }

/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

//