import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import Preloader from '../Preloader/Preloader';
// import movieApi from '../../utils/MovieApi';

function Movies(props) {

  // стейт для числа отображаемых карточек
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = React.useState(
    document.documentElement.clientWidth > 768
    ? 12
    : document.documentElement.clientWidth > 480
    ? 8
    : 5
  );

  // эффект для установки числа отображаемых карточек, но только после очередного поиска
  React.useEffect(() => {
  setNumberOfDisplayedMovies(
    document.documentElement.clientWidth > 768
    ? 12
    : document.documentElement.clientWidth > 480
    ? 8
    : 5
  );
  }, [props.movies]);


  // стейт для числа добавляющихся карточек
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(
    document.documentElement.clientWidth > 768
    ? 3
    : document.documentElement.clientWidth > 480
    ? 2
    : 1
  );


  // функция-хендл для кнопки прорисовки дополнительных результатов поиска
  function handleForMoreButton() {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + numberOfAddedMovies);
  };


  window.addEventListener('resize',function() {
    setNumberOfAddedMovies(
      document.documentElement.clientWidth > 768
      ? 3
      : document.documentElement.clientWidth > 480
      ? 2
      : 1
    );
  });


  return(
    <>
      <MovieSearch
        searchString={props.searchString}
        isShort={props.isShort}
        handleSearchString={props.handleSearchString}
        handleSearchCheckbox={props.handleSearchCheckbox}
        handleSubmit={props.handleSubmit}
        isSearchTryToStart={props.isSearchTryToStart}
        setIsSearchTryToStart={props.setIsSearchTryToStart}
      />

      {props.preloaderOn
        ? <Preloader />
        : <MoviesCardSection
            isSavedMoviesDirectory={false}
            movies={props.movies}
            isShort={props.isShort}
            deleteMovie={props.deleteMovie}
            savedMovies={props.savedMovies}
            addMovie={props.addMovie}
            numberOfDisplayedMovies={numberOfDisplayedMovies}
            numberOfAddedMovies={numberOfAddedMovies}
            setNumberOfDisplayedMovies={setNumberOfDisplayedMovies}
            handleForMoreButton={handleForMoreButton}
            wasSearchRun={props.wasSearchRun}
            isMoviesRequestErrored={props.isMoviesRequestErrored}
            isSavedMoviesRequestErrored={props.isSavedMoviesRequestErrored}
          />
      }
    </>
  );
};

export default Movies;
