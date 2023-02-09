import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import MovieDetails from "./index";
import MoviesContext from "../context/moviesContext";

function MovieById() {
  // @ts-ignore
  const {imdbID} = useParams();
  const movies = useContext(MoviesContext);
  const movie = movies.find((m) => m.movie.imdbID === imdbID);
  return (
    !!movie ?
      <MovieDetails movie={movie} />
      :
    <div>Movie Not Found</div>
  );
}

export default MovieById;