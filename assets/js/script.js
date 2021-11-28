// ---------------------------------------------------------------------------------------------
/* CHANGEMENT ICÔNE BURGER */
var imageBurger = document.querySelector('.mobile');
//console.log(imageBurger);

var sideMenu = document.querySelector('.sideMenu');
//console.log(sideMenu);

var closeButton = document.querySelector('#closeButton');
//console.log(closeButton);

imageBurger.addEventListener('click', openSideMenu);

function openSideMenu() {
    if (sideMenu.style.display == 'none') {
        sideMenu.classList.add('slideInRight');
        sideMenu.style.display = 'flex';
        sideMenu.classList.remove('slideOutRight');
    } else{
        sideMenu.style.display = 'none';
    }
}

closeButton.addEventListener('click', closeSideMenu);

function closeSideMenu(){
    if(sideMenu.style.display== 'flex'){
        sideMenu.classList.add('slideOutRight');
        sideMenu.classList.remove('slideInRight');
        setTimeout(function(){ 
            sideMenu.style.display = 'none';
        }
        , 1000);
    } else{
        sideMenu.style.display = 'flex';
    }
}



// ---------------------------------------------------------------------------------------------
/* Animation des blocs  */

/* Utilisation de l'API instersection Observer pour détecter quand un bloc est 
    visible à l'écran (voir tuto grafikart) */

    const ratio = .1
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }
    
    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target) //une fois que l'élément a été vu une fois, il ne fera plus aucun appel (éviter la répétition de l'animation)
            } 
        })
    }
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r){ /* boucle pour prendre plusieurs éléments dans l'animation */
        observer.observe(r)
    })
    