const a = document.getElementById('nav-toggle');
const b = document.getElementById('nav-links')

a.addEventListener('click', () => {
    b.classList.toggle('active');
})