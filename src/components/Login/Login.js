import {Link} from 'react-router-dom';
import './Login.css';
import {useFormWithValidation} from '../../hooks/useFormWithValidation';

import logo from '../../images/logo.svg';

function Login(props) {

  const {values, errors, isFormValid, handleInputChange} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signIn(values.userEmail, values.userPassword);
  }

  return(
    <section className="login">
      <Link to="/" className="login__logo-link">
        <img src={logo} className="login__logo-img" alt="логотип"></img>
      </Link>
      <span className="login__greeting-text">Рады видеть!</span>
      <form className="login__form" name="signinForm" onSubmit={handleSubmit} noValidate>
        <div className="login__input-zone">
          <label className="login__input-label">E-mail</label>
          <input onChange={handleInputChange} value={values.userEmail}
            className={`login__input ${errors.userEmail && 'login__input_invalid'}`}
            name="userEmail" type="email" required>
          </input>
          <span className="login__input-error-message">{errors.userEmail}</span>
        </div>
        <div className="login__input-zone">
          <label className="login__input-label">Пароль</label>
          <input onChange={handleInputChange} value={values.userPassword}
            className={`login__input ${errors.userPassword && 'login__input_invalid'}`}
            name="userPassword" type="password" minLength="4" required>
          </input>
          <span className="login__input-error-message">{errors.userPassword}</span>
        </div>
        <button disabled={!isFormValid}
          className={`login__submit-button ${!isFormValid && 'login__submit-button_disable'}`}
          type="submit" aria-label="Войти">
            Войти
        </button>
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
