import React from 'react';


import './EditProfile.css';

function EditProfile(props) {

  return(
    <section className="edit-profile">
      <span className="edit-profile__greeting">Привет, Виталий!</span>
      <form className="edit-profile__form" name="userProfileEditForm">
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">Имя</label>
          <input className="edit-profile__input"
            placeholder={props.user.name} name="userName" type="text" required></input>
        </div>
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">E&#8209;mail</label>
          <input className="edit-profile__input"
            placeholder={props.user.email} name="userEmail" type="email" required></input>
        </div>
        <button className="edit-profile__edit-button"
          type="button" aria-label="Редактировать">
            Редактировать
        </button>
        {false &&
        <button className="edit-profile__submit-button"
          type="submit" aria-label="Сохранить">
            Сохранить
        </button>
        }
      </form>
      <button className="edit-profile__logout-button">Выйти из аккаунта</button>
    </section>
  );
};

export default EditProfile;
