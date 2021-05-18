import React from 'react';
import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardSection(props) {

  // переменная нужна для возможности удаления (дизлайка) карточки,
  // добавится в объект фильма в компоненте MoviesCard
  let savedMovieId;

  // // стейт для числа отображаемых карточек
  // const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = React.useState(
  //   document.documentElement.clientWidth > 768
  //   ? 12
  //   : document.documentElement.clientWidth > 480
  //   ? 8
  //   : 5
  //   );
  // function setNumberOfDisplayedMoviesState(number) {
  //   setNumberOfDisplayedMovies(numberOfDisplayedMovies + number);
  // }


  // // стейт для числа добавляющихся карточек
  // const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(
  //   document.documentElement.clientWidth > 768
  //   ? 3
  //   : document.documentElement.clientWidth > 480
  //   ? 2
  //   : 1
  //   );

  // function setNumberOfAddedMoviesState() {
  //   setNumberOfAddedMovies(
  //     document.documentElement.clientWidth > 768
  //     ? 3
  //     : document.documentElement.clientWidth > 480
  //     ? 2
  //     : 1
  //     );
  // };


  // window.addEventListener('resize',function(){
  //   setNumberOfAddedMoviesState(document.documentElement.clientWidth);
  // });


  return (
    <section className="movies-card-section">
      <ul className="movies-card-section__list">
        {props.movies.slice(0, props.numberOfDisplayedMovies).map((movie, i) => {
          return  <MoviesCard
                    key={props.isSavedMoviesDirectory ? movie._id : movie.id}
                    movie={movie}
                    deleteMovie={props.deleteMovie}
                    // poster={movie.image}
                    // name={movie.nameRU}
                    isLiked={
                      props.isSavedMoviesDirectory
                      ? false
                      : props.savedMovies.some(function(savedMovie) {
                        savedMovieId = savedMovie._id;
                        return savedMovie.movieId === movie.id;
                        })
                    }
                    isSavedMoviesDirectory={props.isSavedMoviesDirectory}
                    addMovie={props.addMovie}
                    savedMovieId={savedMovieId}
                  />
          })
        }
      </ul>
      {!props.isSavedMoviesDirectory && props.numberOfDisplayedMovies < props.movies.length &&
      <button onClick={() => {props.setNumberOfDisplayedMoviesState(props.numberOfAddedMovies)}}
        className="movies-card-section__more-button">
          Ещё
      </button>
      }
    </section>
  );
};

export default MoviesCardSection;
