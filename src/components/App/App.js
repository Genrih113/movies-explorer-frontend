import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import EditProfile from '../EditProfile/EditProfile';
import NotFound from '../NotFound/NotFound';
import Registrate from '../Registrate/Registrate';
import Login from '../Login/Login';
import AsideMenu from '../AsideMenu/AsideMenu';

function App() {

  const [isAsideMenuOpen, setIsAsideMenuOpen] = React.useState(false);

  function closeAsideMenu() {
    setIsAsideMenuOpen(false)
  }

  function openAsideMenu() {
    setIsAsideMenuOpen(true);
  }


  // const [isHeaderAndFooterVisible, setIsHeaderAndFooterVisible] = React.useState(true);

  // function hideHeaderAndFooter() {
  //   setIsHeaderAndFooterVisible(false)
  // }

  // function showHeaderAndFooter() {
  //   setIsHeaderAndFooterVisible(true)
  // }


  return (
    <div className="App">

      <Header
        openAsideMenu = {openAsideMenu}
        isLoggedIn = {true}
      />

      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route path='/profile'>
          <EditProfile />
        </Route>

        <Route path='/signup'>
          <Registrate />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>

      <Footer />

      <AsideMenu
        isAsideMenuOpen = {isAsideMenuOpen}
        closeAsideMenu = {closeAsideMenu}
      />
    </div>
  );
}

export default App;
