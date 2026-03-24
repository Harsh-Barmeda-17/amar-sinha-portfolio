import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNavButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ FIX: memoized sectionIds
  const sectionIds = useMemo(() => [
    'hero',
    'about', 
    'experience',
    'education',
    'publications',
    'skills',
    'teaching',
    'leadership',
    'contact'
  ], []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getNavbarHeight = () => {
    const navbar = document.querySelector('nav');
    return navbar ? navbar.offsetHeight : 70;
  };

  useEffect(() => {
    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter(el => el !== null);

    setSections(sectionElements);

    const updateCurrentSection = () => {
      const navbarHeight = getNavbarHeight();
      const scrollPosition = window.scrollY + navbarHeight + 30;

      let current = 0;
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            current = i;
            break;
          }
        }
      }

      setCurrentSection(current);

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setIsAtBottom(isBottom);
    };

    updateCurrentSection();
    window.addEventListener('scroll', updateCurrentSection);
    window.addEventListener('resize', updateCurrentSection);

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('resize', updateCurrentSection);
    };
  }, [sectionIds]); // ✅ FIXED

  const handleClick = () => {
    if (isAtBottom || currentSection === sections.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const nextSection = sections[currentSection + 1];
      if (nextSection) {
        const navbarHeight = getNavbarHeight();
        const offset = nextSection.offsetTop - navbarHeight + 10;

        window.scrollTo({
          top: offset,
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
        className={`fixed z-50 w-12 h-12 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-all duration-300 flex items-center justify-center ${
          isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'
        }`}
        aria-label={
          isAtBottom || currentSection === sections.length - 1
            ? "Back to top"
            : "Next section"
        }
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