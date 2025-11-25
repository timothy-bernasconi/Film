const filmsAction = [
  { genre: "Espionnage", titre: "Mission Impossible – Fallout" },
  { genre: "Espionnage", titre: "James Bond : Skyfall" },
  { genre: "Espionnage", titre: "Kingsman : Services secrets" },
  { genre: "Espionnage", titre: "La Taupe" },
  { genre: "Espionnage", titre: "Atomic Blonde" },
  { genre: "Espionnage", titre: "Agents très spéciaux : Code UNCLE" },
  { genre: "Espionnage", titre: "Le Pont des espions" },
  { genre: "Espionnage", titre: "Spy Game" },
  { genre: "Espionnage", titre: "Body of Lies" },
  { genre: "Espionnage", titre: "Salt" },
  { genre: "Espionnage", titre: "Mission Impossible – Rogue Nation" },
  { genre: "Espionnage", titre: "Jason Bourne - La Mémoire dans la peau" },
  { genre: "Espionnage", titre: "Jason Bourne - La Mort dans la peau" },
  { genre: "Espionnage", titre: "Jason Bourne - La Vengeance dans la peau" },
  { genre: "Espionnage", titre: "James Bond : Casino Royale" },
  { genre: "Espionnage", titre: "James Bond : Spectre" },
  { genre: "Espionnage", titre: "L'espion qui venait du froid" },
  { genre: "Espionnage", titre: "La Mort aux trousses" },

  { genre: "Thriller", titre: "Inception" },
  { genre: "Thriller", titre: "Seven : Les Sept Crimes capitaux" },
  { genre: "Thriller", titre: "Gone Girl" },
  { genre: "Thriller", titre: "Shutter Island" },
  { genre: "Thriller", titre: "Fight Club" },
  { genre: "Thriller", titre: "Memento" },
  { genre: "Thriller", titre: "The Prestige" },
  { genre: "Thriller", titre: "Prisoners" },
  { genre: "Thriller", titre: "Zodiac" },
  { genre: "Thriller", titre: "No Country for Old Men" },
  {
    genre: "Thriller",
    titre: "Millénium : Les Hommes qui n’aimaient pas les femmes",
  },
  { genre: "Thriller", titre: "Black Swan" },
  { genre: "Thriller", titre: "Les Infiltrés" },
  { genre: "Thriller", titre: "Oldboy" },
  { genre: "Thriller", titre: "Sicario" },
  { genre: "Thriller", titre: "Nightcrawler" },
  { genre: "Thriller", titre: "Heat" },
  { genre: "Thriller", titre: "Collateral" },
  { genre: "Thriller", titre: "Mystic River" },
  { genre: "Thriller", titre: "Donnie Darko" },

  { genre: "Aventure", titre: "Indiana Jones et la Dernière Croisade" },
  { genre: "Aventure", titre: "Jurassic Park" },
  {
    genre: "Aventure",
    titre: "Pirates des Caraïbes : La Malédiction du Black Pearl",
  },
  {
    genre: "Aventure",
    titre: "Le Seigneur des anneaux : La Communauté de l’Anneau",
  },
  { genre: "Aventure", titre: "Le Seigneur des anneaux : Les Deux Tours" },
  { genre: "Aventure", titre: "Le Seigneur des anneaux : Le Retour du Roi" },
  { genre: "Aventure", titre: "Harry Potter à l’école des sorciers" },
  { genre: "Aventure", titre: "Harry Potter et la Chambre des secrets" },
  { genre: "Aventure", titre: "Harry Potter et le Prisonnier d’Azkaban" },
  { genre: "Aventure", titre: "Harry Potter et la Coupe de feu" },
  { genre: "Aventure", titre: "Avatar" },
  { genre: "Aventure", titre: "Le Livre de la jungle" },
  { genre: "Aventure", titre: "King Kong" },
  { genre: "Aventure", titre: "The Revenant" },
  { genre: "Aventure", titre: "L’Odyssée de Pi" },
  { genre: "Aventure", titre: "Le Hobbit : Un voyage inattendu" },
  { genre: "Aventure", titre: "Le Hobbit : La Désolation de Smaug" },
  { genre: "Aventure", titre: "Le Hobbit : La Bataille des cinq armées" },
  { genre: "Aventure", titre: "Mad Max : Fury Road" },
  { genre: "Aventure", titre: "Le Masque de Zorro" },
];

