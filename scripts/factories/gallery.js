
export function galleryFactory(data) {
  const { id, photographerId, title, image, video, likes, date } = data;
  
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
      media.setAttribute("alt", "${title}");
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
      media.setAttribute("src", link);
      media.setAttribute("alt", "${title}");
    }

    media.addEventListener("click", function (e) {
      const modale = getLightboxDOM()
      //const link = e.target.getAttribute("data-link")
      //const image = modale.querySelector("img");
      //const video = modale.querySelector("video")
      //image.src = link
      //video.src = link
      //console.log(image.src);
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
    let count = 0;

    next.addEventListener("click", (e) =>{
      count++;
      const url = document.querySelectorAll(".gallery-card");
	for (var i = 0; i < url.length; i++) {
      
      //console.log(url[i+1].firstChild.getAttribute("data-link"));
      const link = url[i+count].firstChild.getAttribute("data-link")
      if (url[url.length-1] === url[i+count]) {
        count = -1;
      }
      picture.setAttribute("src", link);
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








    })


    const prev = document.createElement("button");
    prev.className = "lightbox-prev";

    const container = document.createElement("div");
    container.className = "lightbox-container";

    const containerMedia = document.createElement("div");
    containerMedia.className = "lightbox-container-media"
    let picture;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      picture = document.createElement("img");
      picture.setAttribute("src", link);
      picture.setAttribute("alt", `${title}`);
    } else {
      link = `./assets/photo/${photographerId}/${video}`;
      picture = document.createElement("video");
      picture.setAttribute("src", link);
      picture.setAttribute("alt", `${title}`);
      picture.setAttribute("controls", "controls");
      picture.setAttribute("type", "mp4")
    }
    //currentUrl = link;
    
    const titlePicture= document.createElement("h2");
    titlePicture.textContent = title;

    article.appendChild(lightbox);
    lightbox.appendChild(close);
    lightbox.appendChild(next);
    lightbox.appendChild(prev);
    lightbox.appendChild(container);
    container.appendChild(containerMedia);
    containerMedia.appendChild(picture);
    containerMedia.appendChild(titlePicture);

    return article;
  }
  

  return { id, likes, date, title, getGalleryDOM, getLightboxDOM };
}
