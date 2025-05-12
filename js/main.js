// ==============================
// 🌱 Sélection des éléments
// ==============================
const progressBar = document.querySelector('.prog-read');
const navMenu = document.querySelector('nav');
// ==============================
// 🧠 Variables globales
// ==============================
const menuPos = navMenu.offsetTop;
let lastSCroll = 0;
// ==============================
// 🎊 Fonctionnalités
// ==============================
function progress() {
    const hauteurPage = document.body.offsetHeight;
    const currentScroll = window.scrollY;
    const hauteurFenetre = window.innerHeight;
    const distanceToScroll = hauteurPage - hauteurFenetre;
    progressBar.style.width = ((currentScroll/distanceToScroll) * 100)+"%";
}

function stickToTop() {
    const currentScroll = window.scrollY;
    currentScroll >= menuPos
    ? navMenu.classList.add('sticky')
    : navMenu.classList.remove('sticky');
}

function hideAndSeek() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > menuPos + 200 && currentScroll > lastSCroll) {
        navMenu.classList.add('hide');      // On descend
    } else {
        navMenu.classList.remove('hide');   // On remonte ou on est en haut
    }
    
    lastSCroll = currentScroll;
}
// ==============================
// 🧲 Événements
// ==============================
window.addEventListener('scroll', function () {
    progress();
    stickToTop();
    hideAndSeek();
})