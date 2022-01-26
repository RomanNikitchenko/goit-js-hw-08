import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

const cardsMarcup = createImageCardsMarcup(galleryItems);

function createImageCardsMarcup(Items) {
    return Items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `
    }).join("");
};

gallery.insertAdjacentHTML("beforeend", cardsMarcup);

gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return 
    };

});

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});