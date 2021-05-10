import {useHistory} from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {
  // props.hideHeaderAndFooter();
  const history = useHistory();

  return(
    <section className="not-found">
      <div className="not-found__message">
        <span className="not-found__message-status">404</span>
        <span className="not-found__message-text">Страница не найдена</span>
      </div>
      <button onClick={history.goBack} className="not-found__back-button">Назад</button>
    </section>
  );
};

export default NotFound;
