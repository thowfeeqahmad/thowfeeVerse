import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Play, 
  X, 
  Code, 
  Smartphone, 
  Globe,
  Database,
  Palette,
  Zap
} from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Dashboard',
      category: 'Web Application',
      description: 'A sophisticated analytics dashboard with machine learning insights and real-time data visualization.',
      fullDescription: 'This cutting-edge dashboard revolutionizes how businesses analyze their data. Built with React and TypeScript, it features advanced AI algorithms that automatically detect patterns and provide actionable insights. The real-time data processing capabilities ensure that users always have access to the most current information.',
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js', 'WebSocket'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Database,
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      fullDescription: 'A comprehensive e-commerce platform that combines beautiful design with powerful functionality. Features include advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for optimal performance and scalability.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Globe,
      gradient: 'from-neon-pink to-neon-blue',
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking app with social features and AI-powered recommendations.',
      fullDescription: 'A revolutionary fitness app that combines workout tracking with social networking. Users can create custom workout plans, track their progress, and connect with friends for motivation. The AI-powered recommendation engine suggests personalized workouts based on user preferences and fitness goals.',
      technologies: ['React Native', 'Firebase', 'Machine Learning', 'Redux', 'Expo'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Smartphone,
      gradient: 'from-neon-purple to-neon-cyan',
    },
    {
      id: 4,
      title: 'Creative Portfolio Website',
      category: 'Web Design',
      description: 'Award-winning portfolio website with stunning animations and interactive elements.',
      fullDescription: 'An immersive portfolio experience that showcases creative work through innovative web technologies. Features include 3D interactions, parallax scrolling, and custom animations that create an unforgettable user experience. The site has received recognition for its outstanding design and technical implementation.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Palette,
      gradient: 'from-neon-blue to-neon-pink',
    },
    {
      id: 5,
      title: 'Real-Time Chat Application',
      category: 'Web Application',
      description: 'Scalable chat platform with advanced features and modern UI/UX design.',
      fullDescription: 'A feature-rich chat application that supports real-time messaging, file sharing, video calls, and group conversations. Built with a focus on scalability and performance, it can handle thousands of concurrent users while maintaining low latency and high reliability.',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis', 'WebRTC'],
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Zap,
      gradient: 'from-neon-cyan to-neon-pink',
    },
    {
      id: 6,
      title: 'Blockchain DApp',
      category: 'Blockchain',
      description: 'Decentralized application with smart contracts and cryptocurrency integration.',
      fullDescription: 'A cutting-edge decentralized application that leverages blockchain technology for secure and transparent transactions. Features include smart contract integration, cryptocurrency wallet connectivity, and a user-friendly interface that makes blockchain technology accessible to everyone.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask', 'Hardhat'],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      icon: Code,
      gradient: 'from-neon-purple to-neon-blue',
    },
  ];

  const categories = ['All', 'Web Application', 'Full-Stack', 'Mobile Development', 'Web Design', 'Blockchain'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Projects & Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
            Explore my portfolio of innovative projects that demonstrate cutting-edge technology and creative problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-neon text-white neon-glow'
                  : 'glass-card text-gray-300 hover:text-neon-cyan border border-white/20 hover:border-neon-cyan/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-neon-cyan font-poppins font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs font-poppins text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs font-poppins text-gray-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoUrl}
                      className="flex items-center space-x-2 text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-poppins">Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-poppins">Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center`}>
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-neon-cyan font-poppins font-semibold mb-2">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 font-poppins leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-poppins font-semibold text-neon-cyan mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-poppins text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demoUrl}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-neon rounded-full font-poppins font-semibold text-white hover:neon-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      className="flex items-center space-x-2 px-6 py-3 glass-card border border-white/20 rounded-full font-poppins font-semibold text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;