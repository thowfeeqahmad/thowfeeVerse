import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Cpu } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-dark flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <div className="absolute inset-0 rounded-full border-4 border-neon-cyan/30"></div>
              <div className="absolute inset-2 rounded-full border-4 border-neon-purple/50"></div>
              <div className="absolute inset-4 rounded-full border-4 border-neon-pink/70"></div>
            </motion.div>
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Code className="w-8 h-8 text-neon-cyan" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl font-orbitron font-bold gradient-text mb-4"
        >
          THOWFEEQ AHMAD
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >
            <Zap className="w-6 h-6 text-neon-cyan" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            <Cpu className="w-6 h-6 text-neon-purple" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          >
            <Code className="w-6 h-6 text-neon-pink" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-neon rounded-full mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-gray-400 mt-4 font-poppins"
        >
          Initializing the future...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;