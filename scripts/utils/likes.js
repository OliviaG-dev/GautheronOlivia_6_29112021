import { getPhotographerId, getGalleryData } from "../utils/service.js";

export async function countTotalLike(likes) {
  const footerLikes = document.getElementById("footer__like-count");
  footerLikes.textContent = likes.reduce((acc, curr) => acc + curr.likes, 0);
}

export async function addLikes() {
  let toggleLike = false;
  const photographerDatas = await getGalleryData(getPhotographerId());
  const heartIcons = document.querySelectorAll(".add-likes");
  heartIcons.forEach((icon) =>
    icon.addEventListener("click", (event) => {
      const heartSelected = parseFloat(event.target.id);
      photographerDatas.find((data) => {
        if (toggleLike && data.id === heartSelected) {
          event.target.parentNode.children[0].innerText = data.likes += 1;
          event.target.classList.replace("far", "fas");
        } else if (!toggleLike && data.id === heartSelected) {
          event.target.parentNode.children[0].innerText = data.likes -= 1;
          event.target.classList.replace("fas", "far");
        }
        toggleLike = !toggleLike;
      });
      countTotalLike(photographerDatas);
    })
  );
}
