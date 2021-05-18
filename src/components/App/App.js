import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
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
// import movieApi from '../../utils/MovieApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {

  const history = useHistory();


  // стейт с информацией о пользователе
  const [user, setUser] = React.useState({});
  function setUserInfo(userInfo) {
    setUser(userInfo);
  };



  // регистрация в сервисе
  function signUp(name, email, password) {
    mainApi.signup(name, email, password)
      .then((res) => {
        console.log('регистрация удалась');
      })
      .catch((err) => {
        console.log('регистрация не удалась');
      })
  };



  // стейт состояния залогиненности в сервис
  const [isLogged, setIsLogged] = React.useState(Boolean(localStorage.getItem('isLogged')));
  function logIn() {
    setIsLogged(true);
    localStorage.setItem('isLogged', true);
  };
  function logOut() {
    setIsLogged(false);
    localStorage.removeItem('token');
    localStorage.removeItem('isLogged');
    setUserInfo({});
    history.push('/');
  };



  // проверка валидности токена при его наличии и установка текущего пользователя
  React.useEffect(() => {
    if (Boolean(localStorage.getItem('token'))) {
      console.log('отправка запроса проверки токена (и получение юзера)');
      mainApi.checkToken(localStorage.getItem('token'))
      .then((res) => {
        if (res.email) {
          setUserInfo({name: res.name, email: res.email});
          logIn();
        }
      })
      .catch((err) => {
        console.log(err);
        logOut();
      })
    }
  }, []);
  console.log(user);


  // получение профиля юзера- имени и почты
  // React.useEffect(() => {
  //   if (!isLogged) {
  //     return
  //   }
  //   console.log('запрос юзера');
  //   mainApi.getUserInfo(localStorage.getItem('token'))
  //     .then(res => {
  //       setUserInfo({name: res.name, email: res.email});
  //     })
  //     .catch(err => console.log(err))
  // }, [isLogged]);



  // вход в сервис
  function signIn(email, password) {
    mainApi.signin(email, password)
    .then((res) => {
      localStorage.setItem('token', (res.token));
      logIn();
      history.push('/movies');
    })
    .catch((err) => {
      console.log(err);
    })
  };



  // изменение данных юзера
  function patchUser({name, email}) {
    mainApi.patchUserInfo(localStorage.getItem('token'), {name, email})
      .then((res) => {
        if (res.email) {
          setUserInfo({name: res.name, email: res.email});
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }


  // стейт с фильмами пользователя
  const [savedMovies, setSavedMovies] = React.useState([]);
  function setSavedMoviesState(movies) {
    setSavedMovies(movies);
  };
  // function clearSavedMoviesState() {
  //   setSavedMovies({});
  // };



  // запрос карточек с фильмами пользователя
  React.useEffect(() => {
    if (!isLogged) {
      return;
    }
    console.log('отправка запроса сохраненных фильмов');
    mainApi.getUserMovies(localStorage.getItem('token'))
      .then((res) => {
        setSavedMoviesState(res);
      })
      .catch((err) => {console.log(err);})
  }, [])



  // добавление фильма к числу сохраненных фильмов пользователя
  function addMovie(movie) {
    console.log(movie);
    mainApi.postMovie(localStorage.getItem('token'), movie)
      .then((res) => {
        // const newSavedMovies = savedMovies;
        // newSavedMovies.push(movie);
        // setSavedMoviesState(newSavedMovies);
        mainApi.getUserMovies(localStorage.getItem('token'))
          .then((res) => {
            setSavedMoviesState(res);
          })
      })
      .catch((err) => {console.log(err)})
  };



  // удаление фильма из числа сохраненных фильмов пользователя
  function deleteMovie(movie) {
    mainApi.deleteMovie(localStorage.getItem('token'), movie._id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((m) => {return (m._id !== movie._id)});
        setSavedMoviesState(newSavedMovies);
      })
      .catch((err) => {console.log(err);})
  }



  // перенесено в Movie стейт со всеми фильмами из BeatFilmsApi
  // const [movies, setMovies] = React.useState([]);
  // function setMoviesState(allMovies) {
  //   setMovies(allMovies);
  // }



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
      <CurrentUserContext.Provider value={user} >
        <Header
          openAsideMenu = {openAsideMenu}
          isLogged = {isLogged}
        />

        <Switch>

          <Route exact path='/'>
            <Main />
          </Route>

          <Route path='/movies'>
            {isLogged
              ? <Movies
                  // movies={movies}
                  // setMoviesState={setMoviesState}

                  savedMovies={savedMovies}
                  addMovie={addMovie}
                  deleteMovie={deleteMovie}
                />
              : <Redirect to='/' />
            }
          </Route>

          <Route path='/saved-movies'>
            {isLogged
              ? <SavedMovies
                  savedMovies={savedMovies}
                  deleteMovie={deleteMovie}
                />
              : <Redirect to='/' />
            }
          </Route>

          <Route path='/profile'>
            {isLogged
              ? <EditProfile logOut={logOut} patchUser={patchUser} />
              : <Redirect to='/' />
            }
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
