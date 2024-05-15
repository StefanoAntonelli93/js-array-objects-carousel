'use strict';



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// analizzo con forEach e arrow function l'array di oggetti
images.forEach((element, i, array) => {
    console.log(array);
    console.log(element);
    console.log(i);
}); 



// MILESTONE 0 *********************************************************

// analizzo HTML statico creando function removeStatic
removeStatic();
function removeStatic() {
    // definisco variabile che seleziona elemento con classe items in html
    const staticMarkup = document.querySelector('.items');
    // stampo risultato
    console.log(staticMarkup);
    // da variabile staticMarkup seleziono l'elemento con classe item in html
    const staticItem = staticMarkup.querySelector('.item');
    // SE elemento statico esiste ALLORA remove()
    if(staticItem) {
        staticItem.remove();
    }
    // stampo risultato (se 'null' è corretto)
    console.log(staticItem);
  
   
}



