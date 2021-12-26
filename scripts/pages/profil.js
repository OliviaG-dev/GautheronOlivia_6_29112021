
import { getPhotographers, getPhotographerId, getJsonData, getGalleryData, getProfil} from '../utils/service.js';
import { photographerFactory } from '../factories/photographer.js';
import { galleryFactory } from '../factories/gallery.js';


async function profil(photographer) {
  return (
    photographerFactory(photographer).getUserProfilDOM()
    );
}

async function getPhotographerObject(profilId) {
  const jsonData = await getJsonData();
  return jsonData.photographers.find(photographer => photographer.id === profilId);
}

//gallery
async function getGallery(gallery) {
  const gallerySection = document.querySelector(".body-gallery");
  
    for (const media of gallery) {
    const mediaGallery = galleryFactory(media);
    const mediaGalleryDOM = mediaGallery.getGalleryDOM();
    gallerySection.appendChild(mediaGalleryDOM);
  }
}

////////////////////////////////////////////////////////////////
//footerlike/price
async function createFooter(profilId, gallery) {
  
  const photographers = await getProfil(profilId);
  const body = document.querySelector(".footer-gallery")
  const price = photographers.price;
  
  const footer = document.createElement('aside');
  footer.setAttribute('id', 'footer');

  const likeTotal = document.createElement('span');
  likeTotal.setAttribute('id', 'footer__like-count')

  const icone = document.createElement("i");
  icone.className = "fas fa-heart heart";

  const priceDays = document.createElement('span');
  priceDays.textContent = `${price}€/jour`;
  
  body.appendChild(footer);
  footer.appendChild(likeTotal);
  footer.appendChild(icone);
  footer.appendChild(priceDays);
  accFooter(gallery) 
}

async function accFooter(gallery) {
  const footerLikes = document.getElementById('footer__like-count');
  footerLikes.textContent = gallery.reduce((acc, curr) => acc + curr.likes, 0);
}
////////////////////////////////////////////////////////////////////
  
async function profilInit() {
  const jsonData = await getPhotographers();
  const profilId = getPhotographerId();
  console.log("2", profilId);
  const photographer = await getPhotographerObject(profilId);
  const gallery = await getGalleryData(profilId);

  profil(photographer);
  getGallery(gallery);
  createFooter(profilId, gallery);
}

profilInit();

