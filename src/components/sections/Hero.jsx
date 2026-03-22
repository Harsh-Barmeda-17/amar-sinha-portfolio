import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlurText from '../ui/BlurText';
import RotatingText from '../ui/RotatingText';
import LightRays from '../ui/LightRays';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Hero = () => {
  const rotatingTexts = ['Ph.D. Researcher', 'AI/ML Engineer'];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 relative overflow-hidden">
      {/* LightRays Effect - Constant light with mouse follow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#14b8a6"
          raysSpeed={isMobile ? 0.5 : 0.3}
          lightSpread={isMobile ? 0.6 : 0.5}
          rayLength={isMobile ? 9 : 5}
          followMouse={true}
          mouseInfluence={isMobile ? 0.2 : 0.25}
          noiseAmount={isMobile ? 0.1 : 0.05}
          distortion={isMobile ? 0.05 : 0.03}
          pulsating={false}
          fadeDistance={isMobile ? 0.9 : 1}
          saturation={isMobile ? 1 : 0.9}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Glow */}
          <div className="relative flex items-center justify-center mb-10 sm:mb-12 md:mb-14">
            <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl"></div>
            <img 
              src="/profile.jpg" 
              alt="Amar Sinha" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-700 relative z-10"
            />
          </div>

          {/* Name with Hi, I'm - Single Line */}
          <div className="mb-4 sm:mb-5 flex flex-wrap justify-center items-baseline">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-['Fredoka']">Hi, I'm </span>
            <BlurText
              text=" Amar Sinha"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-500 font-['Fredoka'] inline-block"
            />
          </div>

          {/* Title - Rotating Text with Flip Animation */}
          <div className="mb-6 sm:mb-8">
            <RotatingText
              texts={rotatingTexts}
              mainClassName="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium bg-teal-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center justify-center"
              rotationInterval={2500}
              splitBy="words"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 90 }}
            />
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
          >
            Innovative researcher specializing in Beyond 5G Networks, Software-Defined Networking, 
            and AI-driven Solutions for next-generation wireless communication.
          </motion.p>

          {/* Contact Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 sm:gap-8 mb-8 sm:mb-10"
          >
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://amarsinha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              aria-label="Website"
            >
              <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-teal-500 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-teal-600 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              className="px-5 sm:px-6 py-2 sm:py-2.5 border border-gray-600 text-gray-300 rounded-lg text-sm sm:text-base font-medium hover:border-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;