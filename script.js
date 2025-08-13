const header = document.querySelector('header');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Sticky header on scroll
window.addEventListener("scroll", function () {
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Menu toggle
if (menu && navbar) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('bi-x');
        navbar.classList.toggle('open');
    });
}

// Close navbar when a link is clicked (for mobile UX)
if (navbar) {
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('bi-x');
            navbar.classList.remove('open');
        });
    });
}