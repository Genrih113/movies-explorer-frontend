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
    : NormalizeMovie(props.movie, 'https://api.nomoreparties.co')
  );

  return(
    <li>
      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <span className="movies-card__name">{movie.nameRU}</span>
            <span className="movies-card__duration">{movie.duration}</span>
          </div>
          {!props.isSavedMoviesDirectory && !props.isLiked &&
          <button className="movies-card__button"></button>
          }
          {!props.isSavedMoviesDirectory && props.isLiked &&
          <button className="movies-card__button movies-card__button_like"></button>
          }
          {props.isSavedMoviesDirectory &&
          <button onClick={() => {props.deleteMovie(props.movie)}}
          className="movies-card__button movies-card__button_delete"></button>
          }
        </div>
        <div className="movies-card__poster-container">
          <img src={movie.image} alt="постер" className="movies-card__poster"></img>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
