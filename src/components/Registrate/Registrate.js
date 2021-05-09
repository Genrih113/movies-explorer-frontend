import {Link} from 'react-router-dom';
import './Registrate.css';

import logo from '../../images/logo.svg';

function Registrate(props) {
  // props.hideHeaderAndFooter();

  return(
    <section className="registrate">
      {/* <div className="registrate__logo"></div> */}
      <Link to="/" className="registrate__logo-link">
        <img src={logo} className="registrate__logo-img" alt="логотип"></img>
      </Link>
      <span className="registrate__greeting-text">Добро пожаловать!</span>
      <form className="registrate__form" name="signupForm">
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Имя</label>
          <input className="registrate__input" name="userName" type="text" required></input>
          <span className="registrate__input-error-message"></span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">E-mail</label>
          <input className="registrate__input" name="userEmail" type="email" required></input>
          <span className="registrate__input-error-message"></span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Пароль</label>
          <input className="registrate__input" name="userPassword" type="password" required></input>
          <span className="registrate__input-error-message">Что-то пошло не так...</span>
        </div>
        <button className="registrate__submit-button" type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <span className="registrate__signin-invite">
        <span className="registrate__signin-text">
          Уже зарегистрированы?
        </span>
        <Link to="/signin" className="registrate__signin-link">Войти</Link>
      </span>
    </section>
  );
};

export default Registrate;
