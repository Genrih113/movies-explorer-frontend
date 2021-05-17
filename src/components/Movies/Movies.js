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


  const [searchString, setSearchString] = React.useState('');
  function handleSearchString(evt) {
    const string = evt.target.value;
    // const value = input.value;
    setSearchString(string);
  };


  const findedMovies = [];
  props.movies.forEach(function(movie) {
    // сверять поля в нижних регистрах
    if (movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase())) {
      findedMovies.push(movie);
    }
  });


  return(
    <>
      <MovieSearch
        setMoviesState={props.setMoviesState}
        setPreloaderOnState={setPreloaderOnState}
        resetPreloaderOnState={resetPreloaderOnState}
        handleSearchString={handleSearchString}
        searchString={searchString}
      />

      {preloaderOn &&
      <Preloader />
      }

      <MoviesCardSection
        isSavedMoviesDirectory={false}
        movies={findedMovies}
        deleteMovie={props.deleteMovie}

        savedMovies={props.savedMovies}
        addMovie={props.addMovie}
      />
    </>
  );
};

export default Movies;
