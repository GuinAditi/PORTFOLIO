

import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
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
    </main>
  );
}

export default App;
