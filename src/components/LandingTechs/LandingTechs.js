import './LandingTechs.css';

function LandingTechs() {
  return (
    <section id="techs" className="landing-techs">
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
        <ul className="landing-techs__subblock-techs">
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              HTML
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              CSS
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              JS
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              React
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              Git
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              Express.js
            </span>
          </li>
          <li className="landing-techs__tech-item">
            <span className="landing-techs__tech-item-note">
              mongoDB
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LandingTechs;
