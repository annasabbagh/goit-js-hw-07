import images from './images.js';

const galleryListRef = document.querySelector('ul#gallery');

const createImageItem = ({ url, alt }) => {
  return `<li class = gallery_item> <img class = gallery_img src = "${url}", alt = "${alt}"> </img></li>`;
};
// console.log(createImageItem(images[0]));

const createImagesList = imageList => imageList.map(createImageItem).join('');
// console.log(createImagesList(images));

const addItemsToGallery = (elem, template) => {
  elem.insertAdjacentHTML('afterbegin', template);
};

addItemsToGallery(galleryListRef, createImagesList(images));
