import React from 'react';
import ReactDOM from 'react-dom';
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

function App() {
  return (
    <div className="App">
      <Header />

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

        <Route path='*'>
          <NotFound />
        </Route>

        <Route path='/signup'>
          <Registrate />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
