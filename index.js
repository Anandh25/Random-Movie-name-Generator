const movieContainer = document.getElementById("movieName");
const btn = document.getElementById("btn");

const url =
  "https://raw.githubusercontent.com/Anandh25/Movie_Lists_Json/refs/heads/main/movies.json";

let getMovie = () => {
  movieContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      const randomIndex = Math.floor(Math.random() * item.length);
      movieContainer.textContent = item[randomIndex];
      movieContainer.classList.add("fade");
    });
};
btn.addEventListener("click", getMovie);
getMovie();
