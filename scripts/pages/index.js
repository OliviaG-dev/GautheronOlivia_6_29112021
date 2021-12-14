

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



async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
