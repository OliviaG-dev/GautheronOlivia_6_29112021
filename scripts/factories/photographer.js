function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Une photo faite par ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const div = document.createElement('div');
        div.className = 'profil-content';
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(span);
        return (article);
    }
    return { name, picture,  getUserCardDOM }
}