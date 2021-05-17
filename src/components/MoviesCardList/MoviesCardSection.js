import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardSection(props) {

  let savedMovieId;

  return (
    <section className="movies-card-section">
      <ul className="movies-card-section__list">
        {props.movies.map((movie, i) => {
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
      {!props.isSavedMoviesDirectory &&
      <button className="movies-card-section__more-button">Ещё</button>
      }
    </section>
  );
};

export default MoviesCardSection;
