import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LogoLoop from '../ui/LogoLoop';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv,
  SiDocker, SiKubernetes, SiLinux, SiGit, SiGithub,
  SiReact, SiTailwindcss, SiJavascript, SiMysql, SiMongodb,
  SiCplusplus, SiPhp, SiPandas, SiNumpy
} from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const techLogos = [
    { node: <SiPython style={{ color: '#3776AB' }} />, name: "Python" },
    { node: <SiCplusplus style={{ color: '#00599C' }} />, name: "C++" },
    { node: <SiJavascript style={{ color: '#F7DF1E' }} />, name: "JavaScript" },
    { node: <SiPhp style={{ color: '#777BB4' }} />, name: "PHP" },
    { node: <SiTensorflow style={{ color: '#FF6F00' }} />, name: "TensorFlow" },
    { node: <SiPytorch style={{ color: '#EE4C2C' }} />, name: "PyTorch" },
    { node: <SiScikitlearn style={{ color: '#F7931E' }} />, name: "Scikit-learn" },
    { node: <SiOpencv style={{ color: '#5C3EE8' }} />, name: "OpenCV" },
    { node: <SiPandas style={{ color: '#150458' }} />, name: "Pandas" },
    { node: <SiNumpy style={{ color: '#013243' }} />, name: "NumPy" },
    { node: <SiDocker style={{ color: '#2496ED' }} />, name: "Docker" },
    { node: <SiKubernetes style={{ color: '#326CE5' }} />, name: "Kubernetes" },
    { node: <SiLinux style={{ color: '#FCC624' }} />, name: "Linux" },
    { node: <SiGit style={{ color: '#F05032' }} />, name: "Git" },
    { node: <SiGithub style={{ color: '#FFFFFF' }} />, name: "GitHub" },
    { node: <SiReact style={{ color: '#61DAFB' }} />, name: "React" },
    { node: <SiTailwindcss style={{ color: '#06B6D4' }} />, name: "Tailwind" },
    { node: <SiMysql style={{ color: '#4479A1' }} />, name: "MySQL" },
    { node: <SiMongodb style={{ color: '#47A248' }} />, name: "MongoDB" },
  ];

  const stats = [
    { value: "6+", label: "Publications", icon: "📄", color: "text-teal-400", bgColor: "bg-teal-500/15" },
    { value: "1", label: "Patents", icon: "🔬", color: "text-teal-400", bgColor: "bg-teal-500/15" },
    { value: "40%", label: "Membership Growth", icon: "📈", color: "text-teal-400", bgColor: "bg-teal-500/15" },
    { value: "Ph.D.", label: "Ongoing", icon: "🎓", color: "text-teal-400", bgColor: "bg-teal-500/15" }
  ];

  return (
    <section id="about" className={`bg-black ${isMobile ? 'py-12 overflow-hidden' : 'py-16 sm:py-20'}`}>
      <div className={`container mx-auto ${isMobile ? 'px-3 max-w-full overflow-hidden' : 'px-4 sm:px-6'}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-center ${isMobile ? 'mb-8' : 'mb-12 sm:mb-16'}`}
        >
          <h2 className={`font-bold text-teal-500 font-['Playfair_Display',serif] ${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl md:text-6xl'}`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className={`${isMobile ? 'flex flex-col gap-6 mb-10' : 'grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20'}`}>
          {/* Left Column - Text Content with Highlighted Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-left ${isMobile ? 'px-1' : 'px-2 sm:px-0'}`}
          >
           <p className={`text-gray-300 leading-relaxed mb-3 font-['Roboto_Slab',serif] ${isMobile ? 'text-sm' : 'text-base sm:text-lg md:text-xl'}`}>
              I'm an innovative researcher with expertise in <span className="text-teal-400 font-semibold">Beyond 5G (B5G) mobile networks</span>, 
              <span className="text-teal-400 font-semibold"> Software-Defined Networking (SDN)</span>, <span className="text-teal-400 font-semibold">AI-driven handover decision-making algorithms</span>, 
              and wireless network simulations.
            </p>
            <p className={`text-gray-300 leading-relaxed mb-3 ${isMobile ? 'text-sm' : 'text-base sm:text-lg md:text-xl'}`}>
              With a proven track record in developing <span className="text-teal-400 font-semibold">Mininet WiFi-based testbeds</span>, applying <span className="text-teal-400 font-semibold">learning models 
              for mobility management</span>, and enhancing overall network performance, I bridge the gap between 
              theoretical research and practical implementation.
            </p>
            <p className={`text-gray-300 leading-relaxed ${isMobile ? 'text-sm' : 'text-base sm:text-lg md:text-xl'}`}>
              Currently pursuing my <span className="text-teal-400 font-semibold">Ph.D. at IIIT Naya Raipur</span>, I'm passionate about pushing the boundaries 
              of next-generation wireless communication through <span className="text-teal-400 font-semibold">AI/ML-driven solutions</span>.
            </p>
          </motion.div>

          {/* Right Column - Stats Boxes with Teal Borders and Subtle Glow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 content-start"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800"
                style={{
                  border: `2px solid rgba(20, 184, 166, 0.5)`,
                  animation: `borderGlow 2.5s ease-in-out infinite`
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-1.5 relative z-10">
                  <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <span className={`${isMobile ? 'text-base' : 'text-xl'} text-teal-400`}>{stat.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-white ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} group-hover:text-teal-400 transition-colors duration-300`}>
                      {stat.value}
                    </div>
                  </div>
                </div>
                <div className={`text-gray-200 ${isMobile ? 'text-sm' : 'text-base md:text-lg'} group-hover:text-white transition-colors duration-300 pl-10 sm:pl-13 relative z-10 font-medium`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full overflow-hidden"
        >
         <h3 className={`font-bold text-teal-500 text-center font-['Playfair_Display',serif] ${isMobile ? 'text-2xl mb-6' : 'text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12'}`}>
            Technologies I Work With
          </h3>
          <div className="relative w-full">
            <LogoLoop
              logos={techLogos}
              speed={isMobile ? 30 : 40}
              direction="left"
              logoHeight={isMobile ? 45 : 65}
              gap={isMobile ? 40 : 65}
              scaleOnHover
              renderItem={(item, key) => (
                <div className={`flex flex-col items-center gap-${isMobile ? '1.5' : '3'} group flex-shrink-0`}>
                  <div className={`transition-all duration-300 group-hover:scale-110 ${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl md:text-6xl'}`}>
                    {item.node}
                  </div>
                  <span className={`font-medium text-gray-500 group-hover:text-gray-300 transition-colors whitespace-nowrap ${isMobile ? 'text-[10px]' : 'text-sm sm:text-base md:text-lg'}`}>
                    {item.name}
                  </span>
                </div>
              )}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;