function toggleMenu() {
    var sideMenu = document.getElementById('sideMenu');
    var overlay = document.querySelector('.overlay');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}
