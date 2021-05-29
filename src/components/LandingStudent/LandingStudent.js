import './LandingStudent.css';

import studentPhoto from '../../images/me.jpg';
// import linkArrow from '../../images/link-arrow.svg';

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
            Фронтенд-разработчик, 33 года.
          </p>
          <p className="landing-student__info-about">
            Я родился в селе Моргауши Моргаушского района Чувашской Республики. Живу в г.Чебоксары.
            Окончил факультет радиотехники ЧГУ, а до этого техникум связи.
            У меня есть жена и дочь. Я люблю слушать музыку, смотреть кино, стараюсь вести ЗОЖ).
            Увлекаюсь наукой и техникой... Ну, вообщем как и все, пожалуй.
            С 2013 года до 2020 работал в компании ФБУ «Чувашский ЦСМ», инженером-метрологом.
            А до этого шесть лет отработал на заводе- занимался ремонтом измерительных приборов.
            Ушёл с предыдущего места работы чтобы менять мир к лучшему).
            Недавно начал кодить. С августа 2020 по май 2021 года учился на веб-разработчика на платформе
            "Яндекс.Практикум". Выбрал это направление поскольку доступ к информации в сети де-факто
            нужен абсолютно всем. А я, живя в обществе, хочу быть полезным ее членом.
          </p>
          <ul className="landing-student__info-socials">
            <li className="landing-student__info-socials-item">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="landing-student__info-socials-link">Facebook</a>
            </li>
            <li className="landing-student__info-socials-item">
              <a href="https://github.com/Genrih113" target="_blank" rel="noreferrer" className="landing-student__info-socials-link">Github</a>
            </li>
          </ul>
        </div>
        <img src={studentPhoto} className="landing-student__info-photo" alt="портрет студента"></img>
      </div>
      <div className="landing-student__portfolio">
        <h3 className="landing-student__portfolio-title">Портфолио</h3>
        <ul className="landing-student__portfolio-list">

          <li className="landing-student__portfolio-item">
            <a href="https://genrih113.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="landing-student__portfolio-link">
              <span>Статичный сайт</span>
              <span>↗</span>
              {/* <img src={linkArrow} className="landing-student__portfolio-link-img"></img> */}
            </a>
          </li>
          <li className="landing-student__portfolio-item">
            <a href="https://genrih113.github.io/russian-travel/" target="_blank" rel="noreferrer" className="landing-student__portfolio-link">
              <span>Адаптивный сайт</span>
              <span>↗</span>
              {/* <img src={linkArrow} className="landing-student__portfolio-link-img"></img> */}
            </a>
          </li>
          <li className="landing-student__portfolio-item">
            <a href="https://genrih113-mesto.nomoredomains.club" target="_blank" rel="noreferrer" className="landing-student__portfolio-link">
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
