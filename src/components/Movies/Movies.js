import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

    const [preloaderOn, setPreloaderOn] = React.useState(false);
    function setPreloaderOnState() {
      setPreloaderOn(true);
    };
    function resetPreloaderOnState() {
      setPreloaderOn(false);
    };

  return(
    <>
      <MovieSearch
        setMoviesState={props.setMoviesState}
        setPreloaderOnState={setPreloaderOnState}
        resetPreloaderOnState={resetPreloaderOnState}
      />

      {preloaderOn &&
      <Preloader />
      }

      <MoviesCardSection
        isSavedMoviesDirectory={false}
        movies={props.movies}
        deleteMovie={props.deleteMovie}
      />
    </>
  );
};

export default Movies;
