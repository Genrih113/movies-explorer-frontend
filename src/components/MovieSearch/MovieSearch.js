// import movieApi from '../../utils/MovieApi';
import './MovieSearch.css';

function MovieSearch(props) {

  function handleSearchString(evt) {
    props.handleSearchString(evt);
  };


  function handleSearchCheckbox(evt) {
    props.handleSearchCheckbox(evt);
  };


  function handleSubmit(evt) {
    props.handleSubmit(evt)
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