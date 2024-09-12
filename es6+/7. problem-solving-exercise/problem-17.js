// Create a Movie class with properties like title, director, and year.
// Then, write a function that takes an array of Movie objects and destructures each
// object to log the details.

// Movie class definition
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

// Function to destructure and log movie details
function movieDetails(movies) {
  movies.forEach(({ title, director, year }) => {
    console.log(`Title: ${title}, Director: ${director}, Year: ${year}`);
  });
}

// Creating an array of Movie objects
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("The Matrix", "The Wachowskis", 1999);
const movie3 = new Movie("Interstellar", "Christopher Nolan", 2014);

const moviesArray = [movie1, movie2, movie3];

// Logging the movie details
logMovieDetails(moviesArray);
