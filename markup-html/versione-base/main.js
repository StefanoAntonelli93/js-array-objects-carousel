'use strict';



const images = [
    {
        image: '../../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '../../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '../../img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '../../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '../../img/05.webp',
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

// MILESTONE 1 **********************************************************

// definisco variabile per l'immagine e i dati correnti (currentIndex)
let currentIndex = 0;

// creo funzione per caricare nel DOM img title e text dell'immagine corrente (updateImage)
function updateImage() {
    const currentImage = document.getElementById('current-image');
    const currentTitle = document.getElementById('current-title');
    const currentText = document.getElementById('current-text');

    currentImage.src = images[currentIndex].image;
    currentTitle.textContent = images[currentIndex].title;
    currentText.textContent = images[currentIndex].text;
    
}

// MILESTONE 2 **********************************************************

// definisco variabile che seleziona il div prev dell'html
const toPrev = document.querySelector('.prev')

// aggiungo evento click
toPrev.addEventListener('click', () => {
    // SE l'immagine corrente è la prima ALLORA portami all'ultima immagine
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
        // ALTRIMENTI vai indietro di uno
    } else {
        currentIndex--;
    }
    updateImage();
});

// definisco variabile che seleziona il div next dell'html
const toNext = document.querySelector('.next')

// aggiungo evento click
toNext.addEventListener('click', () => {
    // Se l'immagine corrente è l'ultima ALLORA portami alla prima immagine
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
        // ALTRIMENTI vai avanti di uno
    } else {
        currentIndex++;
    }
    updateImage();
});

// invoco funzione
updateImage();
