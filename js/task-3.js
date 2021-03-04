import imagesList from './images.js';
const galleryRef = document.querySelector('#gallery');
// insertAdjacentHTML()
const createImage = ({ url, alt }) => {
  return `<li class='gallery__item'><img class='gallery__img' src="${url}" alt="${alt}"></li>`;
};

const createImagesList = imageList => imageList.map(createImage).join('');

const addItemsToGallery = (elem, template) => {
  elem.insertAdjacentHTML('beforeend', template);
};

addItemsToGallery(galleryRef, createImagesList(imagesList));
