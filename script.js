const botao = document.getElementById('menu__button');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

botao.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
    menu.classList.toggle('translate-x-0');
    overlay.classList.toggle('hidden');
    menu.classList.toggle('pt-20');

    botao.textContent = menu.classList.contains('translate-x-0') ? '✕' : '☰';
});

overlay.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0');
    overlay.classList.add('hidden');
    botao.textContent = '☰';
});

/* CAROUSEL FUNCIONAMENTO */

const carousel = document.getElementById('carousel');
const slides = carousel.children.length;
let index = 0;

function Carousel(){
    carousel.style.transform = `translateX(-${index *100}%)`;
}

const prev = document.getElementById('prev');
const next = document.getElementById('next')
prev.addEventListener('click', ()=> {
    index = (index - 1 + slides) % slides;
    Carousel();
})

document.getElementById("next").addEventListener('click', ()=> {
    index = (index + 1) % slides;
    Carousel();
});

setInterval(() => {
    index = (index + 1) % slides;
    Carousel();
}, 7000);