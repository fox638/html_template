var navMain = document.querySelector('.menu__wrapper');
var navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(){
    if (navMain.classList.contains('menu__wrapper--closed')) {
        navMain.classList.remove('menu__wrapper--closed');
        navMain.classList.add('menu__wrapper--opened');
        navToggle.classList.remove('menu__toggle--closed')
        navToggle.classList.add('menu__toggle--opened')
    } else {
        navMain.classList.add('menu__wrapper--closed');
        navMain.classList.remove('menu__wrapper--opened');
        navToggle.classList.add('menu__toggle--closed')
        navToggle.classList.remove('menu__toggle--opened')
    }
});