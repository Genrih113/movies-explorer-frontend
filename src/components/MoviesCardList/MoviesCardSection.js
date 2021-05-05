import './MoviesCardSection.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import studentPhoto from '../../images/student_512h.jpg';
import movie1 from '../../images/movie1.jpg';
import movie2 from '../../images/movie2.jpg';

function MoviesCardSection() {
  return (
    <section className="movies-card-section">
      <ul className="movies-card-section__list">
        <li><MoviesCard poster={studentPhoto} /></li>
        <li><MoviesCard poster={movie1}/></li>
        <li><MoviesCard poster={movie2}/></li>
      </ul>
      <button className="movies-card-section__more-button">Ещё</button>
    </section>
  );
};

export default MoviesCardSection;
