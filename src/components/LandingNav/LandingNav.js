import './LandingNav.css';

function LandingNav() {
  return (
    <nav className="landing-nav">
      <ul className="landing-nav__menu">
        <li className="landing-nav__menu-item">
          <a href="#about" className="landing-nav__menu-item-link">
            О проекте
          </a>
        </li>
        <li className="landing-nav__menu-item">
          <a href="#techs" className="landing-nav__menu-item-link">
            Технологии
          </a>
        </li>
        <li className="landing-nav__menu-item">
          <a href="#student" className="landing-nav__menu-item-link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNav;