// Options de l'IntersectionObserver avec seuil initial
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // Seuil initial
};
// Fonction pour définir le seuil en fonction de la taille de l'écran
function setThreshold() {
    if (window.innerWidth <= 1000) { // Par exemple, pour les écrans de 768 pixels de largeur ou moins
        options.threshold = 0.2; // Seuil plus bas pour les petits écrans
    } else {
        options.threshold = 0.6; // Seuil par défaut pour les autres tailles d'écran
    }
}
// Appeler la fonction pour définir le seuil initialement
setThreshold();
// Écouter les changements de taille d'écran et ajuster le seuil en conséquence
window.addEventListener('resize', setThreshold);


//===========SECTION 1=========//
var observer1 = new IntersectionObserver(function(entries, observer1) {
    entries.forEach(function(entry1) {
        if (entry1.isIntersecting) {
            entry1.target.classList.add('gauche');
            observer1.unobserve(entry1.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description1 = document.querySelector('.equipements');
observer1.observe(description1);

//===========SECTION 2=========//
var observer2 = new IntersectionObserver(function(entries, observer2) {
    entries.forEach(function(entry2) {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('droite');
            observer2.unobserve(entry2.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description2 = document.querySelector('.tarifs');
observer2.observe(description2);
