import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch, useHistory} from 'react-router-dom';
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
import mainApi from '../../utils/MainApi';

function App() {

  const history = useHistory();

  // сигнап в сервис
  function signUp(name, email, password) {
    mainApi.signup(name, email, password)
      .then((res) => {
        console.log('регистрация удалась');
        // switchIsSignSuccessfulOnTrue();
        // switchIsTriedToSignOnTrue();
      })
      .catch((err) => {
        console.log('регистрация не удалась');
        // switchIsSignFailedOnTrue();
        // switchIsTriedToSignOnTrue();
      })
  };


  // сигнин в сервис
  function signIn(email, password) {
    mainApi.signin(email, password)
    .then((res) => {
      localStorage.setItem('token', (res.token));
      // logIn();
      history.push('/movies');
    })
    .catch((err) => {
      console.log(err);
      // switchIsSignFailedOnTrue();
      // switchIsTriedToSignOnTrue();
    })
  };


  // получение профиля юзера- имени и почты
  const [user, setUser] = React.useState({});
  function setUserInfo(userInfo) {
    setUser(userInfo);
  };
  React.useEffect(() => {
    mainApi.getUserInfo('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdmNTI2Y2RiZjk4ZDM5OWM3YmM2OTkiLCJpYXQiOjE2MjA5MzcxMjIsImV4cCI6MTYyMTU0MTkyMn0.9z6cnvNsCVI9UNHD9COMzKLlfMvSv8_flib8IF3tWtc')
      .then(res => {
        setUserInfo({name: res.name, email: res.email});
      })
      .catch(err => console.log(err))
  }, []);
  console.log(user);


  // управление сайдбар-меню
  const [isAsideMenuOpen, setIsAsideMenuOpen] = React.useState(false);
  function closeAsideMenu() {
    setIsAsideMenuOpen(false)
  };
  function openAsideMenu() {
    setIsAsideMenuOpen(true);
  };


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
          <EditProfile user={user} />
        </Route>

        <Route path='/signup'>
          <Registrate signUp={signUp} />
        </Route>

        <Route path='/signin'>
          <Login signIn={signIn} />
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
