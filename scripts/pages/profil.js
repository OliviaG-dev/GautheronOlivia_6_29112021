
async function getPhotographers() {
  const url = "./data/photographers.json";
  //let photographers = [];
  // Penser à remplacer par les données récupérées dans le json
  //await fetch(url)
   // .then((res) => res.json())
   // .then((data) => (photographers = data.photographers));
  const response = await fetch(url)
  const data = await response.json()
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...data.photographers],
  };
}

function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get('id'));
}

async function profil(photographer) { 
  // && sinon "problème d'asyncronicité".
  return getPhotographerId() && photographerFactory(photographer).getUserProfilDOM();    
  
}

async function getPhotographerObject(data, profilId) {
  return data.photographers.find(photographer => photographer.id === profilId);
}

async function profilInit() {
    const jsonData = await getPhotographers();
    const profilId = getPhotographerId();
    const photographer = await getPhotographerObject(jsonData, profilId);    

    profil(photographer);
}

profilInit();



