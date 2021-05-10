import './LandingTechs.css';

function LandingTechs() {
  return (
    <section className="landing-techs">
      <div className="landing-techs__title-block">
        <h2 className="landing-techs__title">Технологии</h2>
      </div>
      <div className="landing-techs__subblock">
        <h3 className="landing-techs__subblock-title">
          7 технологий
        </h3>
        <p className="landing-techs__subblock-description">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
      </div>
      <div className="landing-techs__subblock">
        <div className="landing-techs__subblock-techs">
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
          <div className="landing-techs__tech-item"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingTechs;
