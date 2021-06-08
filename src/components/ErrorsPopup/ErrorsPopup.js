import './ErrorsPopup.css';

function ErrorsPopup(props) {

  function handleButtonClick() {
    props.setMessageForErrorsPopup('');
  }

  return(
    <div className="errors-popup">
      <div className="errors-popup__infoblock">
        <span className="errors-popup__message">{props.messageForErrorsPopup}</span>
        <button onClick={handleButtonClick} className="errors-popup__button" type="button">Понятно</button>
      </div>
    </div>
  )
}

export default ErrorsPopup;