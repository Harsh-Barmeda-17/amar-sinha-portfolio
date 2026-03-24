import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNavButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Define section order
  const sectionIds = [
    'hero',
    'about', 
    'experience',
    'education',
    'publications',
    'skills',
    'teaching',
    'leadership',
    'contact'
  ];

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get navbar height dynamically
  const getNavbarHeight = () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      return navbar.offsetHeight; // Removed extra padding entirely
    }
    return 70; // Reduced to navbar height
  };

  useEffect(() => {
    // Get all sections
    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter(el => el !== null);
    setSections(sectionElements);

    // Function to update current section based on scroll position
    const updateCurrentSection = () => {
      const navbarHeight = getNavbarHeight();
      const scrollPosition = window.scrollY + navbarHeight + 30;
      
      let current = 0;
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = i;
            break;
          }
        }
      }
      
      setCurrentSection(current);
      
      // Check if at bottom of page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(isBottom);
    };

    updateCurrentSection();
    window.addEventListener('scroll', updateCurrentSection);
    window.addEventListener('resize', updateCurrentSection);
    
    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('resize', updateCurrentSection);
    };
  }, []);

  const handleClick = () => {
    if (isAtBottom || currentSection === sections.length - 1) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to next section with minimal offset
      const nextSection = sections[currentSection + 1];
      if (nextSection) {
        const navbarHeight = getNavbarHeight();
        const elementPosition = nextSection.offsetTop;
        const offsetPosition = elementPosition - navbarHeight + 10; // Added +10 to bring it up even more
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`fixed z-50 w-12 h-12 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-all duration-300 flex items-center justify-center group ${
          isMobile 
            ? 'bottom-20 right-4' 
            : 'bottom-8 right-8'
        }`}
        aria-label={isAtBottom || currentSection === sections.length - 1 ? "Back to top" : "Next section"}
      >
        {isAtBottom || currentSection === sections.length - 1 ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default FloatingNavButton;