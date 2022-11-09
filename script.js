const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
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

/*-------------------------*/
// CONTENITORE
const itemsContainer = document.querySelector('.items-container');
const item = document.createElement('div');
item.classList.add('item');
itemsContainer.append(item);

// IMMAGINE
let sliderIndex = 0;
let currentIndex = sliderIndex;

const img = document.createElement('img');
img.src = `css/${images[currentIndex].image}`;
img.alt = `${images[currentIndex].title}`;
item.append(img);

console.log(images[currentIndex].title);
// DESCRIZIONE
const info = document.createElement('div');
info.classList.add('product-info');
info.innerHTML = `
<h3>${images[currentIndex].title}</h3>
<p>${images[currentIndex].text}</p>`;
item.append(info);

// SLIDER
const slider = document.createElement('div');
slider.classList.add('slider');
itemsContainer.append(slider);

const prevBtn = document.createElement('div');
prevBtn.classList.add('prev');
slider.append(prevBtn);
const nextBtn = document.createElement('div');
nextBtn.classList.add('next');
slider.append(nextBtn);

let sliderImages = [];
for (let i = 1; i < 6; i++) {
    const sliderImg = document.createElement('img');
    sliderImg.src = `css/img/0${i}.webp`;
    sliderImg.alt = "...";
    slider.append(sliderImg);
    sliderImages.push(sliderImg);
};
console.log(sliderImages[currentIndex])
sliderImages[currentIndex].classList.add('active')