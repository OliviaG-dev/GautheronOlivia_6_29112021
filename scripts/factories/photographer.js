  function photographerFactory(data) {

  const { name, portrait, city, country, tagline, price, id } = data;
  

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const a = document.createElement("a");
    a.className = "lien-profil";
    a.setAttribute(
      "href",
      `./photographer.html?id=${id}`
    );

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Une photo de ${name}`);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const div = document.createElement("div");
    div.className = "profil-content";

    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    const p = document.createElement("p");
    p.textContent = tagline;

    const span = document.createElement("span");
    span.textContent = `${price}€/jour`;

    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);
    return article;
  }
  
  function getUserProfilDOM() {
    const section = document.querySelector(".photograph-header");

    const content = document.createElement("div");
    
    const h1 = document.createElement("h1");
    h1.textContent = name;
    
    const div = document.createElement("div");
    div.className = "content-profil";
    
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    
    const p = document.createElement("p");
    p.textContent = tagline;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Une photo de ${name}`);
    
    section.appendChild(content)
    content.appendChild(h1);
    content.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    section.appendChild(img);
    
    return section;
  }
  return { name, picture, getUserCardDOM, getUserProfilDOM };
}