import './MoviesCard.css';

function MoviesCard(props) {
  return(
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <span className="movies-card__name">С легким паром!</span>
          <span className="movies-card__duration">1ч 45м</span>
        </div>
        <button className="movies-card__favorite movies-card__favorite_true"></button>
      </div>
      <div className="movies-card__poster-container">
        <img src={props.poster} alt="постер" className="movies-card__poster"></img>
      </div>
    </div>
  );
};

export default MoviesCard;
