import NormalizeMovie from '../../utils/NormalizeMovie';
import './MoviesCard.css';

function MoviesCard(props) {

  //console.log(`https://api.nomoreparties.co${props.movie.image.url} ${props.movie.id}`);
  // let imgSrc = props.isSavedMoviesDirectory
  //   ? props.movie.image
  //   : (props.movie.image
  //       ? `https://api.nomoreparties.co${props.movie.image.url}`
  //       : '');

  const movie = (
    props.isSavedMoviesDirectory
    ? props.movie
    : NormalizeMovie(props.movie, props.savedMovieId, 'https://api.nomoreparties.co')
  );

  function transformMinsToHoursWithMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  return(
    <li>
      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <span className="movies-card__name">{movie.nameRU}</span>
            <span className="movies-card__duration">{transformMinsToHoursWithMins(movie.duration)}</span>
          </div>
          {!props.isSavedMoviesDirectory && !props.isLiked &&
          <button onClick={() => {props.addMovie(movie)}} className="movies-card__button"></button>
          }
          {!props.isSavedMoviesDirectory && props.isLiked &&
          <button onClick={() => {props.deleteMovie(movie)}} className="movies-card__button movies-card__button_like"></button>
          }
          {props.isSavedMoviesDirectory &&
          <button onClick={() => {props.deleteMovie(props.movie)}}
          className="movies-card__button movies-card__button_delete"></button>
          }
        </div>
        <div className="movies-card__poster-container">
          <a href={movie.trailer} target="_blank" rel="noreferrer">
          <img src={movie.image} alt="постер" className="movies-card__poster"></img>
          </a>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
