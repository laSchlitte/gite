// Options de l'IntersectionObserver avec seuil initial
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7 // Seuil initial
};
// Fonction pour définir le seuil en fonction de la taille de l'écran
function setThreshold() {
    if (window.innerWidth <= 1000) { // Par exemple, pour les écrans de 1000 pixels de largeur ou moins
        options.threshold = 0.2; // Seuil plus bas pour les petits écrans
    } else {
        options.threshold = 0.7; // Seuil par défaut pour les autres tailles d'écran
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
            entry1.target.classList.add('droite');
            observer1.unobserve(entry1.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description1 = document.querySelector('#i9dv6-2');
observer1.observe(description1);

//===========SECTION 2=========//
var observer2 = new IntersectionObserver(function(entries, observer2) {
    entries.forEach(function(entry2) {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('gauche');
            observer2.unobserve(entry2.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description2 = document.querySelector('#iogy-2');
observer2.observe(description2);

//===========SECTION 3=========//
var observer3 = new IntersectionObserver(function(entries, observer3) {
    entries.forEach(function(entry3) {
        if (entry3.isIntersecting) {
            entry3.target.classList.add('droite');
            observer3.unobserve(entry3.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description3 = document.querySelector('#ijfc5');
observer3.observe(description3);





//===========SECTION 4=========//
var observer4 = new IntersectionObserver(function(entries, observer4) {
    entries.forEach(function(entry4) {
        if (entry4.isIntersecting) {
            entry4.target.classList.add('gauche');
            observer4.unobserve(entry4.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description4 = document.querySelector('#im9vz');
observer4.observe(description4);

//===========SECTION 5=========//
var observer5 = new IntersectionObserver(function(entries, observer5) {
    entries.forEach(function(entry5) {
        if (entry5.isIntersecting) {
            entry5.target.classList.add('droite');
            observer5.unobserve(entry5.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description5 = document.querySelector('#i5bxj');
observer5.observe(description5);

//===========SECTION 6=========//
var observer6 = new IntersectionObserver(function(entries, observer6) {
    entries.forEach(function(entry6) {
        if (entry6.isIntersecting) {
            entry6.target.classList.add('gauche');
            observer6.unobserve(entry6.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description6 = document.querySelector('#i93c8');
observer6.observe(description6);

//===========SECTION 7=========//
var observer7 = new IntersectionObserver(function(entries, observer7) {
    entries.forEach(function(entry7) {
        if (entry7.isIntersecting) {
            entry7.target.classList.add('droite');
            observer7.unobserve(entry7.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description7 = document.querySelector('#i0pi1');
observer7.observe(description7);

//===========SECTION 8=========//
var observer8 = new IntersectionObserver(function(entries, observer8) {
    entries.forEach(function(entry8) {
        if (entry8.isIntersecting) {
            entry8.target.classList.add('gauche');
            observer8.unobserve(entry8.target); // Arrête d'observer une fois que l'animation est déclenchée
        }
    });
}, options);

var description8 = document.querySelector('#ik67z');
observer8.observe(description8);
