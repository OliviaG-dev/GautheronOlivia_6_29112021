
async function getPhotographers() {
    const url = "./data/photographers.json";
    let photographers = [];
  
    await fetch(url)
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers)); 
  
  return {
    photographers: [...photographers],
  };
}

async function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get('id'));
}

async function profil(photographer) { 
  // && sinon "problème d'asyncronicité".
  await getPhotographerId() && photographerFactory(photographer).getUserProfilDOM();    
  
}

async function getPhotographerObject(data, profilId) {
  return data.photographers.find(photographer => photographer.id === profilId);
}

async function profilInit() {
    const jsonData = await getPhotographers();
    const profilId = await getPhotographerId();
    const photographer = await getPhotographerObject(jsonData, profilId);    

    profil(photographer);
}

profilInit();



