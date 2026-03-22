import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeTab, setActiveTab] = useState('journals');

  const tabs = [
    { id: 'journals', label: 'Journal Articles', icon: BookOpen },
    { id: 'conferences', label: 'Conference Papers', icon: FileText },
    { id: 'patents', label: 'Patents', icon: Award },
  ];

  return (
    <section id="publications" className="py-16 sm:py-20 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-6 font-['Fredoka']">
            Publications & Patents
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4 inline mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {activeTab === 'journals' && portfolioData.publications.journals.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-relaxed">{pub.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">{pub.authors}</p>
              <p className="text-gray-500 text-sm sm:text-base mb-3">{pub.journal}, {pub.year}</p>
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs sm:text-sm font-medium">
                {pub.status}
              </span>
            </motion.div>
          ))}

          {activeTab === 'conferences' && portfolioData.publications.conferences.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-relaxed">{pub.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">{pub.authors}</p>
              <p className="text-gray-500 text-sm sm:text-base mb-3">{pub.conference}, {pub.year}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs sm:text-sm font-medium">
                  {pub.status}
                </span>
                {pub.citations && (
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs sm:text-sm font-medium">
                    Cited by {pub.citations}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {activeTab === 'patents' && portfolioData.publications.patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-relaxed">{patent.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">{patent.inventors}</p>
              <p className="text-gray-500 text-sm sm:text-base">Application No: {patent.applicationNo}, {patent.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;