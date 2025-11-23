let filmsAction = [
    { genre: "Espionnage", titre: "Mission: Impossible – Fallout" },
    { genre: "Espionnage", titre: "James Bond : Skyfall" },
    { genre: "Thriller", titre: "Inception" },
    { genre: "Thriller", titre: "Seven" },
    { genre: "Aventure", titre: "Indiana Jones et la Dernière Croisade" },
    { genre: "Aventure", titre: "Jurassic Park" }
];

let choixAction = document.querySelector(".c-1");

choixAction.addEventListener("click", function() {
    console.log("Clic sur Action détecté !");
    document.getElementById("title").innerHTML = 
        "Parfait, choisissez le sous-genre d'action : Espionnage, Thriller ou Aventure.";

    document.querySelector(".container").classList.add("hidden");
    document.querySelector(".container2").classList.add("visible");
});


function choisirFilmSousGenre(sousGenre) {
    let filmsFiltrés = filmsAction.filter(film => film.genre === sousGenre);
    let randomIndex = Math.floor(Math.random() * filmsFiltrés.length);
    let filmChoisi = filmsFiltrés[randomIndex];

    document.querySelector(".container2").classList.remove("visible");
    document.getElementById("title").innerHTML = 
        "Et si vous regardiez : " + filmChoisi.titre + " ?";
}


let espionnageBtn = document.querySelector(".p-1");
espionnageBtn.addEventListener("click", function() {
    console.log("Clic sur Espionnage !");
    choisirFilmSousGenre("Espionnage");
});


let thrillerBtn = document.querySelector(".p-2");
thrillerBtn.addEventListener("click", function() {
    console.log("Clic sur Thriller !");
    choisirFilmSousGenre("Thriller");
});


let aventureBtn = document.querySelector(".p-3");
aventureBtn.addEventListener("click", function() {
    console.log("Clic sur Aventure !");
    choisirFilmSousGenre("Aventure");
});