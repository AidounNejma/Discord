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

/* const ratio = .1
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    //console.log('handleIntersect');
    entries.forEach(function(entry){
        if(entry.intersectionRation > ratio){
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        } 
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector(".reveal")) */