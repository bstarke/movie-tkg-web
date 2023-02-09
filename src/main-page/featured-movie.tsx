import React, {useContext} from 'react';
import Movie from '../movie'
import useRandomMovie from "../hooks/useRandomMovie";
import MoviesContext from "../context/moviesContext";
import {Paper} from '@material-ui/core';
import {MovieItem} from "../movie/Movie";

function FeaturedMovie() {
  const movies: MovieItem[] = useContext(MoviesContext);
  const movie: MovieItem | undefined = useRandomMovie(movies);
  return (
    !!movie ?
      <Paper elevation={3}>
        <Movie movie={movie}/>
      </Paper> : <Paper>No featured movie at this time</Paper>
  );
}

export default FeaturedMovie;