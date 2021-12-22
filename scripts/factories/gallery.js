
export function galleryFactory(data) {
  const { id, photographerId, title, image, video,likes, date} = data;

  let link;
  
  console.log("2",data);
  function getGalleryDOM() {
    const article = document.createElement("article");
    article.className = "article-gallery";

    const aside = document.createElement("aside");
    aside.className = "gallery-card";

    //lien media
    const a = document.createElement("a");
    let media;
    if (data.hasOwnProperty("image")) {
      link = `./assets/photo/${photographerId}/${image}`;
      media = document.createElement("img");
      media.setAttribute("src", link);
      media.setAttribute("alt", "${title}");
    }
    else {
      link = `./assets/photo/${photographerId}/${video}`;
      media = document.createElement("video");
    const source = document.createElement("source");
      source.setAttribute("src", link);
      source.setAttribute("alt", "${title}");
    media.appendChild(source);
    }
    
    const div = document.createElement("div");
    div.className = "content-text";

    //title
    const titre = document.createElement("h3");
    titre.className = "title-gallery";
    titre.textContent = title;


    const contentLike = document.createElement("div");

    //likes
    const like = document.createElement("span");
    like.className = "likes-gallery";
    like.textContent = likes;

    const icone = document.createElement("i");
    icone.className = "fas fa-heart heart";

    article.appendChild(aside);
    aside.appendChild(a);
    a.appendChild(media);
    aside.appendChild(div);
    div.appendChild(titre);
    div.appendChild(contentLike);
    contentLike.appendChild(like);
    contentLike.appendChild(icone)


    return article;
  }
  return { id, likes, date, title, getGalleryDOM };
}
