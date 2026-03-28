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

  // Color mapping for each education level
  const colors = [
    { border: "border-teal-500", text: "text-teal-400" },
    { border: "border-blue-500", text: "text-blue-400" },
    { border: "border-purple-500", text: "text-purple-400" },
    { border: "border-cyan-500", text: "text-cyan-400" }
  ];

  return (
    <section id="education" className="py-20 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-4 font-['Playfair_Display',serif]">
            Education
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== portfolioData.education.length - 1 && (
                <div className="absolute left-[23px] top-12 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-teal-500 to-gray-700"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${colors[index % colors.length].border} flex items-center justify-center shadow-lg`}>
                  <GraduationCap className={`w-5 h-5 ${colors[index % colors.length].text}`} />
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-5 border border-gray-800 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white font-['Inter',serif]">{edu.degree}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm font-['Inter',serif]">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <p className={`text-sm md:text-base ${colors[index % colors.length].text} mb-2 font-['Inter',serif]`}>
                  {edu.institution}
                </p>
                
                {edu.cgpa && (
                  <div className="flex items-center gap-1 text-gray-400 text-sm font-['Inter',serif]">
                    <Award className="w-3 h-3" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                )}
                
                {edu.courses && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-800 rounded-full text-gray-400 font-['Inter',serif]">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;