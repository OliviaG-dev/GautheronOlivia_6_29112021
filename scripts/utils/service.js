const jsonData = await getJsonData();

export async function getJsonData() {
  const url = "./data/photographers.json";
  const response = await fetch(url);
  return await response.json();
}

export async function getPhotographers() {
  return jsonData.photographers;
}

export async function getGalleryData(profilId) {
  return jsonData.media.filter(gallery => gallery.photographerId === profilId);
}

export function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get("id"));
}
