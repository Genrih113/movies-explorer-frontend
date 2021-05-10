import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import studentPhoto from '../../images/student_512h.jpg';
import movie1 from '../../images/movie1.jpg';
import movie2 from '../../images/movie2.jpg';

function MoviesCardSection(props) {
  return (
    <section className="movies-card-section">
      <ul className="movies-card-section__list">
        <li>
          <MoviesCard
            poster={studentPhoto}
            isLiked={false}
            isSavedMoviesDirectory={props.isSavedMoviesDirectory}
          />
        </li>
        <li>
          <MoviesCard
            poster={movie1}
            isLiked={true}
            isSavedMoviesDirectory={props.isSavedMoviesDirectory}
          />
        </li>
        <li>
          <MoviesCard
            poster={movie2}
            isLiked={true}
            isSavedMoviesDirectory={props.isSavedMoviesDirectory}
          />
        </li>
      </ul>
      {!props.isSavedMoviesDirectory &&
      <button className="movies-card-section__more-button">Ещё</button>
      }
    </section>
  );
};

export default MoviesCardSection;
