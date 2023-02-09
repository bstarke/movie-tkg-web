import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import MoviesContext from "../context/moviesContext";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {MediaEntity, MovieItem} from "../movie/Movie";

const getMediaTypes = (mediaEntities: MediaEntity[]) => {
  let result = [];
  for (let i = 0; i < mediaEntities.length; i++) {
    result.push(mediaEntities[i].location)
  }
  result.sort();
  return result.join(", ");
};
const columns: GridColDef[] = [
  {field: 'id', hide: true},
  {
    field: 'Year',
    headerName: 'Year',
    valueGetter: (params) => params.row.movie.Year,
    width: 150,
  },
  {
    field: 'Title',
    headerName: 'Title',
    valueGetter: (params) => params.row.movie.Title,
    width: 250,
  },
  {
    field: 'Rated',
    headerName: 'Rated',
    valueGetter: (params) => params.row.movie.Rated,
    width: 150,
  },
  {
    field: 'Genre',
    headerName: 'Genre',
    valueGetter: (params) => params.row.movie.Genre,
    width: 200,
  },
  {
    field: 'imdbRating',
    headerName: 'IMDB Score',
    valueGetter: (params) => params.row.movie.imdbRating,
    type: 'number',
    width: 170,
  },
  {
    field: 'MediaType',
    headerName: 'Location',
    valueGetter: (params) => getMediaTypes(params.row.media),
    width: 150,
  },
];

export default function MovieList() {
  const movies: MovieItem[] = useContext(MoviesContext);
  const history = useHistory();
  const setActive = (movie: MovieItem) => {
    history.push(`/movie/${movie?.movie.imdbID}`)
  };
  return (
    <>
      <div style={{height: 660, width: '100%'}}>
        <DataGrid
          rows={movies}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick={true}
          onRowClick={(movie) => setActive(movie.row as MovieItem)}
        />
      </div>
    </>
  );
}