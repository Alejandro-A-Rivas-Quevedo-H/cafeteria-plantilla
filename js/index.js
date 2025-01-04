// Elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('caucel-menu');
const menuClose = document.getElementById('menu-close');

// Abrir el menú
menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
    menuToggle.style.display = 'none'; // Ocultar el botón "☰ Menú"
});

// Cerrar el menú
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.style.display = 'block'; // Mostrar nuevamente el botón "☰ Menú"
});
