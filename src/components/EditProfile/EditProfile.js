import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import {useFormWithValidation} from '../../hooks/useFormWithValidation';
import './EditProfile.css';


function EditProfile(props) {

  const user = React.useContext(CurrentUserContext);


  const {values, errors, isFormValid, handleInputChange} = useFormWithValidation();


  function handleSubmit(e) {
    e.preventDefault();
    if (!values.userName || !values.userEmail || (values.userName === user.name && values.userEmail === user.email)) {
      return;
    }
    props.patchUser({name: values.userName, email: values.userEmail});
  }

  return(
    <section className="edit-profile">
      <span className="edit-profile__greeting">Привет, {user.name}!</span>
      <form onSubmit={handleSubmit} className="edit-profile__form" name="userProfileEditForm" noValidate>
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">Имя</label>
          <input onChange={handleInputChange} value={values.userName}
            className="edit-profile__input"
            placeholder={`текущее имя: ${user.name}`}
            name="userName" type="text"
            minLength="2" maxLength="30" required></input>
        </div>
        <span className="edit-profile__input-error-message">{errors.userName}</span>
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">E&#8209;mail</label>
          <input onChange={handleInputChange} value={values.userEmail} className="edit-profile__input"
            placeholder={`текущая почта: ${user.email}`}
            name="userEmail" type="email" required></input>
        </div>
        <span className="edit-profile__input-error-message">{errors.userEmail && 'введите корректную почту, пожалуйста'}</span>
        <button className="edit-profile__edit-button"
          type="submit" aria-label="Редактировать">
            Редактировать
        </button>
        {false &&
        <button disabled={!isFormValid} className="edit-profile__submit-button"
          type="submit" aria-label="Сохранить">
            Сохранить
        </button>
        }
      </form>
      <button onClick={props.logOut} className="edit-profile__logout-button">Выйти из аккаунта</button>
    </section>
  );
};

export default EditProfile;
