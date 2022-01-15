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
      count++;
      
      const url = document.querySelectorAll(".gallery-card");
      const urlAlt = document.querySelectorAll(".gallery-card");
      
      for (var i = 0; i < url.length; i++) {
        //console.log(url[i + 1].firstChild.getAttribute("src"));
        const link = url[i + count].firstChild.getAttribute("src");
        const linkUrl = urlAlt[i + count].firstChild.getAttribute("alt");
        
        //console.log(linkUrl);
        //console.log(link);
        if (urlAlt[urlAlt.length - 1] === urlAlt[i + count]) {
          count = -1;
        }
        if (url[url.length - 1] === url[i + count]) {
          count = -1;
        }
        
        //let media;
        
        const verifyMediaIsImage = (link) => {
          //console.log("ko", link);
          console.log( link.includes(".jpg"));
          return link.includes(".jpg")
          //console.log(link.includes(".jpg"));
        };
        //@params data.hasOwnProperty("image")
        if (verifyMediaIsImage(link)) {
          console.log("1", link);
          //media.innerHTML = "";
          //link = `./assets/photo/${photographerId}/${image}`;
          
          //media = document.createElement("img");
          media.setAttribute("src", link);
          media.setAttribute("alt", linkUrl);
          //containerMedia.appendChild(media);
        } else {
          console.log("2", link);
          //media.innerHTML = "";
          //link = `./assets/photo/${photographerId}/${video}`;
          
          //media = document.createElement("video");
          media.setAttribute("src", link);
          media.setAttribute("alt", linkUrl);
          media.setAttribute("controls", "controls");
          media.setAttribute("type", "mp4");
          //containerMedia.appendChild(media); 
        }
        
        //containerMedia.appendChild(media);
        titleMedia.innerText = linkUrl;
        //media.setAttribute("alt", linkUrl);
        //media.setAttribute("src", link);
        return;
        
        //console.log('fakeImage: ',url[i] && url[i+1].firstChild.getAttribute("data-link"));
      }
      
      
      // const article = e.target.parentNode
      // console.log(article);
      //console.log("1", currentUrl);
      // const articles = document.querySelectorAll(".gallery-card")
      //console.log(articles);

      //for(let key in articles){
      //console.log("10", key);
      //console.log("11", articles[key]);
      //let articleUrl = articles[key].firstChild.getAttribute("data-link")
      //console.log("5", articleUrl);
      // (articleUrl == currentUrl) {
      //console.log("3", key);
      //console.log(articles[key+1]);
      //let next = articles[key+1].firstChild.getAttribute("data-link")
      //console.log("4", next);
      //break;
      //}
      //console.log("2",articleUrl);
      //console.log(articleUrl);
      //console.log(article.firstChild.firstChild.getAttribute("data-link"));
      //}
    });

    const prev = document.createElement("button");
    prev.className = "lightbox-prev";

    const container = document.createElement("div");
    container.className = "lightbox-container";

    const containerMedia = document.createElement("div");
    containerMedia.className = "lightbox-container-media";

    let media;
    
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", linkUrl);
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
      media.setAttribute("src", link);
      media.setAttribute("alt", linkUrl);
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
