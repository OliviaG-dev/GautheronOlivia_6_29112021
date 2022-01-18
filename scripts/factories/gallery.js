export function galleryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, linkUrl } =
    data;

  //console.log(data);
  let link;
  //let currentUrl;

  function getGalleryDOM() {
    const article = document.createElement("article");
    article.className = "article-gallery";

    const aside = document.createElement("aside");
    aside.className = "gallery-card";

    //////////////////////////////////////////////////////////////////////////////////
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
      const modale = getLightboxDOM();
      modale.classList.add("show");
      modale.classList.remove("hide");
    });

    ////////////////////////////////////////////////////////////////////////////////////

    media.setAttribute("data-link", link);

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

    const icone = document.createElement("i");
    icone.className = "add-likes far fa-heart heart";
    icone.id = id;

    article.appendChild(aside);
    aside.appendChild(media);
    aside.appendChild(div);
    div.appendChild(titre);
    div.appendChild(contentLike);
    contentLike.appendChild(like);
    contentLike.appendChild(icone);

    return article;
  }

  function getLightboxDOM() {
    const article = document.querySelector(".lightboxBox");

    const lightbox = document.createElement("article");
    lightbox.className = "lightbox";

    const close = document.createElement("button");
    close.className = "lightbox-close";

    close.addEventListener("click", function () {
      const modale = getLightboxDOM();
      modale.classList.add("hide");
    });

    const next = document.createElement("button");
    next.className = "lightbox-next";
    let count = 0;

    next.addEventListener("click", () => {
      const url = document.querySelectorAll(".gallery-card");
      count++;

      for (var i = 0; i < url.length; i++) {
        //* si count est  
        if (url[url.length] === url[count]) {
          count = 0;
        }
        const link = url[count].firstChild.getAttribute("src");
        const mediaTitle = url[count].firstChild.getAttribute("alt");

        verifyMediaIsImage(link).reload;
        titleMedia.innerText = mediaTitle;
        media.setAttribute("alt", mediaTitle);
        media.setAttribute("src", link);
        containerMedia.appendChild(media);
        containerMedia.appendChild(titleMedia);
        return;
      }
    });

    const prev = document.createElement("button");
    prev.className = "lightbox-prev";

    prev.addEventListener("click", () => {
      const url = document.querySelectorAll(".gallery-card");

      for (let i = url.length; i > 0; i--) {
        //* si count est egale à 0, il faut que count = array.length pour retourner à la fin du tableau
        if (count === 0) {
          count = url.length;
        }

        const link = url[count - 1].firstChild.getAttribute("src");
        const mediaTitle = url[count - 1].firstChild.getAttribute("alt");

        count--;

        titleMedia.innerText = mediaTitle;
        media.setAttribute("alt", mediaTitle);
        media.setAttribute("src", link);
        return;
      }
    });

    const container = document.createElement("div");
    container.className = "lightbox-container";

    const containerMedia = document.createElement("div");
    containerMedia.className = "lightbox-container-media";

    let media;

    const verifyMediaIsImage = (link) => {
      console.log(link.includes(".jpg"));

      return link.includes(".jpg");
    };
    //@params data.hasOwnProperty("image")
    if (verifyMediaIsImage(link)) {
      console.log("1", link);

      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", linkUrl);
      containerMedia.appendChild(media);
    } else {
      media = document.createElement("video");
      media.setAttribute("src", link);
      media.setAttribute("alt", linkUrl);
      media.setAttribute("controls", "controls");
      media.setAttribute("type", "mp4");
      console.log("2", link);
      containerMedia.appendChild(media);
    }

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
