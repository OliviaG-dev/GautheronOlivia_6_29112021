//import { OpenLightbox } from '../utils/lightbox.js';

export function galleryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, linkUrl } =
    data;

  let link;
  //let currentUrl;

  function getGalleryDOM() {
    const article = document.createElement("article");
    article.className = "article-gallery";

    const aside = document.createElement("aside");
    aside.className = "gallery-card";

    let media;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", `${title}`);
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
      media.setAttribute("src", link);
      media.setAttribute("alt", `${title}`);
    }

    media.addEventListener("click", function (e) {
      const url = document.querySelectorAll(".gallery-card");

      let currentIndex = 0;
      url.forEach((item, index) => {
        const itemUrl = item.firstChild.getAttribute("src");
        if (itemUrl == link) {
          currentIndex = index;
        }
      });

      const modale = getLightboxDOM(currentIndex);
      modale.classList.add("show");
      modale.classList.remove("hide");
    });

    media.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const url = document.querySelectorAll(".gallery-card");
      let currentIndex = 0;
      url.forEach((item, index) => {
        const itemUrl = item.firstChild.getAttribute("src");
        if (itemUrl == link) {
          currentIndex = index;
        }
      });
        const modale = getLightboxDOM(currentIndex);
        modale.classList.add("show");
        modale.classList.remove("hide");;
      }
    });

    media.setAttribute("Tabindex", "0")

    const div = document.createElement("div");
    div.className = "content-text";

    //title
    const titre = document.createElement("h3");
    titre.className = "title-gallery";
    titre.textContent = title;

    const contentLike = document.createElement("div");

    //likes
    const like = document.createElement("span");
    like.className = "like-number";
    like.textContent = likes;
    like.setAttribute("Tabindex", "0");

    const icone = document.createElement("i");
    icone.className = "add-likes far fa-heart heart";
    icone.ariaLabel = "add likes";
    icone.id = id;
    icone.setAttribute("Tabindex", "0");
    


    article.appendChild(aside);
    aside.appendChild(media);
    aside.appendChild(div);
    div.appendChild(titre);
    div.appendChild(contentLike);
    contentLike.appendChild(like);
    contentLike.appendChild(icone);

    return article;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getLightboxDOM(currentIndex) {
    const article = document.querySelector(".lightboxBox");

    const lightbox = document.createElement("article");
    lightbox.className = "lightbox";

    const close = document.createElement("button");
    close.className = "lightbox-close";
    close.ariaLabel = "close dialog";

    close.addEventListener("click", function () {
      const modale = getLightboxDOM();
      modale.classList.add("hide");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modale = getLightboxDOM();
        modale.classList.add("hide");
      }
    });

    const next = document.createElement("button");
    next.className = "lightbox-next";
    next.ariaLabel = "next média";

    let count = currentIndex;

    next.addEventListener("click", () => {
      const url = document.querySelectorAll(".gallery-card");
      count++;

      for (var i = 0; i < url.length; i++) {
        if (url[url.length] === url[count]) {
          count = 0;
        }

        const link = url[count].firstChild.getAttribute("src");
        const mediaTitle = url[count].firstChild.getAttribute("alt");

        let media;
        const verifyMediaIsImage = (link) => {
          return link.includes(".jpg");
        };

        if (verifyMediaIsImage(link)) {
          containerMedia.innerHTML = "";
          media = document.createElement("img");
        } else {
          containerMedia.innerHTML = "";
          media = document.createElement("video");
          media.setAttribute("controls", "controls");
          media.setAttribute("type", "mp4");
        }

        titleMedia.innerText = mediaTitle;
        media.setAttribute("alt", mediaTitle);
        media.setAttribute("src", link);
        containerMedia.appendChild(media);
        containerMedia.appendChild(titleMedia);
        return;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        const url = document.querySelectorAll(".gallery-card");
        count++;
        for (var i = 0; i < url.length; i++) {
          if (url[url.length] === url[count]) {
            count = 0;
          }
          const link = url[count].firstChild.getAttribute("src");
          const mediaTitle = url[count].firstChild.getAttribute("alt");

          let media;
          const verifyMediaIsImage = (link) => {
            return link.includes(".jpg");
          };

          if (verifyMediaIsImage(link)) {
            containerMedia.innerHTML = "";
            media = document.createElement("img");
          } else {
            containerMedia.innerHTML = "";
            media = document.createElement("video");
            media.setAttribute("controls", "controls");
            media.setAttribute("type", "mp4");
          }

          titleMedia.innerText = mediaTitle;
          media.setAttribute("alt", mediaTitle);
          media.setAttribute("src", link);
          containerMedia.appendChild(media);
          containerMedia.appendChild(titleMedia);
          return;
        }
      }
    });

    const prev = document.createElement("button");
    prev.className = "lightbox-prev";
    prev.ariaLabel = "before média";

    prev.addEventListener("click", () => {
      const url = document.querySelectorAll(".gallery-card");

      for (let i = url.length; i > 0; i--) {
        if (count === 0) {
          count = url.length;
        }

        const link = url[count - 1].firstChild.getAttribute("src");
        const mediaTitle = url[count - 1].firstChild.getAttribute("alt");

        let media;
        const verifyMediaIsImage = (link) => {
          return link.includes(".jpg");
        };

        if (verifyMediaIsImage(link)) {
          containerMedia.innerHTML = "";
          media = document.createElement("img");
        } else {
          containerMedia.innerHTML = "";
          media = document.createElement("video");
          media.setAttribute("controls", "controls");
          media.setAttribute("type", "mp4");
        }

        count--;

        titleMedia.innerText = mediaTitle;
        media.setAttribute("alt", mediaTitle);
        media.setAttribute("src", link);
        containerMedia.appendChild(media);
        containerMedia.appendChild(titleMedia);
        return;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        const url = document.querySelectorAll(".gallery-card");

        for (let i = url.length; i > 0; i--) {
          if (count === 0) {
            count = url.length;
          }
          const link = url[count - 1].firstChild.getAttribute("src");
          const mediaTitle = url[count - 1].firstChild.getAttribute("alt");

          let media;
          const verifyMediaIsImage = (link) => {
            return link.includes(".jpg");
          };

          if (verifyMediaIsImage(link)) {
            containerMedia.innerHTML = "";
            media = document.createElement("img");
          } else {
            containerMedia.innerHTML = "";
            media = document.createElement("video");
            media.setAttribute("controls", "controls");
            media.setAttribute("type", "mp4");
          }

          count--;
          titleMedia.innerText = mediaTitle;
          media.setAttribute("alt", mediaTitle);
          media.setAttribute("src", link);
          containerMedia.appendChild(media);
          containerMedia.appendChild(titleMedia);
          return;
        }
      }
    });

    const container = document.createElement("div");
    container.className = "lightbox-container";

    const containerMedia = document.createElement("div");
    containerMedia.className = "lightbox-container-media";

    let media;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", `${title}`);
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
      media.setAttribute("src", link);
      media.setAttribute("alt", `${title}`);
      media.setAttribute("controls", "controls");
      media.setAttribute("type", "mp4");
    }

    //currentUrl = link;

    const titleMedia = document.createElement("h2");
    titleMedia.innerText = title;

    article.appendChild(lightbox);
    lightbox.appendChild(close);
    lightbox.appendChild(next);
    lightbox.appendChild(prev);
    lightbox.appendChild(container);
    container.appendChild(containerMedia);
    containerMedia.appendChild(media);
    containerMedia.appendChild(titleMedia);

    return article;
  }

  return { id, likes, date, title, linkUrl, getGalleryDOM, getLightboxDOM };
}
