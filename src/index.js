import "./styles.css";

const key = "ab0e9b3e";
const movieSlides = document.querySelector("#movie-slides");
const movieNameElement = document.getElementById("movie-name");
const movieDetails = document.querySelector(".movie-details");

const searchIcon = document.querySelector(".fa-search");
const homeIcon = document.querySelector(".fa-home");

const noResults = document.createElement("dialog");

const noResultsMessage = document.createElement("h2");
noResultsMessage.textContent = "No movies found...";
noResultsMessage.classList.add("title");
noResults.classList.add("no-results");
const closeButton = document.createElement("a");
closeButton.textContent = "X";
noResults.appendChild(noResultsMessage);
noResults.appendChild(closeButton);
closeButton.classList.add("close-button");
document.body.appendChild(noResults);

searchIcon.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-bar");
  searchBar.classList.toggle("open");
  movieNameElement.focus();
});

homeIcon.addEventListener("click", () => {
  movieDetails.style.display = "none";
  movieSlides.style.display = "block";
  movieNameElement.value = "";
});

document
  .getElementById("clearInput")
  .addEventListener("click", () => (movieNameElement.value = ""));
movieNameElement.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    movieSlides.style.display = "none";
    movieDetails.style.display = "grid";
    movieDetails.innerHTML = "";
    const movieName = movieNameElement.value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${key}&s=${movieName}`;
    const response = await fetch(apiUrl);
    const movieData = await response.json();
    console.log(movieData);

    if (movieData.Response === "False") {
      noResults.showModal();
      noResults.style.display = "flex";
      closeButton.addEventListener("click", () => {
        noResults.close();
        noResults.style.display = "none";
      });
    } else {
      movieData.Search.forEach((element) => {
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

        if (element.Poster) {
          poster.src = element.Poster;
          poster.alt = `${element.Title} poster`;
        } else {
          poster.alt = "No poster available";
        }
        titleMovie.textContent = element.Title;
        const movieId = element.imdbID;
        fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${key}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.Response === "True") {
              console.log(data);
              rating.textContent = `${data.Ratings[0]?.Value}⭐`;
              movieOverview.textContent = data.Plot;
            } else {
              console.log("Movie not found");
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      });
    }
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "de0c4dc09cmsha23578880a13cbcp10203djsnd333482b1180",
        "x-rapidapi-host": "imdb188.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
      options
    );
    const result = await response.json();
    console.log(result.data);
    const highRatedMovies = result.data;
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

  movies?.forEach((movie) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.primaryImage.imageUrl;
    moviePoster.alt = movie.titleText.text;

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.titleText.text;

    const movieRating = document.createElement("p");
    movieRating.classList.add("movie-rating");
    movieRating.innerHTML = movie.ratingsSummary.aggregateRating + "⭐";

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
