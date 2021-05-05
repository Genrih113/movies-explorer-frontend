import './EditProfile.css';

function EditProfile() {
  return(
    <section className="edit-profile">
      <span className="edit-profile__greeting">Привет, Виталий!</span>
      <form className="edit-profile__form">
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">Имя</label>
          <input className="edit-profile__input"></input>
        </div>
        <div className="edit-profile__input-zone">
          <label className="edit-profile__input-label">E&#8209;mail</label>
          <input className="edit-profile__input"></input>
        </div>
        <button className="edit-profile__edit-button">Редактировать</button>
        {false && <button className="edit-profile__submit-button">Сохранить</button>}
      </form>
      <a href="#" className="edit-profile__logout-link">Выйти из аккаунта</a>
    </section>
  );
};

export default EditProfile;
