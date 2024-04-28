/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CONFIRMATION ===============*/

document.getElementById('lien').addEventListener('click', function(event) {
    // Empêche le lien de suivre son comportement par défaut (ouvrir la nouvelle page)
    event.preventDefault();

    // Affiche une boîte de dialogue de confirmation
    var confirmation = confirm("Êtes-vous sûr de vouloir ouvrir Google Agenda ?");

    // Si l'utilisateur confirme, ouvre la nouvelle page
    if (confirmation) {
        // Obtient l'URL du lien
        var url = this.getAttribute('href');
        // Ouvre une nouvelle fenêtre avec l'URL spécifiée
        window.open(url, '_blank');
    }
});