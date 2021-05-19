import React from 'react';
import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardSection(props) {

  // переменная нужна для возможности удаления (дизлайка) карточки,
  // добавится в объект фильма в компоненте MoviesCard
  let savedMovieId;


  return (
    <section className="movies-card-section">
      <ul className="movies-card-section__list">
        {props.movies.slice(0, props.numberOfDisplayedMovies).map((movie, i) => {
          return  <MoviesCard
                    key={props.isSavedMoviesDirectory ? movie._id : movie.id}
                    movie={movie}
                    deleteMovie={props.deleteMovie}
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
      <button onClick={props.handleForMoreButton}
        className="movies-card-section__more-button">
          Ещё
      </button>
      }
    </section>
  );
};

export default MoviesCardSection;
