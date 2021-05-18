// import movieApi from '../../utils/MovieApi';
import './MovieSearch.css';

function MovieSearch(props) {

  function handleSearchString(evt) {
    props.handleSearchString(evt);
    // const string = evt.target.value;
    // props.setSearchStringState(string);
  };


  function handleSearchCheckbox(evt) {
    props.handleSearchCheckbox(evt);
    // const checkbox = evt.target.checked;
    // console.log(checkbox);
    // props.setIsShortState(checkbox);
  };


  function handleSubmit(evt) {
    props.handleSubmit(evt)
    // e.preventDefault();
    // console.log('отправка запроса всех фильмов');
    // props.setPreloaderOnState();
    // movieApi.getMovies()
    //   .then((res) => {
    //     // надо пропустить фильмы через нормализатор
    //     console.log(res);
    //     props.setMoviesState(res);
    //     props.setIsSearchRunStateOnTrue();
    //   })
    //   .catch((err) => {console.log(err)})
    //   .finally(() => {props.resetPreloaderOnState()})
  };

  return(
    <section className="movie-search">
      <form onSubmit={handleSubmit} className="movie-search__form">
        <fieldset className="movie-search__fieldset">
          <input onChange={handleSearchString} value={props.searchString} className="movie-search__input" placeholder="Фильм" required></input>
          <button type="submit" className="movie-search__submit"></button>
        </fieldset>
        <label htmlFor="short-movies" className="movie-search__checkbox-label">
          <input onClick={handleSearchCheckbox} checked={props.isShort} type="checkbox" id="short-movies" className="movie-search__checkbox"></input>
          <span className="movie-search__checkbox-custom"></span>
          {/* Короткометражки */}
        </label>
      </form>
    </section>
  );
};

export default MovieSearch;