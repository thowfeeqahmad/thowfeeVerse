import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Code, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Github,
  Mail,
  Phone,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Companies', href: '#companies' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent py-12 sm:py-16">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-60 h-60 sm:w-96 sm:h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-32 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-orbitron font-bold gradient-text mb-4">
                THOWFEEQ AHMAD
              </h3>
              <p className="text-gray-300 font-poppins leading-relaxed max-w-md">
                Tech Creator, Entrepreneur & Visionary crafting the future through 
                innovative digital solutions and cutting-edge technology.
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="mailto:hello@thowfeeq.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="font-poppins text-sm">hello@thowfeeq.com</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center space-x-2 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-poppins text-sm">+1 (555) 123-4567</span>
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-orbitron font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-poppins text-sm hover:translate-x-2 transform transition-transform duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-orbitron font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Data Analytics',
                'Brand Identity',
                'Tech Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 font-poppins text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 font-poppins text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-neon-cyan" />
            <span>by Thowfeeq Ahmad</span>
          </div>

          <div className="flex items-center space-x-6">
            <p className="text-gray-400 font-poppins text-sm">
              © {currentYear} Thowfeeq Ahmad. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-neon rounded-xl flex items-center justify-center text-white hover:neon-glow transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 w-4 h-4 bg-neon-cyan rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-20 left-20 w-3 h-3 bg-neon-purple rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-10 right-1/3 w-2 h-2 bg-neon-pink rounded-full blur-sm"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;