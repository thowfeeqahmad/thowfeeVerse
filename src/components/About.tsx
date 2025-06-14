import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      year: '2020',
      title: 'Started My Tech Journey',
      description: 'Began exploring web development and design',
      icon: Lightbulb,
    },
    {
      year: '2021',
      title: 'Mastered Full-Stack Development',
      description: 'Built expertise in React, Node.js, and modern frameworks',
      icon: Target,
    },
    {
      year: '2022',
      title: 'Founded Tagit Creations',
      description: 'Launched my own tech company focusing on innovative solutions',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Expanded Into Data Analytics',
      description: 'Added data science and analytics to my skill portfolio',
      icon: User,
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Innovation Mode' },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
            I'm a passionate technologist who transforms ideas into digital realities. 
            With a blend of creativity and technical expertise, I create solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-orbitron font-bold text-neon-cyan mb-4">
                My Mission
              </h3>
              <p className="text-gray-300 font-poppins leading-relaxed mb-6">
                To bridge the gap between imagination and reality through cutting-edge technology. 
                I believe in creating digital experiences that not only function flawlessly but 
                also inspire and delight users.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-orbitron font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-poppins">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-neon"></div>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center relative z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl flex-1">
                    <div className="text-neon-cyan font-orbitron font-bold text-lg mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-poppins font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-poppins">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;