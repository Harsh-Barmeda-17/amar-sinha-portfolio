import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Teaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="teaching" className="py-16 sm:py-20 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-4 font-['Playfair_Display',serif]">
            Academic Teaching
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Undergraduate Courses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-7 h-7 text-teal-500 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-['Playfair_Display',serif]">Undergraduate</h3>
            </div>
            <div className="space-y-5">
              {portfolioData.teaching.undergraduate.map((course, index) => (
                <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                  <p className="text-lg sm:text-xl font-semibold text-teal-500 mb-1 font-['Inter',serif]">
                    {course.code}: {course.name}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-['Inter',serif]">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Postgraduate Courses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-7 h-7 text-teal-500 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-['Playfair_Display',serif]">Postgraduate</h3>
            </div>
            <div className="space-y-5">
              {portfolioData.teaching.postgraduate.map((course, index) => (
                <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                  <p className="text-lg sm:text-xl font-semibold text-teal-500 mb-1 font-['Inter',serif]">
                    {course.code}: {course.name}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-['Inter',serif]">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;