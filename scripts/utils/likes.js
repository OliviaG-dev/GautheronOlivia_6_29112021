import { getPhotographerId, getGalleryData } from "../utils/service.js";

export async function countTotalLike(likes) {
  const footerLikes = document.getElementById("footer__like-count");
  footerLikes.textContent = likes.reduce((acc, curr) => acc + curr.likes, 0);
}

export async function addLikes() {
  let toggleLikes = [];
  const photographerDatas = await getGalleryData(getPhotographerId());
  
  for (let photo of photographerDatas){
    toggleLikes[photo.id]= false
  }
  const heartIcons = document.querySelectorAll(".add-likes");

  heartIcons.forEach((icon) =>
    icon.addEventListener("click", (event) => {
      const heartSelected = parseFloat(event.target.id);
      photographerDatas.forEach((data) => {
        if (!toggleLikes[data.id] && data.id === heartSelected) {
          event.target.parentNode.children[0].innerText = data.likes += 1;
          event.target.classList.replace("far", "fas");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        } else if (toggleLikes[data.id] && data.id === heartSelected) {
          event.target.parentNode.children[0].innerText = data.likes -= 1;
          event.target.classList.replace("fas", "far");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        }
      });
      countTotalLike(photographerDatas);
    })
  );

  //a voir si ça marche !!
  heartIcons.forEach((icon) =>
      icon.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          console.log("yeahhhhhhh 2");
      const heartSelected = parseFloat(e.target.id);
      photographerDatas.forEach((data) => {
        if (!toggleLikes[data.id] && data.id === heartSelected) {
          e.target.parentNode.children[0].innerText = data.likes += 1;
          e.target.classList.replace("far", "fas");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        } else if (toggleLikes[data.id] && data.id === heartSelected) {
          e.target.parentNode.children[0].innerText = data.likes -= 1;
          e.target.classList.replace("fas", "far");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        }
      });
      countTotalLike(photographerDatas);
    }
    })
  );


}
