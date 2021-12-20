
export function galleryFactory(data) {
  const { id, photographerId, title, image, video,likes, date} = data;

  let link;

  // if (data.hasOwnProperty("image")) {
    
  //   link = `./assets/photo/${photographerId}/${image}`;
  // } else {
  //   link = `./assets/photo/${photographerId}/${video}`;
  // }

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
    // //image and video
    // const image = document.createElement("img");
    // if (data.hasOwnProperty("image")) {
    //   image.setAttribute("src", link);
    //   image.setAttribute("alt", "${title}");
    // }

    // const video = document.createElement("video");
    // const source = document.createElement("source");
    // if (data.hasOwnProperty("video")) {
    //   source.setAttribute("src", link);
    //   source.setAttribute("alt", "${title}");
    // }

    const div = document.createElement("div");

    //title
    const title = document.createElement("h3");
    title.className = "title-gallery";

    //likes
    const likes = document.createElement("span");
    likes.className = "likes-gallery";
    //likes.textContent = `${likes} <i class="fas fa-heart"></i>`;

    article.appendChild(aside);
    aside.appendChild(a);
    // a.appendChild(image);
    // a.appendChild(video);
    a.appendChild(media);
    // video.appendChild(source);
    aside.appendChild(div);
    div.appendChild(title);
    div.appendChild(likes);

    return article;
  }
  return { id, likes, date, title, getGalleryDOM };
}
