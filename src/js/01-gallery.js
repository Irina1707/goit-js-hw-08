import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
//console.log(SimpleLightboxcss);

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {

     const galleryBox = galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
        `;
    }).join("");
    return galleryBox;
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionType: "attr", captionsData: "alt", captionPosition: "bottom", captionDelay: 250
});
    