const filmsRomance = [
  { genre: "Eau de rose", titre: "The Notebook" },
  { genre: "Eau de rose", titre: "Titanic" },
  { genre: "Eau de rose", titre: "Orgueil et Préjugés" },
  { genre: "Eau de rose", titre: "La La Land" },
  { genre: "Eau de rose", titre: "N’oublie jamais" },
  { genre: "Eau de rose", titre: "Coup de foudre à Notting Hill" },
  { genre: "Eau de rose", titre: "À tous les garçons que j’ai aimés" },
  { genre: "Eau de rose", titre: "5 Centimètres par seconde" },
  { genre: "Eau de rose", titre: "Love Actually" },
  { genre: "Eau de rose", titre: "Crazy Rich Asians" },
  { genre: "Eau de rose", titre: "La Belle et la Bête" },
  { genre: "Eau de rose", titre: "Call Me by Your Name" },
  { genre: "Eau de rose", titre: "Dear John" },
  { genre: "Eau de rose", titre: "PS : I Love You" },
  { genre: "Eau de rose", titre: "Me Before You" },
  {
    genre: "Eau de rose",
    titre: "À tous les garçons : P.S. Je t’aime toujours",
  },
  { genre: "Eau de rose", titre: "The Fault in Our Stars" },
  { genre: "Eau de rose", titre: "Midnight Sun" },
  { genre: "Eau de rose", titre: "A Walk to Remember" },
  { genre: "Eau de rose", titre: "Sweet Home Alabama" },
  { genre: "Noël", titre: "Love Actually" },
  { genre: "Noël", titre: "Le Grinch" },
  { genre: "Noël", titre: "Maman, j’ai raté l’avion" },
  { genre: "Noël", titre: "Miracle sur la 34ème rue" },
  { genre: "Noël", titre: "Noël chez les Cooper" },
  { genre: "Noël", titre: "The Holiday" },
  { genre: "Noël", titre: "Un Noël de folie !" },
  { genre: "Noël", titre: "Last Christmas" },
  { genre: "Noël", titre: "Arthur Christmas : Mission Noël" },
  { genre: "Noël", titre: "Klaus" },
  { genre: "Noël", titre: "Noël blanc" },
  { genre: "Noël", titre: "Joyeux Noël" },
  { genre: "Noël", titre: "Le Pôle Express" },
  { genre: "Noël", titre: "Nativity!" },
  { genre: "Noël", titre: "The Christmas Chronicles" },
  { genre: "Noël", titre: "Un Noël pas si parfait" },
  { genre: "Noël", titre: "Elf" },
  { genre: "Noël", titre: "Les Vacances de Noël" },
  { genre: "Noël", titre: "Scrooge" },
  { genre: "Noël", titre: "Holiday in the Wild" },
  { genre: "Drama Coréen", titre: "Crash Landing on You" },
  { genre: "Drama Coréen", titre: "It’s Okay to Not Be Okay" },
  { genre: "Drama Coréen", titre: "Descendants of the Sun" },
  { genre: "Drama Coréen", titre: "Goblin" },
  { genre: "Drama Coréen", titre: "Start-Up" },
  { genre: "Drama Coréen", titre: "Nevertheless" },
  { genre: "Drama Coréen", titre: "True Beauty" },
  { genre: "Drama Coréen", titre: "Romance is a Bonus Book" },
  { genre: "Drama Coréen", titre: "Her Private Life" },
  { genre: "Drama Coréen", titre: "Love Alarm" },
  { genre: "Drama Coréen", titre: "My Love from the Star" },
  { genre: "Drama Coréen", titre: "The World of the Married" },
  { genre: "Drama Coréen", titre: "Flower of Evil" },
  { genre: "Drama Coréen", titre: "My ID is Gangnam Beauty" },
  { genre: "Drama Coréen", titre: "Moon Lovers: Scarlet Heart Ryeo" },
  { genre: "Drama Coréen", titre: "Hospital Playlist" },
  { genre: "Drama Coréen", titre: "Reply 1988" },
  { genre: "Drama Coréen", titre: "Vincenzo" },
  { genre: "Drama Coréen", titre: "Hometown Cha-Cha-Cha" },
  { genre: "Drama Coréen", titre: "Business Proposal" },
];
const filmsComedie = [
  { genre: "Comédie française", titre: "Intouchables" },
  { genre: "Comédie française", titre: "Bienvenue chez les Ch’tis" },
  { genre: "Comédie française", titre: "Le Dîner de Cons" },
  { genre: "Comédie française", titre: "La Grande Vadrouille" },
  { genre: "Comédie française", titre: "Les Bronzés font du ski" },
  { genre: "Comédie française", titre: "Les Visiteurs" },
  {
    genre: "Comédie française",
    titre: "Astérix et Obélix : Mission Cléopâtre",
  },
  { genre: "Comédie française", titre: "Le Père Noël est une ordure" },
  { genre: "Comédie française", titre: "OSS 117 : Le Caire, nid d’espions" },
  { genre: "Comédie française", titre: "OSS 117 : Rio ne répond plus" },
  { genre: "Comédie française", titre: "Qu’est-ce qu’on a fait au Bon Dieu ?" },
  { genre: "Comédie française", titre: "Les Tuche" },
  { genre: "Comédie française", titre: "La Ch’tite famille" },
  { genre: "Comédie française", titre: "Babysitting" },
  { genre: "Comédie française", titre: "Babysitting 2" },
  { genre: "Comédie française", titre: "Le Prénom" },
  { genre: "Comédie française", titre: "Comme des garçons" },
  { genre: "Comédie française", titre: "Les Profs" },
  { genre: "Comédie française", titre: "Les Profs 2" },
  { genre: "Comédie française", titre: "Taxi 1" },
  { genre: "Comédie américaine", titre: "The Hangover" },
  { genre: "Comédie américaine", titre: "Superbad" },
  { genre: "Comédie américaine", titre: "Step Brothers" },
  { genre: "Comédie américaine", titre: "Bridesmaids" },
  { genre: "Comédie américaine", titre: "Mean Girls" },
  { genre: "Comédie américaine", titre: "21 Jump Street" },
  { genre: "Comédie américaine", titre: "21 & 22 Jump Street" },
  {
    genre: "Comédie américaine",
    titre: "Anchorman: The Legend of Ron Burgundy",
  },
  { genre: "Comédie américaine", titre: "Dumb and Dumber" },
  { genre: "Comédie américaine", titre: "The Mask" },
  { genre: "Comédie américaine", titre: "Night at the Museum" },
  { genre: "Comédie américaine", titre: "Legally Blonde" },
  { genre: "Comédie américaine", titre: "Mrs. Doubtfire" },
  { genre: "Comédie américaine", titre: "Zoolander" },
  { genre: "Comédie américaine", titre: "Ace Ventura: Pet Detective" },
  { genre: "Comédie américaine", titre: "Forrest Gump" },
  { genre: "Comédie américaine", titre: "Ted" },
  { genre: "Comédie américaine", titre: "The 40-Year-Old Virgin" },
  { genre: "Comédie américaine", titre: "Knocked Up" },
  { genre: "Comédie américaine", titre: "Big Daddy" },
  { genre: "Sitcom", titre: "Friends" },
  { genre: "Sitcom", titre: "The Office (US)" },
  { genre: "Sitcom", titre: "How I Met Your Mother" },
  { genre: "Sitcom", titre: "Parks and Recreation" },
  { genre: "Sitcom", titre: "Brooklyn Nine-Nine" },
  { genre: "Sitcom", titre: "The Big Bang Theory" },
  { genre: "Sitcom", titre: "Seinfeld" },
  { genre: "Sitcom", titre: "Scrubs" },
  { genre: "Sitcom", titre: "Modern Family" },
  { genre: "Sitcom", titre: "That ’70s Show" },
  { genre: "Sitcom", titre: "Arrested Development" },
  { genre: "Sitcom", titre: "Community" },
  { genre: "Sitcom", titre: "New Girl" },
  { genre: "Sitcom", titre: "Two and a Half Men" },
  { genre: "Sitcom", titre: "How I Met Your Father" },
  { genre: "Sitcom", titre: "The Simpsons" },
  { genre: "Sitcom", titre: "Family Guy" },
  { genre: "Sitcom", titre: "South Park" },
  { genre: "Sitcom", titre: "Freaks and Geeks" },
  { genre: "Sitcom", titre: "Happy Endings" },
];
const filmsHorreur = [
  { genre: "Gore", titre: "Saw" },
  { genre: "Gore", titre: "Hostel" },
  { genre: "Gore", titre: "Hellraiser" },
  { genre: "Gore", titre: "The Green Inferno" },
  { genre: "Gore", titre: "Martyrs" },
  { genre: "Gore", titre: "I Spit on Your Grave" },
  { genre: "Gore", titre: "Cannibal Holocaust" },
  { genre: "Gore", titre: "The Texas Chainsaw Massacre (1974)" },
  { genre: "Gore", titre: "Braindead / Dead Alive" },
  { genre: "Gore", titre: "Inside (À l’intérieur)" },
  { genre: "Gore", titre: "Frontière(s)" },
  { genre: "Gore", titre: "High Tension" },
  { genre: "Gore", titre: "Zombie (1979)" },
  { genre: "Gore", titre: "The Devil’s Rejects" },
  { genre: "Gore", titre: "Bone Tomahawk" },
  { genre: "Gore", titre: "Audition" },
  { genre: "Gore", titre: "Gore Gore Girls" },
  { genre: "Gore", titre: "Ichi the Killer" },
  { genre: "Gore", titre: "Raw" },
  { genre: "Gore", titre: "Re-Animator" },
  { genre: "Slasher", titre: "Halloween" },
  { genre: "Slasher", titre: "Vendredi 13" },
  { genre: "Slasher", titre: "Nightmare on Elm Street" },
  { genre: "Slasher", titre: "Scream" },
  { genre: "Slasher", titre: "My Bloody Valentine" },
  { genre: "Slasher", titre: "Prom Night" },
  { genre: "Slasher", titre: "Black Christmas" },
  { genre: "Slasher", titre: "Urban Legend" },
  { genre: "Slasher", titre: "I Know What You Did Last Summer" },
  { genre: "Slasher", titre: "Hatchet" },
  { genre: "Slasher", titre: "Sorority Row" },
  { genre: "Slasher", titre: "April Fool's Day" },
  { genre: "Slasher", titre: "The Strangers" },
  { genre: "Slasher", titre: "Terrifier" },
  { genre: "Slasher", titre: "Texas Chainsaw 2" },
  { genre: "Slasher", titre: "Children of the Corn" },
  { genre: "Slasher", titre: "Friday the 13th Part 2" },
  { genre: "Slasher", titre: "Sleepaway Camp" },
  { genre: "Slasher", titre: "Maniac" },
  { genre: "Slasher", titre: "Halloween II" },
  { genre: "Parodie", titre: "Scary Movie" },
  { genre: "Parodie", titre: "Scary Movie 2" },
  { genre: "Parodie", titre: "Scary Movie 3" },
  { genre: "Parodie", titre: "Scary Movie 4" },
  { genre: "Parodie", titre: "Scary Movie 5" },
  { genre: "Parodie", titre: "Shaun of the Dead" },
  { genre: "Parodie", titre: "Tucker and Dale vs Evil" },
  { genre: "Parodie", titre: "Zombieland" },
  { genre: "Parodie", titre: "The Cabin in the Woods" },
  { genre: "Parodie", titre: "Screamers" },
  { genre: "Parodie", titre: "House of 1000 Corpses" },
  { genre: "Parodie", titre: "Gremlins" },
  { genre: "Parodie", titre: "The Babysitter" },
  { genre: "Parodie", titre: "Freaky" },
  { genre: "Parodie", titre: "Army of Darkness" },
  { genre: "Parodie", titre: "Killer Klowns from Outer Space" },
  { genre: "Parodie", titre: "Pride and Prejudice and Zombies" },
  { genre: "Parodie", titre: "Student Bodies" },
  { genre: "Parodie", titre: "Black Sheep" },
  { genre: "Parodie", titre: "Dead Snow" },
];

