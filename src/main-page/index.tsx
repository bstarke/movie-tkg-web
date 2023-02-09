import React from 'react';
import Header from './header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FeaturedMovie from "./featured-movie";
import MovieList from "../movie-list";
import MovieById from "../movie/MovieById";
import useMovies from "../hooks/useMovies";
import MoviesContext from '../context/moviesContext';
import {Container, CssBaseline, Paper, ThemeProvider, useMediaQuery} from "@material-ui/core";
import {createTheme} from '@material-ui/core/styles';
import Footer from "./footer";

function App() {
  const allMovies = useMovies();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }), [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MoviesContext.Provider value={allMovies}>
        <Container maxWidth="lg">
          <Router>
            <Header/>
            <Paper elevation={3}>
              <Switch>
                <Route path="/random" component={FeaturedMovie} />
                <Route path="/movie/:imdbID" component={MovieById}/>
                <Route path="/" component={MovieList}/>
              </Switch>
            </Paper>
            <Footer />
          </Router>
        </Container>
      </MoviesContext.Provider>
    </ThemeProvider>
  );
}

export default App;
