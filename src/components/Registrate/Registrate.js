import './Registrate.css';

function Registrate() {
  return(
    <section className="registrate">
      <div className="registrate__logo"></div>
      <span className="registrate__greeting-text">Добро пожаловать!</span>
      <form className="registrate__form">
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Имя</label>
          <input className="registrate__input"></input>
          <span className="registrate__input-error-message"></span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">E-mail</label>
          <input className="registrate__input"></input>
          <span className="registrate__input-error-message"></span>
        </div>
        <div className="registrate__input-zone">
          <label className="registrate__input-label">Пароль</label>
          <input className="registrate__input"></input>
          <span className="registrate__input-error-message">Что-то пошло не так...</span>
        </div>
        <button className="registrate__submit-button">Зарегистрироваться</button>
      </form>
      <span className="registrate__signin-invite">
        <span className="registrate__signin-text">
          Уже зарегистрированы?
        </span>
        <a href="#" className="registrate__signin-link">Войти</a>
      </span>
    </section>
  );
};

export default Registrate;
