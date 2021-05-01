import './LandingStudent.css';

import studentPhoto from '../../images/student_512h.jpg';
import linkArrow from '../../images/link-arrow.svg';

function LandingStudent() {
  return (
    <section id="student" className="landing-student">
      <div className="landing-student__title-block">
        <h2 className="landing-student__title">Студент</h2>
      </div>
      <div className="landing-student__info-block">
        <div className="landing-student__info-text">
          <h3 className="landing-student__info-name">Геннадий</h3>
          <p className="landing-student__info-status">
            Фронтенд-разработчик, 33 годика
          </p>
          <p className="landing-student__info-about">
            Я родился и живу в Чебоксарах, закончил факультет радиотехники ЧГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2013 года работал в компании «Чувашский ЦСМ».
            Ушёл с постоянной работы чтобы менять мир к лучшему). Как пройду курс
            по веб-разработке- начну заниматься фриланс-заказами и стартапами.
          </p>
          <ul className="landing-student__info-socials">
            <li className="landing-student__info-socials-item">
              <a href="" className="landing-student__info-socials-link">Facebook</a>
            </li>
            <li className="landing-student__info-socials-item">
              <a href="" className="landing-student__info-socials-link">Github</a>
            </li>
          </ul>
        </div>
        <img src={studentPhoto} className="landing-student__info-photo"></img>
      </div>
      <div className="landing-student__portfolio">
        <h3 className="landing-student__portfolio-title">Портфолио</h3>
        <ul className="landing-student__portfolio-list">

          <li className="landing-student__portfolio-item">
            <a href="" className="landing-student__portfolio-link">
              <span>Статичный сайт</span>
              <span>↗</span>
              {/* <img src={linkArrow} className="landing-student__portfolio-link-img"></img> */}
            </a>
          </li>
          <li className="landing-student__portfolio-item">
            <a href="" className="landing-student__portfolio-link">
              <span>Адаптивный сайт</span>
              <span>↗</span>
              {/* <img src={linkArrow} className="landing-student__portfolio-link-img"></img> */}
            </a>
          </li>
          <li className="landing-student__portfolio-item">
            <a href="" className="landing-student__portfolio-link">
              <span>Одностраничное приложение</span>
              <span>↗</span>
              {/* <img src={linkArrow} className="landing-student__portfolio-link-img"></img> */}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LandingStudent;
