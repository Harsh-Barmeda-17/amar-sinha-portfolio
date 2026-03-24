import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const items = [
    {
      label: "About",
      bgColor: "rgba(13, 7, 22, 0.95)",
      textColor: "#fff",
      links: [
        { label: "Bio", ariaLabel: "About Bio", href: "#about" },
        { label: "Education", ariaLabel: "Education", href: "#education" },
        { label: "Experience", ariaLabel: "Work Experience", href: "#experience" }
      ]
    },
    {
      label: "Research", 
      bgColor: "rgba(23, 13, 39, 0.95)",
      textColor: "#fff",
      links: [
        { label: "Publications", ariaLabel: "Publications", href: "#publications" },
        { label: "Patents", ariaLabel: "Patents", href: "#publications" },
        { label: "Technical Expertise", ariaLabel: "Skills", href: "#skills" }
      ]
    },
    {
      label: "Impact",
      bgColor: "rgba(39, 30, 55, 0.95)", 
      textColor: "#fff",
      links: [
        { label: "Teaching", ariaLabel: "Academic Teaching", href: "#teaching" },
        { label: "Leadership", ariaLabel: "Community Impact", href: "#leadership" },
        { label: "Get in Touch", ariaLabel: "Contact", href: "#contact" }
      ]
    }
  ];

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const calculateHeight = () => {
    if (isMobile) {
      return 720;
    }
    return 320;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 70, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.35,
      ease: "power2.inOut"
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.3, 
      ease: "power2.out", 
      stagger: 0.05 
    }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => tl?.kill();
  }, [isMobile]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsExpanded(true);
      tl.play(0);
    } else {
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const handleLinkClick = (e, href) => {
    // Close the menu
    if (isExpanded) {
      toggleMenu();
    }
    
    // If it's a hash link, scroll smoothly
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  // Get the appropriate height style based on screen size
  const getContentHeight = () => {
    if (isMobile) {
      return 'calc(100% - 150px)';
    }
    return 'calc(100% - 70px)';
  };

  return (
    <>
      {/* Mobile Navbar - Fixed and Centered */}
      {isMobile ? (
        <div className="fixed z-[99] top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px]">
          <nav
            ref={navRef}
            className="block h-[70px] rounded-2xl shadow-2xl relative overflow-hidden will-change-[height]"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="absolute inset-x-0 top-0 h-[70px] flex items-center justify-between px-3 z-[2]">
              {/* Hamburger Menu Button */}
              <div
                className="hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px]"
                onClick={toggleMenu}
                role="button"
                aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              >
                <div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${isExpanded ? 'translate-y-[3px] rotate-45' : ''}`} />
                <div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${isExpanded ? '-translate-y-[3px] -rotate-45' : ''}`} />
              </div>

              {/* Center - Amar Sinha */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-base font-bold text-white font-['Playfair_Display',serif] whitespace-nowrap">
                  Amar Sinha
                </span>
              </div>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                className="inline-flex border border-white/20 rounded-full px-2.5 py-1 text-[10px] font-medium text-white hover:bg-white hover:text-black transition-all duration-300 font-['Roboto_Slab',serif]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            {/* Dropdown Menu Content */}
            <div
              className={`absolute left-0 right-0 top-[70px] bottom-0 p-3 flex flex-col items-stretch gap-2 justify-start z-[1] ${
                isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
              } flex-col`}
              aria-hidden={!isExpanded}
              style={{ height: getContentHeight() }}
            >
              {items.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="select-none relative flex flex-col gap-1.5 p-3 rounded-xl flex-1 transition-all duration-300 hover:scale-[1.02]"
                  ref={setCardRef(idx)}
                  style={{ background: item.bgColor, color: item.textColor, backdropFilter: 'blur(10px)' }}
                >
                  <div className="text-base font-semibold tracking-tight font-['Playfair_Display',serif]">
                    {item.label}
                  </div>
                  <div className="mt-auto flex flex-col gap-1">
                    {item.links?.map((lnk, i) => (
                      <a
                        key={`${lnk.label}-${i}`}
                        className="inline-flex items-center gap-1 no-underline cursor-pointer transition-all duration-300 hover:translate-x-1 text-[11px] font-['Roboto_Slab',serif]"
                        href={lnk.href}
                        aria-label={lnk.ariaLabel}
                        onClick={(e) => handleLinkClick(e, lnk.href)}
                      >
                        <GoArrowUpRight className="shrink-0 text-xs" aria-hidden="true" />
                        {lnk.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      ) : (
        /* Desktop Navbar - Fixed and Centered */
        <div className="fixed z-[99] top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[900px]">
          <nav
            ref={navRef}
            className="block h-[70px] rounded-2xl shadow-2xl relative overflow-hidden will-change-[height]"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="absolute inset-x-0 top-0 h-[70px] flex items-center justify-between px-6 z-[2]">
              {/* Hamburger Menu Button */}
              <div
                className="hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]"
                onClick={toggleMenu}
                role="button"
                aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              >
                <div className={`w-[28px] h-[2px] bg-white transition-all duration-300 ${isExpanded ? 'translate-y-[4px] rotate-45' : ''}`} />
                <div className={`w-[28px] h-[2px] bg-white transition-all duration-300 ${isExpanded ? '-translate-y-[4px] -rotate-45' : ''}`} />
              </div>

              {/* Center - Amar Sinha */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-xl font-bold text-white font-['Playfair_Display',serif] whitespace-nowrap">
                  Amar Sinha
                </span>
              </div>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                className="inline-flex border border-white/20 rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 font-['Roboto_Slab',serif]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            {/* Dropdown Menu Content */}
            <div
              className={`absolute left-0 right-0 top-[70px] bottom-0 p-6 flex flex-row items-stretch gap-4 justify-start z-[1] ${
                isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
              } md:flex-row md:items-stretch md:gap-4`}
              aria-hidden={!isExpanded}
              style={{ height: getContentHeight() }}
            >
              {items.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="select-none relative flex flex-col gap-3 p-5 rounded-xl flex-1 transition-all duration-300 hover:scale-[1.02]"
                  ref={setCardRef(idx)}
                  style={{ background: item.bgColor, color: item.textColor, backdropFilter: 'blur(10px)' }}
                >
                  <div className="text-2xl font-semibold tracking-tight font-['Playfair_Display',serif]">
                    {item.label}
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    {item.links?.map((lnk, i) => (
                      <a
                        key={`${lnk.label}-${i}`}
                        className="inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:translate-x-1 text-base font-['Roboto_Slab',serif]"
                        href={lnk.href}
                        aria-label={lnk.ariaLabel}
                        onClick={(e) => handleLinkClick(e, lnk.href)}
                      >
                        <GoArrowUpRight className="shrink-0" aria-hidden="true" />
                        {lnk.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;