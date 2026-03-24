import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Publications from './components/sections/Publications';
import Skills from './components/sections/Skills';
import Teaching from './components/sections/Teaching';
import Leadership from './components/sections/Leadership';
import Contact from './components/sections/Contact';
import FloatingNavButton from './components/ui/FloatingNavButton';

const App = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen font-['Roboto_Slab',serif]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Publications />
        <Skills />
        <Teaching />
        <Leadership />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-gray-600 border-t border-gray-800 text-sm font-['Roboto_Slab',serif]">
        <p>© 2026 Amar Sinha. All rights reserved.</p>
        <p className="text-xs mt-1">Designed with passion for research</p>
      </footer>
      <FloatingNavButton />
    </div>
  );
};

export default App;