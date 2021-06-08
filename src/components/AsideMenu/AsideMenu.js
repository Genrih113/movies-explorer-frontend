import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './AsideMenu.css';
import profileIcon from '../../images/profile-icon.svg';

function AsideMenu(props) {
  return(
    <div onClick={props.closeAsideMenu} className={`aside-menu ${props.isAsideMenuOpen && 'aside-menu_on'}`}>
      <div className="aside-menu__panel">
        <button onClick={props.closeAsideMenu} className="aside-menu__close-button">&times;</button>
        <nav className="aside-menu__navigation">
          <ul className="aside-menu__links-list">
            <li className="aside-menu__links-list-item">
              <NavLink to="/" exact onClick={props.closeAsideMenu}
                className="aside-menu__link"
                activeClassName="aside-menu__link_current-location">
                  Главная
              </NavLink>
            </li>
            <li className="aside-menu__links-list-item">
              <NavLink to="/movies" onClick={props.closeAsideMenu}
                className="aside-menu__link"
                activeClassName="aside-menu__link_current-location">
                  Фильмы
              </NavLink>
            </li>
            <li className="aside-menu__links-list-item">
              <NavLink to="/saved-movies" onClick={props.closeAsideMenu}
                className="aside-menu__link"
                activeClassName="aside-menu__link_current-location">
                  Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/profile" onClick={props.closeAsideMenu}
          className="aside-menu__profile-link">
            Аккаунт
          <img src={profileIcon} className="aside-menu__profile-icon" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AsideMenu;
