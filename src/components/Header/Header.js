import React from 'react';

import './Header.css';

import profileIcon from '../../images/profile-icon.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      {false&&
        <ul className="header__menu header__navigation-menu">
          <li className="header__menu-item header__navigation-menu-item">
            <a href="" className="header__menu-item-link">Фильмы</a>
          </li>
          <li className="header__menu-item header__navigation-menu-item">
            <a href="" className="header__menu-item-link">Сохраненные фильмы</a>
          </li>
        </ul>
      }
      {true &&
        <ul className="header__menu header__profile-menu">
          <li className="header__menu-item header__navigation-menu-item">
            <a href="" className="header__menu-item-link">Регистрация</a>
          </li>
          <li className="header__menu-item header__navigation-menu-item">
            <a href="" className="header__menu-item-link"><button className="header__menu-button">Войти</button></a>
          </li>
        </ul>
      }
      {false &&
        <a href="" className="header__menu header__menu-item header__menu-item-link">
          Аккаунт
          <img src={profileIcon} className="header__menu-item-icon"/>
        </a>
      }
      {false &&
        <button className="header__menu-open-button"></button>
      }
    </header>
  );
};

export default Header;
