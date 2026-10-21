

import './App.css'
import About from './components/About';
import Contact from './components/Contact';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SplashCursor from './SplashCursor';

function App() {

  return (
   <>
   <SplashCursor   rainbow={false}
  size={1}
  force={1}
  swirl={3}
  trail={1}
  clickSplash
  colorSpeed={1}
  intensity={1}
  momentum={1}
  shading={1}
  glow={0}
  quality="high"
  intro
  contained={false} />
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
  <Contact/>

   </>
  );
}

export default App;