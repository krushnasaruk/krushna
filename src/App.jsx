import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Process from './components/Process';
import FAQ from './components/FAQ';
import WallOfFame from './components/WallOfFame';
import Stats from './components/Stats';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import BackgroundOrbs from './components/BackgroundOrbs';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <div className="noise-overlay"></div>
      <BackgroundOrbs />
      <Preloader />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <WallOfFame />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;
