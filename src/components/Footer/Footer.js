import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <div className="footer__title-block">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
      </div>
      <div className="footer__info">
        <span className="footer__copyright">&copy; 2021</span>
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a href="" className="footer__menu-link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="" className="footer__menu-link">
              Github
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="" className="footer__menu-link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
