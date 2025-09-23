/* MENU HAMBURGER FUNCIONAMENTO */

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

/* Newsteller Validator */

const nome = document.getElementById("inputNomeNT");
const email = document.getElementById("inputEmailNT");
const botaoNT = document.getElementById("botaoNT");

function LimparCamposNT(){
    nome.value = '';
    email.value = '';
}

class Validator {
    constructor(inputElement) {
        this.input = inputElement;
    }

    validarNome() {
        if (this.input.value.trim().length === 0) {
            this.input.classList.add('border', 'border-red-600');
            this.input.placeholder = "Por favor, insira um nome válido";
            return false;
        } else {
            this.input.classList.remove('border', 'border-red-600');
            return true;
        }
    }

    validarEmail() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!re.test(this.input.value.trim())) {
            this.input.classList.add('border', 'border-red-600');
            this.input.value = "";
            this.input.placeholder = "Por favor, insira um e-mail válido";
            return false;
        } else {
            this.input.classList.remove('border', 'border-red-600');
            return true;
        }
    }
}

const nomeValidator = new Validator(nome);
const emailValidator = new Validator(email);

botaoNT.addEventListener('click', (e) => {
    e.preventDefault();

    const nomeOk = nomeValidator.validarNome();
    const emailOk = emailValidator.validarEmail();

    if (nomeOk && emailOk) {
        alert(`As novidades serão enviadas para ${nome.value} através do email: ${email.value} - Obrigado!`)
        LimparCamposNT();
    }
});