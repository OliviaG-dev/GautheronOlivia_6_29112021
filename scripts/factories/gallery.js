
export function galleryFactory(data) {
  const { id, photographerId, title, image, video, likes, date } = data;
  //const closeModale = document.querySelector(".lightbox-close");
  
  let link;
  
  function getGalleryDOM() {
    const article = document.createElement("article");
    article.className = "article-gallery";
    
    const aside = document.createElement("aside");
    aside.className = "gallery-card";
    
    //const modale = document.querySelector(".lightbox");
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
      const modale = getLightboxDOM()
      //const link = e.target.getAttribute("data-link")
      const image = modale.querySelector("img");
      //const video = modale.querySelector("video")
      //image.src = link
      //video.src = link
      console.log(image.src);
      modale.classList.add("show");
      modale.classList.remove("hide");
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

    close.addEventListener("click", function() {
      const modale = getLightboxDOM()
      modale.classList.add("hide");
      
    })

    const next = document.createElement("button");
    next.className = "lightbox-next";

    const prev = document.createElement("button");
    prev.className = "lightbox-prev";

    const container = document.createElement("div");
    container.className = "lightbox-container";

    // const picture = document.createElement("img");
    // picture.setAttribute("src", link);

    let picture;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      picture = document.createElement("img");
      picture.setAttribute("src", link);
      picture.setAttribute("alt", "${title}");
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      picture = document.createElement("video");
      //const source = document.createElement("source");
      picture.setAttribute("src", link);
      picture.setAttribute("alt", "${title}");
      picture.setAttribute("controls", "controls");
      console.log(link);
      picture.setAttribute("type", "mp4")
      //source.setAttribute("autoplay");
      //picture.appendChild(source);
    }

    const titlePicture= document.createElement("h2");
    titlePicture.textContent = title;

    article.appendChild(lightbox);
    lightbox.appendChild(close);
    lightbox.appendChild(next);
    lightbox.appendChild(prev);
    lightbox.appendChild(container);
    container.appendChild(picture);
    container.appendChild(titlePicture);

    return article;
  }
  

  return { id, likes, date, title, getGalleryDOM, getLightboxDOM };
}
