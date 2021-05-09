import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';

function SavedMovies() {
  return(
    <>
      <MovieSearch />

      <MoviesCardSection
        isSavedMoviesDirectory={true}
      />
    </>
  );
};

export default SavedMovies;
