const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let shortMovies = [];
let mediumMovies = [];
let longMovies = [];

for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        shortMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
    } else {
        longMovies.push(movie);
    }
    
}

console.log(shortMovies)
console.log(mediumMovies)
console.log(longMovies)