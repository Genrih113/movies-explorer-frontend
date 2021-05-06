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

      <Main />

      <Movies />

      <SavedMovies />

      <EditProfile />

      <NotFound />

      <Registrate />

      <Login />

      <Footer />
    </div>
  );
}

export default App;
