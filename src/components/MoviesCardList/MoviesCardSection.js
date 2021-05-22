import React from 'react';
import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardSection(props) {

  // переменная для _id mongoDB, нужна для возможности удаления (дизлайка) карточки,
  // добавится в объект фильма в компоненте MoviesCard
  let savedMovieId;


  const [movies, setMovies] = React.useState(props.movies);


  React.useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);


  React.useEffect(() => {
    if (!props.isShort) {
      setMovies(props.movies);
    } else {
      setMovies(props.movies.filter(movie => movie.duration <= 40));
    }
  }, [props.isShort]);


  return (
    <section className="movies-card-section">
      {/* нужна проверка наличия результатов поиска, при не первой отрисовке */}
      {((movies.length === 0) && props.wasSearchRun)
      ?
      <span className="movies-card-section__no-results">Ничего не найдено. Попробуйте поискать что-нибудь еще.</span>
      :
      <ul className="movies-card-section__list">
        {movies
          .slice(0, props.numberOfDisplayedMovies)
          .map((movie, i) => {
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
      }
      {!props.isSavedMoviesDirectory && props.numberOfDisplayedMovies < movies.length &&
        <button onClick={props.handleForMoreButton}
          className="movies-card-section__more-button">
            Ещё
        </button>
      }
    </section>
  );
};

export default MoviesCardSection;
