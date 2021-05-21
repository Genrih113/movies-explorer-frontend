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

  function setNumberOfDisplayedMoviesState(number) {
    setNumberOfDisplayedMovies(number);
  }


   React.useEffect(() => {
    setNumberOfDisplayedMoviesState(
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

  function setNumberOfAddedMoviesState() {
    setNumberOfAddedMovies(
      document.documentElement.clientWidth > 768
      ? 3
      : document.documentElement.clientWidth > 480
      ? 2
      : 1
      );
  };


  // функция-хендл для кнопки прорисовки дополнительных результатов поиска
  function handleForMoreButton() {
    setNumberOfDisplayedMoviesState(numberOfDisplayedMovies + numberOfAddedMovies);
  };


  window.addEventListener('resize',function(){
    setNumberOfAddedMoviesState(document.documentElement.clientWidth);
  });


  return(
    <>
      <MovieSearch
        searchString={props.searchString}
        isShort={props.isShort}
        handleSearchString={props.handleSearchString}
        handleSearchCheckbox={props.handleSearchCheckbox}
        handleSubmit={props.handleSubmit}
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
            setNumberOfDisplayedMoviesState={setNumberOfDisplayedMoviesState}
            handleForMoreButton={handleForMoreButton}
          />
      }
    </>
  );
};

export default Movies;
