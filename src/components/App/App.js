import './App.css';

import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import LandingNav from '../LandingNav/LandingNav';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingTechs from '../LandingTechs/LandingTechs';
import LandingStudent from '../LandingStudent/LandingStudent';
import Footer from '../Footer/Footer';
import MovieSearch from '../MovieSearch/MovieSearch';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardSection from '../MoviesCardList/MoviesCardSection';
import EditProfile from '../EditProfile/EditProfile';
import NotFound from '../NotFound/NotFound';
import Registrate from '../Registrate/Registrate';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />

      <LandingNav />

      <LandingAbout />

      <LandingTechs />

      <LandingStudent />

      <Footer />

      <MovieSearch />

      <MoviesCardSection />

      <EditProfile />

      <NotFound />

      <Registrate />

      <Login />
    </div>
  );
}

export default App;
