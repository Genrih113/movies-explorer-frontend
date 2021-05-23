import React from 'react';

import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';

function SavedMovies(props) {
  return(
    <>
      <MovieSearch
        searchString={props.searchString}
        isShort={props.isShort}
        handleSearchString={props.handleSearchString}
        handleSearchCheckbox={props.handleSearchCheckbox}
        handleSubmit={props.handleSubmit}
      />

      <MoviesCardSection
        isSavedMoviesDirectory={true}
        movies={props.movies}
        deleteMovie={props.deleteMovie}
        isShort={props.isShort}
        wasSearchRun={props.wasSearchRun}
        haveSaves={props.haveSaves}
        isSavedMoviesRequestErrored={props.isSavedMoviesRequestErrored}
      />
    </>
  );
};

export default SavedMovies;
