import {Link} from 'react-router-dom';
import './Login.css';

import logo from '../../images/logo.svg';

function Login(props) {
  // props.hideHeaderAndFooter();

  return(
    <section className="login">
      {/* <div className="login__logo"></div> */}
      <Link to="/" className="login__logo-link">
        <img src={logo} className="login__logo-img" alt="логотип"></img>
      </Link>
      <span className="login__greeting-text">Рады видеть!</span>
      <form className="login__form" name="signinForm">
        <div className="login__input-zone">
          <label className="login__input-label">E-mail</label>
          <input className="login__input" name="userEmail" type="email" required></input>
          <span className="login__input-error-message"></span>
        </div>
        <div className="login__input-zone">
          <label className="login__input-label">Пароль</label>
          <input className="login__input" name="userPassword" type="password" required></input>
          <span className="login__input-error-message">Что-то пошло не так...</span>
        </div>
        <button className="login__submit-button" type="submit" aria-label="Войти">Войти</button>
      </form>
      <span className="login__signin-invite">
        <span className="login__signin-text">
          Ещё не зарегистрированы?
        </span>
        <Link to="/signup" className="login__signin-link">Регистрация</Link>
      </span>
    </section>
  )
}

export default Login;
