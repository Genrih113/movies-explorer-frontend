import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';

function SavedMovies(props) {
  return(
    <>
      <MovieSearch />

      <MoviesCardSection
        isSavedMoviesDirectory={true}
        movies={props.savedMovies}
        deleteMovie={props.deleteMovie}
      />
    </>
  );
};

export default SavedMovies;
