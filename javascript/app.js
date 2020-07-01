const mobile = window.matchMedia('screen and (max-width: 700px)');
const burgerButton = document.querySelector('.burger-button');

function moverMenu() {
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('is-activate'))
        menu.classList.remove('is-activate');
    else
        menu.classList.add('is-activate');
}

function validation(event){
    if(event.matches)
        burgerButton.addEventListener('click', moverMenu);
    else
        burgerButton.removeEventListener('click', moverMenu);
}

mobile.addListener(validation);
validation(mobile);