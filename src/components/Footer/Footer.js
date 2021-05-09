import {useLocation} from 'react-router-dom';
import './Footer.css';

function Footer() {

  const {pathname} = useLocation();

  return(
    (pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile')  &&
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
            <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__menu-link">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__menu-link">
              Github
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="https://www.facebook.com" target="blank" className="footer__menu-link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
