const fs = require('fs');

var fetchFilms = () => {
  try {
    var filmsString = fs.readFileSync('norton-films.json');
    return JSON.parse(filmsString);
  } catch(e) {
    return [];
  }
};

var showFilm = (film) => {
  console.log(`Ed Norton played ${film.role} in ${film.title} directed by ${film.director} in ${film.year}.`)
};

let films = fetchFilms();

films.forEach(showFilm);

let wesFilms = films.filter((film) => film.director === 'Wes Anderson');

console.log("---\nEd Norton films directed by Wes Anderson:\n---");
wesFilms.forEach((film) => {
  console.log(film.title);
});

let earlyFilms = films.filter((film) => Number(film.year) < 2000);

console.log("---\nEarly Ed Norton films:\n---");
earlyFilms.forEach((film) => {
  console.log(film.title);
});