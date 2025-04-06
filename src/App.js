import './styles/_main.scss';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import ParticleBackground from './components/particleBackground/ParticleBackground';

function App() {
  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
        <ParticleBackground/>
      </>
  );
}

export default App;
