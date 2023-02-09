import {createContext} from "react";
import {MovieItem} from "../movie/Movie";

const MoviesContext = createContext<MovieItem[]>([]);

export default MoviesContext;