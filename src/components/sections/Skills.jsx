import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElectricBorder from '../ui/ElectricBorder';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, 
  SiDocker, SiKubernetes, SiLinux, SiGit, SiGithub,
  SiReact, SiTailwindcss, SiJavascript, SiMysql,
  SiCplusplus, SiPhp, SiMongodb, SiOpencv,
  SiPandas, SiNumpy
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    // Programming Languages
    { icon: SiPython, name: "Python", category: "Programming", color: "#3776AB" },
    { icon: SiCplusplus, name: "C++", category: "Programming", color: "#00599C" },
    { icon: SiJavascript, name: "JavaScript", category: "Programming", color: "#F7DF1E" },
    { icon: SiPhp, name: "PHP", category: "Programming", color: "#777BB4" },
    
    // AI/ML
    { icon: SiTensorflow, name: "TensorFlow", category: "AI/ML", color: "#FF6F00" },
    { icon: SiPytorch, name: "PyTorch", category: "AI/ML", color: "#EE4C2C" },
    { icon: SiScikitlearn, name: "Scikit-learn", category: "AI/ML", color: "#F7931E" },
    { icon: SiOpencv, name: "OpenCV", category: "AI/ML", color: "#5C3EE8" },
    { icon: SiPandas, name: "Pandas", category: "AI/ML", color: "#150458" },
    { icon: SiNumpy, name: "NumPy", category: "AI/ML", color: "#013243" },
    
    // DevOps & Tools
    { icon: SiDocker, name: "Docker", category: "DevOps", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", category: "DevOps", color: "#326CE5" },
    { icon: SiLinux, name: "Linux", category: "DevOps", color: "#FCC624" },
    { icon: SiGit, name: "Git", category: "DevOps", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", category: "DevOps", color: "#FFFFFF" },
    
    // Frontend
    { icon: SiReact, name: "React", category: "Frontend", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind", category: "Frontend", color: "#06B6D4" },
    
    // Database
    { icon: SiMysql, name: "MySQL", category: "Database", color: "#4479A1" },
    { icon: SiMongodb, name: "MongoDB", category: "Database", color: "#47A248" },
  ];

  const categories = [...new Set(skillsData.map(s => s.category))];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-500 mb-6 font-['Fredoka']">
            Technical Expertise
          </h2>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 sm:mb-16">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8 font-['Fredoka'] text-left"
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ElectricBorder
                        color="#14b8a6"
                        speed={2}
                        chaos={0.015}
                        thickness={1.5}
                        borderRadius={12}
                      >
                        <div className="group flex flex-col items-center gap-3 p-4 bg-gray-900 rounded-xl transition-all duration-300 w-full">
                          <Icon 
                            className="text-4xl sm:text-5xl transition-all duration-300 group-hover:scale-110" 
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm sm:text-base font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                            {skill.name}
                          </span>
                        </div>
                      </ElectricBorder>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;