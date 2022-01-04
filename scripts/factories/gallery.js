export function galleryFactory(data) {
  const { id, photographerId, title, image, video, likes, date } = data;

  let link;

  function getGalleryDOM() {
    const article = document.createElement("article");
    article.className = "article-gallery";

    const aside = document.createElement("aside");
    aside.className = "gallery-card";

    //media
    //const a = document.createElement("a");

    //////////////////////////////////////////////////////////////////////////////////
    let media;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", "${title}");
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
      const source = document.createElement("source");
      source.setAttribute("src", link);
      source.setAttribute("alt", "${title}");
      media.appendChild(source);
    }
    media.addEventListener("click", function (e) {
      e.preventDefault();
      //e.target.getAttribute("data-link")

      //console.log(e.target);
      //console.log(e.target.getAttribute("data-link"));
      //alert(e.target.getAttribute("data-link"))
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
    //a.appendChild(media);
    aside.appendChild(div);
    div.appendChild(titre);
    div.appendChild(contentLike);
    contentLike.appendChild(like);
    contentLike.appendChild(icone);

    return article;
  }

  function getLightboxDOM() {
    const lightbox = createElement("article");
    lightbox.className = "lightbox";

    const close = createElement("boutton");
    close.className = "lightbox-close";

    const next = createElement("boutton");
    next.className = "lightbox-next";

    const prev = createElement("button");
    prev.className = "ligthbox-prev";

    const container = createElement("div");
    container.className = "ligthbox-container";

    const picture = createElement("img");
    picture.setAttribute("data-link", link);

    lightbox.appendChild("lightbox-close");
    lightbox.appendChild("lightbox-next");
    lightbox.appendChild("lightbox-prev");
    lightbox.appendChild("lightbox-container");
    container.appendChild("picture");

    return lightbox;
    // <!-- <article class="lightbox">
    // 	  <button class="lightbox-close">Fermer</button>
    // 	  <button class="lightbox-next">Suivant</button>
    // 	  <button class="lightbox-prev">Précédent</button>
    // 	  <div class="lightbox-container">
    // 		  <img src="./assets/photo/925/Fashion_Wings.jpg" alt="">
    // 	  </div>
    //   </article> -->
  }

  return { id, likes, date, title, getGalleryDOM, getLightboxDOM };
}
