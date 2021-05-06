import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import Preloader from '../Preloader/Preloader';

function Movies() {
  return(
    <>
      <MovieSearch />

      <Preloader />

      <MoviesCardSection />
    </>
  );
};

export default Movies;
