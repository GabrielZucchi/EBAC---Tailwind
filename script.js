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