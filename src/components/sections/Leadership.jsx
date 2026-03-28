import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Shield, Award, Calendar, TrendingUp } from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="leadership" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-4 font-['Playfair_Display',serif]">
            Community Impact
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Leadership Roles */}
          <div className="space-y-6">
            {portfolioData.leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white font-['Inter',serif]">{role.role}</h3>
                      <p className="text-teal-500 text-base sm:text-lg mt-1 font-['Inter',serif]">{role.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm font-['Inter',serif]">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{role.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-base sm:text-lg font-['Inter',serif]">
                      <TrendingUp className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-teal-500" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Professional Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
          >
            <div className="flex items-center mb-6">
              <Shield className="w-7 h-7 text-teal-500 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-['Playfair_Display',serif]">Professional Memberships</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {portfolioData.memberships.map((membership, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all">
                  <Award className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-base sm:text-lg leading-relaxed font-['Inter',serif]">{membership}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;