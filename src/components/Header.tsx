import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Companies', href: '#companies', icon: Briefcase },
    { name: 'Tech Stack', href: '#tech-stack', icon: Code },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="font-orbitron font-bold text-xl gradient-text"
          >
            THOWFEEQ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group text-base lg:text-lg xl:text-xl"
              >
                <item.icon className="w-4 h-4 group-hover:text-neon-cyan" />
                <span className="font-poppins">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-cyan focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/80 z-50 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-2xl text-gray-200 hover:text-neon-cyan font-poppins transition-colors duration-300"
              >
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;