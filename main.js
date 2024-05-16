function obtenerPersonajes(done){
    const results = fetch("https://rickandmortyapi.com/api/character")
    results
        .then(response => response.json())
        .then(data =>{
            done(data)
        });
}

document.addEventListener('DOMContentLoaded', function() {
    obtenerPersonajes(data => {
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(/*html*/`
                <article>
                    <div class="image-container">
                        <img src="${personaje.image}" alt="Personaje">
                    </div>
                    <h2>${personaje.name}</h2>
                    <span>${personaje.status}</span>
                </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("cargar-personajes");
    button.addEventListener("click", function() {
        obtenerPersonajes(data => {
            const personajesAleatorios = data.results.sort(() => 0.5 - Math.random()).slice(0, 6);
            const main = document.querySelector("main");
            main.innerHTML = ""; // Limpia el contenido anterior
            personajesAleatorios.forEach(personaje => {
                const article = document.createRange().createContextualFragment(/*html*/`
                    <article>
                        <div class="image-container">
                            <img src="${personaje.image}" alt="Personaje">
                        </div>
                        <h2>${personaje.name}</h2>
                        <span>${personaje.status}</span>
                    </article>
                `);
                main.append(article);
            });
        });
    });
});
