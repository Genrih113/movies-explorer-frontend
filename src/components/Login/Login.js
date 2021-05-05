import './Login.css';

function Login() {
  return(
    <section className="login">
      <div className="login__logo"></div>
      <span className="login__greeting-text">Рады видеть!</span>
      <form className="login__form">
        <div className="login__input-zone">
          <label className="login__input-label">E-mail</label>
          <input className="login__input"></input>
          <span className="login__input-error-message"></span>
        </div>
        <div className="login__input-zone">
          <label className="login__input-label">Пароль</label>
          <input className="login__input"></input>
          <span className="login__input-error-message">Что-то пошло не так...</span>
        </div>
        <button className="login__submit-button">Войти</button>
      </form>
      <span className="login__signin-invite">
        <span className="login__signin-text">
          Ещё не зарегистрированы?
        </span>
        <a href="#" className="login__signin-link">Регистрация</a>
      </span>
    </section>
  )
}

export default Login;
