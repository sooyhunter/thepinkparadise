document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const card = document.querySelector('.card');
    let isMenuOpen = false;

    navbarToggler.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            card.style.top = '80%'; // Опускаем карточку когда меню открыто
        } else {
            card.style.top = '60%'; // Поднимаем карточку когда меню закрыто
        }
    });
});
