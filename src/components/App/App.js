import './App.css';

import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import LandingNav from '../LandingNav/LandingNav';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingTechs from '../LandingTechs/LandingTechs';
import LandingStudent from '../LandingStudent/LandingStudent';
import Footer from '../Footer/Footer';

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
    </div>
  );
}

export default App;
