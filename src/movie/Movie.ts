export interface MovieItem {
  id: number;
  movie: Movie;
  media?: (MediaEntity)[] | null;
}
export interface Movie {
  id: number;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
}
export interface MediaEntity {
  id: number;
  type: string;
  location: string;
}
