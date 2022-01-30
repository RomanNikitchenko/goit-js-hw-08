import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import imageCardTemplate from '../templates/picture-card.hbs';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const cardsMarcup = createImageCardsMarcup(galleryItems);

function createImageCardsMarcup(Items) {
  return Items.map(Item => imageCardTemplate(Item)).join('');
}

gallery.insertAdjacentHTML('beforeend', cardsMarcup);

gallery.addEventListener('click', evt => {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
