import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Rocket, Zap } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Tech Creator',
    'Web Developer',
    'Data Analyst', 
    'Graphic Designer',
    'CEO of Tagit Creations',
    'Entrepreneur',
    'Visionary'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-32">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full opacity-15 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full opacity-25 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 blur-lg"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-40"></div>
            <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-neon-cyan" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6"
          >
            <span className="text-white">Hey, I'm </span>
            <span className="gradient-text text-glow">Thowfeeq Ahmad</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-poppins mb-8 h-20 flex items-center justify-center"
          >
            <span className="text-gray-300 mr-3">—</span>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="gradient-text font-semibold"
            >
              {roles[currentRole]}
            </motion.span>
            <span className="text-gray-300 ml-3">& Visionary</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-poppins leading-relaxed"
          >
            Welcome to my digital universe where innovation meets creativity. 
            I craft cutting-edge solutions and build tomorrow's technology today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-neon rounded-full font-poppins font-semibold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Explore My World</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 glass-card border-2 border-neon-cyan/30 hover:border-neon-cyan/60 rounded-full font-poppins font-semibold text-neon-cyan transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>View Projects</span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-neon-cyan cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;