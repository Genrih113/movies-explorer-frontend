import React from 'react';
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
import movieApi from '../../utils/MovieApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedFromUnauthRoute from '../ProtectedFromUnauthRoute/ProtectedFromUnauthRoute';
import ProtectedFromAuthRoute from '../ProtectedFromAuthRoute/ProtectedFromAuthRoute';
import ErrorsPopup from '../ErrorsPopup/ErrorsPopup';


function App() {

  const history = useHistory();


  // стейт с информацией о пользователе
  const [user, setUser] = React.useState({});


  // стейт состояния залогиненности в сервис
  const [isLogged, setIsLogged] = React.useState(Boolean(localStorage.getItem('token')));
  function logIn() {
    setIsLogged(true);
  };
  function logOut() {
    setIsLogged(false);
    localStorage.removeItem('token');
    localStorage.removeItem('lastSearchedMovies');
    setUser({});
    history.push('/');
  };


  // проверка валидности токена при его наличии и установка текущего пользователя
  React.useEffect(() => {
    if (Boolean(localStorage.getItem('token'))) {
      mainApi.checkToken(localStorage.getItem('token'))
      .then((res) => {
        if (res.email) {
          setUser({name: res.name, email: res.email});
          logIn();
        }
      })
      .catch((err) => {
        console.log(err);
        logOut(); // надо сделать так, чтобы при потере связи с бэком токен не удалялся
      })
    }
  }, []);


  // получение профиля юзера- имени и почты
  React.useEffect(() => {
    if (!isLogged) {
      return
    }
    mainApi.getUserInfo(localStorage.getItem('token'))
      .then(res => {
        setUser({name: res.name, email: res.email});
      })
      .catch((err) => {
        console.log(err);
        setMessageForErrorsPopup(
          'Не удалось получить данные пользователя. Попробуйте обновить страницу или вновь выполнить вход.'
        );
      })
  }, [isLogged]);


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
      setMessageForErrorsPopup('Не удалось выполнить вход.');
    })
  };


  // регистрация в сервисе
  function signUp(name, email, password) {
    mainApi.signup(name, email, password)
      .then((res) => {
        console.log('регистрация удалась');
        // history.push('/signin');
        signIn(email, password);
      })
      .catch((err) => {
        console.log(err);
        setMessageForErrorsPopup('Не удалось зарегистрироваться.');
      })
  };


  // изменение данных юзера
  function patchUser({name, email}) {
    mainApi.patchUserInfo(localStorage.getItem('token'), {name, email})
      .then((res) => {
        if (res.email) {
          setUser({name: res.name, email: res.email});
          setMessageForErrorsPopup(
            'Данные пользователя обновлены.'
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setMessageForErrorsPopup(
          'Не удалось обновить данные пользователя. Попробуйте снова чуть позднее.'
        );
      })
  }


  // стейт с фильмами пользователя
  const [savedMovies, setSavedMovies] = React.useState([]);

  // стейт неудачного соединения с API
  const [isSavedMoviesRequestErrored, setIsSavedMoviesRequestErrored] = React.useState(false);


  // запрос карточек с фильмами пользователя
  function requestSavedMovies(token) {
    mainApi.getUserMovies(token)
      .then((res) => {
        setSavedMovies(res);
        setIsSavedMoviesRequestErrored(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSavedMoviesRequestErrored(true);
      })
  }

  React.useEffect(() => {
    if (!isLogged) {
      return;
    }
    requestSavedMovies(localStorage.getItem('token'));
  }, [isLogged])



  // добавление фильма к числу сохраненных фильмов пользователя
  function addMovie(movie) {
    mainApi.postMovie(localStorage.getItem('token'), movie)
      .then((res) => {
        mainApi.getUserMovies(localStorage.getItem('token'))
          .then((res) => {
            setSavedMovies(res);
          })
      })
      .catch((err) => {
        console.log(err);
        setMessageForErrorsPopup('Не удалось добавить в избранное.');
      })
  };


  // удаление фильма из числа сохраненных фильмов пользователя
  function deleteMovie(movie) {
    mainApi.deleteMovie(localStorage.getItem('token'), movie._id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((m) => {return (m._id !== movie._id)});
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
        setMessageForErrorsPopup('Не удалось удалить фильм из избранного.');
      })
  }


  // стейт управления отображением прелоадера
  const [preloaderOn, setPreloaderOn] = React.useState(false);


  // стейт значения поисковой строки
  const [searchString, setSearchString] = React.useState('');


  //стейт состояния чекбокса короткометражек
  const [isShort, setIsShort] = React.useState(false);


  // стейт для запуска поиска фильмов из массива все фильмов
  const [wasSearchRun, setWasSearchRun] = React.useState(false);


  // стейт со всеми фильмами из BeatFilmsApi
  const [movies, setMovies] = React.useState((JSON.parse(localStorage.getItem('lastSearchedMovies')) || []));


  // стейт состояния запроса фильмов
  const [isMoviesRequestErrored, setIsMoviesRequestErrored] = React.useState(false);


  // функция-хендл изменения поисковой строки
  function handleSearchString(evt) {
    const string = evt.target.value;
    setSearchString(string);
  };


  // функция-хендл отметки чекбокса формы поиска
  function handleSearchCheckbox(evt) {
    const checkbox = evt.target.checked;
    setIsShort(checkbox);
  };

  const [isSearchTryToStart, setIsSearchTryToStart] = React.useState(false);


  // функция-хендл сабмита формы поиска
  function handleSubmitInMovies(evt) {
    evt.preventDefault();
    if (searchString === '') {
      return setIsSearchTryToStart(true);
    }
    setPreloaderOn(true);
    movieApi.getMovies()
      .then((res) => {
        let findedMovies = [];
        // findedMovies = res.filter((movie) => {
        //   return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
        // });
        for (let i=0; i < res.length; i++) {
          if (res[i].nameRU) {
            if (res[i].nameRU.toLowerCase().includes(searchString.toString().toLowerCase())) {
            findedMovies.push(res[i]);
          } else if (res[i].nameEN) {
              if (res[i].nameEN.toLowerCase().includes(searchString.toString().toLowerCase())) {
              findedMovies.push(res[i]);
            }}
          }
        }
        localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
        setMovies(findedMovies);
        setSearchString('');
        setWasSearchRun(true);
        setIsMoviesRequestErrored(false);
      })
      .catch((err) => {
        console.log(err);
        setIsMoviesRequestErrored(true);
      })
      .finally(() => {
        setPreloaderOn(false);
        setIsSearchTryToStart(false);
      })
  };
  // конец части логики из Movies



  // логика поиска (отличия) в роуте saved-movies
  const [findedMoviesFromSaved, setFindedMoviesFromSaved] = React.useState(savedMovies);


  React.useEffect(() => {
    setFindedMoviesFromSaved(savedMovies);
  }, [savedMovies]);


  // функция-хендл сабмита формы поиска в роуте saved-movies
  function handleSubmitInSavedMovies(evt) {
    evt.preventDefault();
    let findedMovies = [];
    findedMovies = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
    });
    setFindedMoviesFromSaved(findedMovies);
    setSearchString('');
    setWasSearchRun(true);
  };
  // конец логики поиска в роуте saved-movies



  // управление сайдбар-меню
  const [isAsideMenuOpen, setIsAsideMenuOpen] = React.useState(false);
  function closeAsideMenu() {
    setIsAsideMenuOpen(false)
  };
  function openAsideMenu() {
    setIsAsideMenuOpen(true);
  };

  // управление попапом ошибок
  const [messageForErrorsPopup, setMessageForErrorsPopup] = React.useState('');



  return (
    <CurrentUserContext.Provider value={user} >

      <div className="App">

        <Header
          openAsideMenu = {openAsideMenu}
          isLogged = {isLogged}
        />

        <Switch>

          <Route exact path='/'>
            <Main />
          </Route>

          <ProtectedFromUnauthRoute exact path='/movies'
            component={Movies}
            savedMovies={savedMovies}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            isLogged={isLogged}
            preloaderOn={preloaderOn}
            searchString={searchString}
            isShort={isShort}
            wasSearchRun={wasSearchRun}
            handleSearchString={handleSearchString}
            handleSearchCheckbox={handleSearchCheckbox}
            handleSubmit={handleSubmitInMovies}
            movies={movies}
            isMoviesRequestErrored={isMoviesRequestErrored}
            isSavedMoviesRequestErrored={isSavedMoviesRequestErrored}
            isSearchTryToStart={isSearchTryToStart}
            setIsSearchTryToStart={setIsSearchTryToStart}
          />

          <ProtectedFromUnauthRoute exact path='/saved-movies'
            component={SavedMovies}
            isLogged={isLogged}
            movies={findedMoviesFromSaved}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            wasSearchRun={wasSearchRun}
            searchString={searchString}
            isShort={isShort}
            handleSearchString={handleSearchString}
            handleSearchCheckbox={handleSearchCheckbox}
            handleSubmit={handleSubmitInSavedMovies}
            haveSaves={savedMovies.length}
            isSavedMoviesRequestErrored={isSavedMoviesRequestErrored}
            setIsSearchTryToStart={setIsSearchTryToStart}
          />

          <ProtectedFromUnauthRoute exact path='/profile'
            component={EditProfile}
            isLogged={isLogged}
            logOut={logOut}
            patchUser={patchUser}
          />

          <ProtectedFromAuthRoute exact path='/signup'
            component={Registrate}
            signUp={signUp}
            isLogged={isLogged}
          />

          <ProtectedFromAuthRoute exact path='/signin'
            component={Login}
            signIn={signIn}
            isLogged={isLogged}
          />

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>

        <Footer />

        <AsideMenu
          isAsideMenuOpen = {isAsideMenuOpen}
          closeAsideMenu = {closeAsideMenu}
        />

        {
          messageForErrorsPopup &&
          <ErrorsPopup
            setMessageForErrorsPopup={setMessageForErrorsPopup}
            messageForErrorsPopup={messageForErrorsPopup}
          />
        }

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
