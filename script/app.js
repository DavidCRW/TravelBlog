const toggleMenuButton = document.querySelector('.hamburger-menu');
const dropdown = document.querySelector('.dropdown');

toggleMenuButton.addEventListener('click', () => {
    dropdown.classList.toggle('mobile-toggle')
})