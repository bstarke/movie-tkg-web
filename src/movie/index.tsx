import React from 'react';
import {MediaEntity, MovieItem} from "./Movie";
import {Container, Grid, Link, Typography} from "@material-ui/core";

const options: Intl.DateTimeFormatOptions = {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'};
export type MovieProps = {
  movie?: MovieItem
}
const getLocations = (mediaEntities: MediaEntity[] | undefined | null) => {
  let result = [];
  if (mediaEntities) {
    for (let i = 0; i < mediaEntities.length; i++) {
      result.push(mediaEntities[i].location)
    }
  }
  result.sort();
  return result.join(", ");
};

function MovieDetails({movie}: MovieProps) {
  return (
    !!movie ?
      <Container maxWidth="lg">
        <Typography variant="h2" align="center"><Link target="_blank" rel="noreferrer"
                                         href={'https://www.imdb.com/title/' + movie.movie.imdbID}>{movie.movie.Title}</Link>
        </Typography>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={4}>
            <img className="poster" src={movie.movie.Poster} alt={movie.movie.imdbID}/>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">IMDB Rating: {movie.movie.imdbRating}</Typography>
            <Typography variant="h6">Rated: {movie.movie.Rated}</Typography>
            <Typography variant="h6">Genre: {movie.movie.Genre}</Typography>
            <Typography variant="h6">Runtime: {movie.movie.Runtime}</Typography>
            <Typography variant="h6">Released: {new Date(Date.parse(movie.movie.Released)).toLocaleDateString('en-US', options)}</Typography>
            <Typography variant="h6">Director(s): {movie.movie.Director}</Typography>
            <Typography variant="h6">Actor(s): {movie.movie.Actors}</Typography>
            <Typography variant="h6">{movie.movie.Plot}</Typography>
            <Typography variant="h6">Location: {getLocations(movie.media)}</Typography>
          </Grid>
        </Grid>
      </Container> : null
  );
}

export default MovieDetails;