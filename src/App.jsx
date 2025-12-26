
// src/App.jsx
import CustomNavbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import ParticlesBG from './components/common/ParticlesBG';
import FloatingCTA from './components/common/FloatingCTA';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingCTA />
      <ParticlesBG />
    </>
  );
}

export default App;