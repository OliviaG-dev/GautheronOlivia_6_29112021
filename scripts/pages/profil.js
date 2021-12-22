
import { getPhotographers, getPhotographerId, getJsonData, getGalleryData} from '../utils/service.js';
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
  
  async function profilInit() {
    const jsonData = await getPhotographers();
    const profilId = getPhotographerId();
    console.log(profilId);
    const photographer = await getPhotographerObject(profilId);
    const gallery = await getGalleryData(profilId);
;
  profil(photographer)
  getGallery(gallery);
}

profilInit();

