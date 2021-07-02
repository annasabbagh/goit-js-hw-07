import images from './images.js';

const galleryListRef = document.querySelector('ul#gallery');

const createGalleryList = ({ url, alt }) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('gallery_item');
  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery_img');
  imgRef.src = url;
  imgRef.alt = alt;
  itemRef.append(imgRef);
  return itemRef;
};

const galleryItem = images.map(createGalleryList);
console.log(galleryItem);

galleryListRef.append(...galleryItem);
