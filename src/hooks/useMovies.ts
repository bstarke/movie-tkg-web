import {useEffect, useState} from "react";
import {MovieItem} from "../movie/Movie";
import {useKeycloak} from "@react-keycloak/web";

const useMovies = () => {
  const [allMovies, setAllMovies] = useState<MovieItem[]>([]);
  const {keycloak} = useKeycloak();
  useEffect(() => {
    const fetchMovies = async () => {
      let myHeaders = new Headers({
        'Authorization': 'Bearer ' + keycloak.token
      });
      const rsp = await fetch("https://movies-api.k8s.starkenberg.net/v1/movies/", {headers:myHeaders});
      const movies: MovieItem[] = await rsp.json();
      setAllMovies(movies);
    };
    fetchMovies();
  }, [keycloak.token]);

  return allMovies;
}

export default useMovies;