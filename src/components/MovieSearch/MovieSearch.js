import React from 'react';
import './MovieSearch.css';

function MovieSearch(props) {

  // этот эффект нужен для корректной работы скрытия спан-сообщения под инпутом
  React.useEffect(() => {
    props.setIsSearchTryToStart(false);
  }, []);

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
      <form onSubmit={handleSubmit} className="movie-search__form" noValidate>
        <fieldset className="movie-search__fieldset">
          <input onChange={handleSearchString} value={props.searchString}
            className="movie-search__input" name="movieName" placeholder="Фильм" required>
          </input>
          {
            props.isSearchTryToStart && (props.searchString === '') &&
            <span className="movie-search__input-error-message">Нужно ввести ключевое слово.</span>
          }
          <button type="submit" className="movie-search__submit"></button>
        </fieldset>
        <label htmlFor="short-movies" className="movie-search__checkbox-label">
          <input onChange={handleSearchCheckbox} checked={props.isShort}
            type="checkbox" id="short-movies" className="movie-search__checkbox">
          </input>
          <span className="movie-search__checkbox-custom"></span>
        </label>
      </form>
    </section>
  );
};

export default MovieSearch;