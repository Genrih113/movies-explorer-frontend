import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import './Header.css';

import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile-icon.svg';

function Header(props) {

  const {pathname} = useLocation();

  return (
    (pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile')  &&
    <header className={`header ${(pathname === '/')&&'header_on-main'}`}>
      {/* <div className="header__logo"></div> */}
      <Link to="/">
        <img src={logo} className="header__logo" alt="логотип"></img>
      </Link>
      {pathname === '/' && !props.isLoggedIn &&
        <ul className="header__menu header__profile-menu">
          <li className="header__menu-item header__navigation-menu-item">
            <Link to="/signup" className="header__menu-item-link">Регистрация</Link>
          </li>
          <li className="header__menu-item header__navigation-menu-item">
            <Link to="/signin" className="header__menu-item-link"><button className="header__menu-button">Войти</button></Link>
          </li>
        </ul>
      }
      {props.isLoggedIn &&
      <>
        <ul className="header__menu header__navigation-menu">
          <li className="header__menu-item header__navigation-menu-item">
            <NavLink to="/movies" className="header__menu-item-link">Фильмы</NavLink>
          </li>
          <li className="header__menu-item header__navigation-menu-item">
            <NavLink to="/saved-movies" className="header__menu-item-link">Сохраненные фильмы</NavLink>
          </li>
        </ul>


        <Link to="/profile" className="header__menu header__menu-item header__menu-item-link header__profile-link">
          Аккаунт
          <img src={profileIcon} className="header__menu-item-icon" alt="" />
        </Link>


        <button onClick={props.openAsideMenu} className="header__menu-open-button"></button>
      </>
      }
    </header>

  );
};

export default Header;
