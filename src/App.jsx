

import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import './App.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-[#03050c] w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
