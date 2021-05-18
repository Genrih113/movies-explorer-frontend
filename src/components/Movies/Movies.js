import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

  // стейт управления отображением прелоадера
  const [preloaderOn, setPreloaderOn] = React.useState(false);

  function setPreloaderOnState() {
    setPreloaderOn(true);
  };

  function resetPreloaderOnState() {
    setPreloaderOn(false);
  };


  // стейт со всеми фильмами из BeatFilmsApi
  const [movies, setMovies] = React.useState([]);

  function setMoviesState(allMovies) {
    setMovies(allMovies);
  }


  // стейт значения поисковой строки
  const [searchString, setSearchString] = React.useState('');

  function setSearchStringState(string) {
    setSearchString(string);
  };


  //стейт состояния чекбокса короткометражек
  const [isShort, setIsShort] = React.useState(false);

  function setIsShortState(bool) {
    setIsShort(bool);
  };


  // стейт для запуска поиска фильмов из массива все фильмов
  const [isSearchRun, setIsSearchRun] = React.useState(false);

  function setIsSearchRunStateOnTrue() {
    setIsSearchRun(true);
  };

  function setIsSearchRunStateOnFalse() {
    setIsSearchRun(false);
  };


  // эффект в котором выполняется поиск соответствующих критериям фильмов
  React.useEffect(() => {
    if (!isSearchRun) {
      return
    }

    let findedMovies = [];

    findedMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
    });

    if (isShort) {
      findedMovies = findedMovies.filter((movie) => {
        return movie.duration <= 40;
      });
    }
    setMoviesState(findedMovies);
    setIsSearchRunStateOnFalse();
    setSearchStringState('');

  }, [isSearchRun]);


  return(
    <>
      <MovieSearch
        setMoviesState={setMoviesState}
        setPreloaderOnState={setPreloaderOnState}
        resetPreloaderOnState={resetPreloaderOnState}
        setSearchStringState={setSearchStringState}
        searchString={searchString}
        setIsSearchRunStateOnTrue={setIsSearchRunStateOnTrue}
        setIsShortState={setIsShortState}
      />

      {preloaderOn
        ? <Preloader />
        : <MoviesCardSection
            isSavedMoviesDirectory={false}
            movies={movies}
            deleteMovie={props.deleteMovie}

            savedMovies={props.savedMovies}
            addMovie={props.addMovie}
          />
      }



    </>
  );
};

export default Movies;
