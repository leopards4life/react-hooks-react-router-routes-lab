import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)

  const moviesList = movies.map(movie => (
    <div>
      {movie.title}
      {movie.time}
      <ul>
        <li>{movie.genres}</li>
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>
  );
}

export default Movies;
