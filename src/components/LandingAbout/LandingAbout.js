import './LandingAbout.css';

function LandingAbout() {
  return (
    <section id="about" className="landing-about">
      <div className="landing-about__title-block">
        <h2 className="landing-about__title">О проекте</h2>
      </div>
      <div className="landing-about__subblock">
        <div className="landing-about__subblock-card">
          <h3 className="landing-about__subblock-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="landing-about__subblock-description">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="landing-about__subblock-card">
          <h3 className="landing-about__subblock-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="landing-about__subblock-description">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="landing-about__subblock-duration">
        <div className="landing-about__subblock-side landing-about__subblock-side_back">
          <div className="landing-about__subblock-side-bar landing-about__subblock-side-bar_back">
            <span>1 неделя</span>
          </div>
          <span className="landing-about__subblock-side-note">Back-end</span>
        </div>
        <div className="landing-about__subblock-side landing-about__subblock-side_front">
          <div className="landing-about__subblock-side-bar">
            <span>4 недели</span>
          </div>
          <span className="landing-about__subblock-side-note">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
