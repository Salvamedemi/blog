// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('#botonera ul');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});


