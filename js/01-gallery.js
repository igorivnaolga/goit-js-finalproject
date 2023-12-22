import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerImgClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    )
    .join('');
}

function handlerImgClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<div class="modal">
        <img src="${evt.target.dataset.source}" alt="${evt.target.alt}"/>
          
    </div>`,
    {
      handler: null,
      onShow(instance) {
        this.handler = onEscape.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

function onEscape({ code }) {
  if (code === 'Escape') {
    this.close();
  }
}
