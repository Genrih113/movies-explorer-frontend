import React from 'react';
import {Link} from 'react-router-dom';
import {useFormWithValidation} from '../../hooks/useFormWithValidation';
import './Registrate.css';

import logo from '../../images/logo.svg';

function Registrate(props) {

  const {values, errors, isFormValid, handleInputChange} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.signUp(values.userName, values.userEmail, values.userPassword);
  }

  return(
    <section className="registrate">
      {/* <div className="registrate__logo"></div> */}
      <Link to="/" className="registrate__logo-link">
        <img src={logo} className="registrate__logo-img" alt="логотип"></img>
      </Link>
      <span className="registrate__greeting-text">Добро пожаловать!</span>
      <form className="registrate__form" name="signupForm" onSubmit={handleSubmit}>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Имя</label>
          <input onChange={handleInputChange} value={values.userName}
            className="registrate__input" name="userName" type="text" required>
          </input>
          <span className="registrate__input-error-message">{errors.userName}</span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">E-mail</label>
          <input onChange={handleInputChange} value={values.userEmail}
            className="registrate__input" name="userEmail" type="email" required>
          </input>
          <span className="registrate__input-error-message">{errors.userEmail && 'введите корректную почту, пожалуйста'}</span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Пароль</label>
          <input onChange={handleInputChange} value={values.userPassword}
            className="registrate__input" name="userPassword" type="password" required>
          </input>
          <span className="registrate__input-error-message">{errors.userPassword}</span>
        </div>
        <button disabled={!isFormValid}
          className={`registrate__submit-button ${!isFormValid && 'registrate__submit-button_disable'}`} type="submit" aria-label="Зарегистрироваться">
            Зарегистрироваться
        </button>
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
