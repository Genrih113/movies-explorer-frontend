import './MoviesCard.css';

function MoviesCard(props) {
  return(
    <li>
      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <span className="movies-card__name">{props.movie.name}</span>
            <span className="movies-card__duration">1ч 45м</span>
          </div>
          {!props.isSavedMoviesDirectory && !props.isLiked &&
          <button className="movies-card__button"></button>
          }
          {!props.isSavedMoviesDirectory && props.isLiked &&
          <button className="movies-card__button movies-card__button_like"></button>
          }
          {props.isSavedMoviesDirectory &&
          <button onClick={() => {props.deleteMovie(props.movie)}} className="movies-card__button movies-card__button_delete"></button>
          }
        </div>
        <div className="movies-card__poster-container">
          <img src={props.movie.image} alt="постер" className="movies-card__poster"></img>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
