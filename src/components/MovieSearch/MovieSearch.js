import './MovieSearch.css';

function MovieSearch() {
  return(
    <section className="movie-search">
      <form className="movie-search__form">
        <fieldset className="movie-search__fieldset">
          <input className="movie-search__input" placeholder="Фильм" required></input>
          <button className="movie-search__submit"></button>
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