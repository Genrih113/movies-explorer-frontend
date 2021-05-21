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
import movieApi from '../../utils/MovieApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedFromUnauthRoute from '../ProtectedFromUnauthRoute/ProtectedFromUnauthRoute';
import ProtectedFromAuthRoute from '../ProtectedFromAuthRoute/ProtectedFromAuthRoute';


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
  const [isLogged, setIsLogged] = React.useState(Boolean(localStorage.getItem('token')));
  // const [isLogged, setIsLogged] = React.useState(
  //   if (Boolean(localStorage.getItem('token'))) {
  //     console.log('отправка запроса проверки токена при установке стейта логгед');
  //     mainApi.checkToken(localStorage.getItem('token'))
  //     .then((res) => {return true})
  //     .catch((err) => {return false})
  //   }
  // );
  function logIn() {
    setIsLogged(true);
    // localStorage.setItem('isLogged', true);
  };
  function logOut() {
    setIsLogged(false);
    localStorage.removeItem('token');
    // localStorage.removeItem('isLogged');
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
  }, [isLogged])



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



  // эта часть логики перенесена из Movies для переиспользования в Saved-Movies

  // стейт управления отображением прелоадера
  const [preloaderOn, setPreloaderOn] = React.useState(false);

  function setPreloaderOnState() {
    setPreloaderOn(true);
  };

  function resetPreloaderOnState() {
    setPreloaderOn(false);
  };


  // стейт значения поисковой строки
  const [searchString, setSearchString] = React.useState('');

  function setSearchStringState(string) {
    setSearchString(string);
  };


  //стейт состояния чекбокса короткометражек
  const [isShort, setIsShort] = React.useState(false);

  function setIsShortState(bool) {
    setIsShort(bool);
  };


  // стейт для запуска поиска фильмов из массива все фильмов
  const [isSearchRun, setIsSearchRun] = React.useState(false);

  function setIsSearchRunState(bool) {
    setIsSearchRun(bool);
  };



  // стейт со всеми фильмами из BeatFilmsApi
  const [movies, setMovies] = React.useState((JSON.parse(localStorage.getItem('lastSearchedMovies')) || []));

  function setMoviesState(allMovies) {
    setMovies(allMovies);
  }



  // реализовано в handleSubmitInMovies
  // эффект в котором выполняется поиск соответствующих критериям фильмов
  // React.useEffect(() => {
  //   if (!isSearchRun) {
  //     return
  //   }

  //   let findedMovies = [];

  //   findedMovies = movies.filter((movie) => {
  //     return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
  //   });

  //   if (isShort) {
  //     findedMovies = findedMovies.filter((movie) => {
  //       return movie.duration <= 40;
  //     });
  //   }
  //   localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
  //   setMoviesState(findedMovies);
  //   setIsSearchRunState(false);
  //   setSearchStringState('');
  //   setIsShortState(false);
  // }, [isSearchRun]);



  // функция-хендл изменения поисковой строки
  function handleSearchString(evt) {
    const string = evt.target.value;
    setSearchStringState(string);
  };


  // функция-хендл отметки чекбокса формы поиска
  function handleSearchCheckbox(evt) {
    const checkbox = evt.target.checked;
    console.log(checkbox);
    setIsShortState(checkbox);
  };


  // функция-хендл сабмита формы поиска
  function handleSubmitInMovies(evt) {
    evt.preventDefault();
    console.log('отправка запроса всех фильмов');
    setPreloaderOnState();
    movieApi.getMovies()
      .then((res) => {
        let findedMovies = [];
        findedMovies = res.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
        });
        // if (isShort) {
        //   findedMovies = findedMovies.filter((movie) => {
        //     return movie.duration <= 40;
        //   });
        // }
        localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
        setMoviesState(findedMovies);
        setSearchStringState('');
        // setIsShortState(false);
      })
      .catch((err) => {console.log(err)})
      .finally(() => {resetPreloaderOnState()})
  };
  // конец части логики из Movies



  // логика поиска (отличия) в роуте saved-movies
   const [findedMoviesFromSaved, setFindedMoviesFromSaved] = React.useState(savedMovies);

   function setFindedMoviesFromSavedState(movies) {
     setFindedMoviesFromSaved(movies);
   };


   React.useEffect(() => {
    setFindedMoviesFromSavedState(savedMovies);
   }, [savedMovies]);

  // эффект в котором выполняется поиск сохраненных фильмах
  // React.useEffect(() => {
  //   if (!isSearchRun) {
  //     return
  //   }

  //   let findedMovies = [];

  //   findedMovies = savedMovies.filter((movie) => {
  //     return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
  //   });

  //   if (isShort) {
  //     findedMovies = findedMovies.filter((movie) => {
  //       return movie.duration <= 40;
  //     });
  //   }
  //   localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
  //   setFindedMoviesFromSavedState(findedMovies);
  //   setIsSearchRunState(false);
  //   setSearchStringState('');
  //   setIsShortState(false);
  // }, [isSearchRun]);


  // функция-хендл сабмита формы поиска в роуте saved-movies
  function handleSubmitInSavedMovies(evt) {
    evt.preventDefault();
    // setIsSearchRunState(true);
    let findedMovies = [];
    findedMovies = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchString.toString().toLowerCase());
    });
    // if (isShort) {
    //   findedMovies = findedMovies.filter((movie) => {
    //     return movie.duration <= 40;
    //   });
    // }
    // localStorage.setItem('lastSearchedMovies', JSON.stringify(findedMovies));
    setFindedMoviesFromSavedState(findedMovies);
    // setIsSearchRunState(false);
    setSearchStringState('');
    // setIsShortState(false);
    // setIsSearchRunState(true);
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

          <ProtectedFromUnauthRoute exact path='/movies'
            component={Movies}
            savedMovies={savedMovies}
            addMovie={addMovie}
            deleteMovie={deleteMovie}
            isLogged={isLogged}
            preloaderOn={preloaderOn}
            searchString={searchString}
            isShort={isShort}
            // isSearchRun={isSearchRun}
            handleSearchString={handleSearchString}
            handleSearchCheckbox={handleSearchCheckbox}
            handleSubmit={handleSubmitInMovies}
            movies={movies}
          />

          <ProtectedFromUnauthRoute exact path='/saved-movies'
            component={SavedMovies}
            isLogged={isLogged}
            // movies={isSearchRun ? findedMoviesFromSaved : savedMovies}
            movies={findedMoviesFromSaved}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}

            // isSearchRun={isSearchRun}
            setIsSearchRunState={setIsSearchRunState}
            searchString={searchString}
            isShort={isShort}
            handleSearchString={handleSearchString}
            handleSearchCheckbox={handleSearchCheckbox}
            handleSubmit={handleSubmitInSavedMovies}
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

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
