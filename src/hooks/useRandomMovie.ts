import {MovieItem} from "../movie/Movie";
import {useMemo} from "react";

function useRandomMovie(allMovies: MovieItem[]) {
  const randomMovie: MovieItem | undefined = useMemo(() => {
    if (allMovies.length) {
      const randomIndex: number = Math.floor(Math.random() * allMovies.length);
      return allMovies[randomIndex] as MovieItem;
    }
  }, [allMovies]);
  return randomMovie;
}

export default useRandomMovie;