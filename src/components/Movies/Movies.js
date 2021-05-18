import React from 'react';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import Preloader from '../Preloader/Preloader';
import movieApi from '../../utils/MovieApi';

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
  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem('lastSearchedMovies')));

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
    localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
    setMoviesState(findedMovies);
    setIsSearchRunStateOnFalse();
    setSearchStringState('');
    setIsShortState(false);
  }, [isSearchRun]);


  // функция-хендл изменения поисковой строки
  function handleSearchString(evt) {
    const string = evt.target.value;
    setSearchStringState(string);
  };

  // функция-хендл отметки чекбокса формы поиска
  function handleSearchCheckbox(evt) {
    const checkbox = evt.target.checked;
    console.log(checkbox);
    setIsShortState(checkbox);
  };


  // функция-хендл сабмита формы поиска
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('отправка запроса всех фильмов');
    setPreloaderOnState();
    movieApi.getMovies()
      .then((res) => {
        // надо пропустить фильмы через нормализатор
        console.log(res);
        setMoviesState(res);
        setIsSearchRunStateOnTrue();
      })
      .catch((err) => {console.log(err)})
      .finally(() => {resetPreloaderOnState()})
  };


  // стейт для числа отображаемых карточек
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = React.useState(
    document.documentElement.clientWidth > 768
    ? 12
    : document.documentElement.clientWidth > 480
    ? 8
    : 5
  );

  function setNumberOfDisplayedMoviesState(number) {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + number);
  }


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


  window.addEventListener('resize',function(){
    setNumberOfAddedMoviesState(document.documentElement.clientWidth);
  });


  return(
    <>
      <MovieSearch
        searchString={searchString}
        isShort={isShort}
        handleSearchString={handleSearchString}
        handleSearchCheckbox={handleSearchCheckbox}
        handleSubmit={handleSubmit}
        // setMoviesState={setMoviesState}
        // setPreloaderOnState={setPreloaderOnState}
        // resetPreloaderOnState={resetPreloaderOnState}
        // setSearchStringState={setSearchStringState}
        //setIsSearchRunStateOnTrue={setIsSearchRunStateOnTrue}
        // setIsShortState={setIsShortState}
      />

      {preloaderOn
        ? <Preloader />
        : <MoviesCardSection
            isSavedMoviesDirectory={false}
            movies={movies}
            deleteMovie={props.deleteMovie}

            savedMovies={props.savedMovies}
            addMovie={props.addMovie}

            numberOfDisplayedMovies={numberOfDisplayedMovies}
            numberOfAddedMovies={numberOfAddedMovies}
            setNumberOfDisplayedMoviesState={setNumberOfDisplayedMoviesState}
          />
      }
    </>
  );
};

export default Movies;
