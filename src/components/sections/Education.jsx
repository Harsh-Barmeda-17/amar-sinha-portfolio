import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-6 font-['Fredoka']">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex gap-3">
                <GraduationCap className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-teal-500 text-base sm:text-lg mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;