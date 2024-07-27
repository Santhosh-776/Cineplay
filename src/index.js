import "./styles.css";
const key = "b78137a4838e112017452d598e6ae114";
const movieSlides = document.querySelector("#movie-slides");
const movieNameElement = document.getElementById("movie-name");
const movieDetails = document.querySelector(".movie-details");

const searchIcon = document.querySelector(".fa-search");
const homeIcon = document.querySelector(".fa-home");
searchIcon.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-bar");
  searchBar.classList.toggle("open");
});

homeIcon.addEventListener("click", () => {
  movieDetails.style.display = "none";
  movieSlides.style.display = "flex";
});

movieNameElement.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    movieSlides.style.display = "none";
    movieDetails.style.display = "grid";
    movieDetails.innerHTML = "";
    const movieName = movieNameElement.value;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${key}`;
    const response = await fetch(apiUrl);
    const movieData = await response.json();
    console.log(movieData);
    movieData.results.forEach((element) => {
      const results = document.createElement("div");
      const poster = document.createElement("img");
      const titleMovie = document.createElement("h2");
      const rating = document.createElement("p");
      const movieOverview = document.createElement("p");
      results.appendChild(poster);
      results.appendChild(titleMovie);
      results.appendChild(rating);
      results.appendChild(movieOverview);
      movieDetails.appendChild(results);
      results.classList.add("results");
      poster.classList.add("poster");
      titleMovie.classList.add("title");
      rating.classList.add("rating");
      movieOverview.classList.add("movie-overview");
      if (element) {
        if (poster)
          poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        poster.alt = `${element.title} poster`;
        if (titleMovie) titleMovie.textContent = element.title;
        if (rating) rating.textContent = element.vote_average + "⭐";
        if (movieOverview) movieOverview.textContent = element.overview;
      } else {
        console.log("Movie not found");
      }
    });
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=2024&api_key=${key}`
    );
    const data = await response.json();
    console.log(data.results);
    const highRatedMovies = data.results.filter(
      (movie) => movie.vote_average > 7.2
    );
    createSlides(highRatedMovies);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function createSlides(movies) {
  if (!movieSlides) {
    console.error("No movieSlides element found!");
    return;
  }

  movies.forEach((movie) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const moviePoster = document.createElement("img");
    moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    moviePoster.alt = movie.title;

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.title;

    const movieRating = document.createElement("p");
    movieRating.classList.add("movie-rating");
    movieRating.innerHTML = movie.vote_average + "⭐";

    const moviePlot = document.createElement("p");
    moviePlot.classList.add("movie-plot");
    moviePlot.textContent = movie.overview;

    slide.appendChild(moviePoster);
    slide.appendChild(movieTitle);
    slide.appendChild(movieRating);
    slide.appendChild(moviePlot);

    movieSlides.appendChild(slide);
  });

  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }
}
