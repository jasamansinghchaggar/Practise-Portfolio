function toggleMenu() {
    var sideMenu = document.getElementById('sideMenu');
    var overlay = document.querySelector('.overlay');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}
var menuLinks = document.querySelectorAll('#sideMenu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

function smoothScroll(targetId) {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        const offset = targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}