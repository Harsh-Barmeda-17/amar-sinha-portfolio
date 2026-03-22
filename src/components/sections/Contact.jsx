import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, Linkedin, Mail, MapPin, Phone, 
  BookOpen, Globe, ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../../assets/data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: Github, href: portfolioData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, href: portfolioData.socialLinks.googleScholar, label: 'Google Scholar' },
    { icon: Globe, href: "https://amarsinha.com", label: 'Website' },
  ];

  const contactInfo = [
    { icon: Mail, value: portfolioData.email, href: `mailto:${portfolioData.email}`, label: 'Email' },
    { icon: Phone, value: portfolioData.phone, href: `tel:${portfolioData.phone}`, label: 'Phone' },
    { icon: MapPin, value: portfolioData.location, href: null, label: 'Location' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-6 font-['Fredoka']">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Open to research collaborations, speaking opportunities, and discussions about B5G networks and AI/ML.
          </p>
        </motion.div>

        {/* Contact Info and Social Links - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all h-full">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 font-['Fredoka']">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all">
                    <info.icon className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    {info.href ? (
                      <a href={info.href} className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-base sm:text-lg">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all h-full">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 font-['Fredoka']">Connect with me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-teal-500 group-hover:text-teal-400" />
                    <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-auto text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;