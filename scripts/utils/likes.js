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
  //const likeCount =  target.parentNode.children[0].innerText;

  heartIcons.forEach((icon) =>
    icon.addEventListener("click", (event) => {
      const heartSelected = parseFloat(event.target.id);
      photographerDatas.forEach((data) => {
        //console.log(toggleLikes[data.id] + "&&" + data.id +"===" + heartSelected) 
        if (!toggleLikes[data.id] && data.id === heartSelected) {
          //console.log("ok");
          //if (toggleLike && data.id === heartSelected) {
          event.target.parentNode.children[0].innerText = data.likes += 1;
          event.target.classList.replace("far", "fas");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        } else if (toggleLikes[data.id] && data.id === heartSelected) {
          //console.log("ko");
          event.target.parentNode.children[0].innerText = data.likes -= 1;
          event.target.classList.replace("fas", "far");
          toggleLikes[data.id]=!toggleLikes[data.id] 
        }
        //toggleLike = !toggleLike;
      });
      countTotalLike(photographerDatas);
    })
  );
}
