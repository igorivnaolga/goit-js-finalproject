import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
    )
    .join('');
}
new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
