import './NotFound.css';

function NotFound() {
  return(
    <section className="not-found">
      <div className="not-found__message">
        <span className="not-found__message-status">404</span>
        <span className="not-found__message-text">Страница не найдена</span>
      </div>
      <a href="#" className="not-found__back-link">Назад</a>
    </section>
  );
};

export default NotFound;