const retryBtn = document.querySelector(".retry");
const resetBtn = document.querySelector(".reset");
const subBtns = document.querySelectorAll(".subgenre-btn");
const container = document.querySelector(".container");
const subContainer = document.querySelector(".subgenre-container");
const title = document.getElementById("title");

const sousGenres = {
  action: ["Aventure", "Espionnage", "Thriller"],
  romance: ["Eau de rose", "Noël", "Drama Coréen"],
  comedie: ["Comédie française", "Comédie américaine", "Sitcom"],
  horreur: ["Gore", "Slasher", "Parodie"],
};

const tableauxFilms = {
  action: filmsAction,
  romance: filmsRomance,
  comedie: filmsComedie,
  horreur: filmsHorreur,
};

function choisirFilm(sousGenre, tableauFilms) {
  const filmsFiltres = tableauFilms.filter((f) => f.genre === sousGenre);
  const randomIndex = Math.floor(Math.random() * filmsFiltres.length);
  title.innerHTML = filmsFiltres[randomIndex].titre;
  retryBtn.style.display = "inline-block";
  subContainer.style.display = "none";
}

function afficherSousGenres(genre) {
  container.style.display = "none";
  subBtns.forEach((btn, i) => {
    btn.textContent = sousGenres[genre][i];
    btn.onclick = () => choisirFilm(sousGenres[genre][i], tableauxFilms[genre]);
  });
  subContainer.style.display = "flex";
  retryBtn.style.display = "none";
}

document.querySelector(".c-1").addEventListener("click", () => {
  title.innerHTML = "Un film d'action, très bon choix ! Vous êtes plutôt :";
  afficherSousGenres("action");
});

document.querySelector(".c-2").addEventListener("click", () => {
  title.innerHTML = "Un film romantique, parfait ! Vous êtes plutôt :";
  afficherSousGenres("romance");
});

document.querySelector(".c-3").addEventListener("click", () => {
  title.innerHTML = "Une comédie, génial ! Vous êtes plutôt :";
  afficherSousGenres("comedie");
});

document.querySelector(".c-4").addEventListener("click", () => {
  title.innerHTML = "Un film d'horreur, hehe ! Vous êtes plutôt :";
  afficherSousGenres("horreur");
});

retryBtn.addEventListener("click", () => {
  const firstGenre = Object.keys(sousGenres).find((g) =>
    sousGenres[g].includes(subBtns[0].textContent)
  );
  subBtns[0].click();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
