import movieApi from '../../utils/MovieApi';
import './MovieSearch.css';

function MovieSearch(props) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('отправка запроса всех фильмов');
    props.setPreloaderOnState();
    movieApi.getMovies()
      .then((res) => {
        // надо пропустить фильмы через нормализатор
        console.log(res);
        props.setMoviesState(res);
      })
      .catch((err) => {console.log(err)})
      .finally(() => {props.resetPreloaderOnState()})
  };

  return(
    <section className="movie-search">
      <form onSubmit={handleSubmit} className="movie-search__form">
        <fieldset className="movie-search__fieldset">
          <input onChange={props.handleSearchString} value={props.searchString} className="movie-search__input" placeholder="Фильм" required></input>
          <button type="submit" className="movie-search__submit"></button>
        </fieldset>
        <label htmlFor="short-movies" className="movie-search__checkbox-label">
          <input type="checkbox" id="short-movies" className="movie-search__checkbox"></input>
          <span className="movie-search__checkbox-custom"></span>
          {/* Короткометражки */}
        </label>
      </form>
    </section>
  );
};

export default MovieSearch;