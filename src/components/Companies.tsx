import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Users, Rocket, Star, Globe, Zap } from 'lucide-react';

const Companies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companies = [
    {
      name: 'Tagit Creations',
      role: 'Founder & CEO',
      description: 'A cutting-edge digital agency specializing in web development, branding, and innovative tech solutions.',
      services: ['Web Development', 'Brand Identity', 'UI/UX Design', 'Digital Marketing'],
      icon: Rocket,
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      name: 'Future Ventures',
      role: 'Co-Founder',
      description: 'Exploring next-generation technologies and building the future of digital experiences.',
      services: ['AI Solutions', 'Blockchain', 'IoT Development', 'Tech Consulting'],
      icon: Globe,
      gradient: 'from-neon-pink to-neon-blue',
    },
  ];

  const achievements = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Star, value: '100+', label: 'Projects Delivered' },
    { icon: Zap, value: '24/7', label: 'Support Available' },
    { icon: Building, value: '3', label: 'Years in Business' },
  ];

  return (
    <section id="companies" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4 sm:mb-6">
            My Companies
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
            Building the future through innovative companies that push the boundaries of technology and creativity.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${company.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <company.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-1">
                    {company.name}
                  </h3>
                  <p className="text-neon-cyan font-poppins font-semibold">
                    {company.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 font-poppins leading-relaxed mb-6">
                {company.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-poppins font-semibold text-neon-cyan">
                  Services:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {company.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-poppins text-gray-300 hover:bg-white/20 transition-colors duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-orbitron font-bold text-center gradient-text mb-8">
            Company Achievements
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-neon rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-400 font-poppins text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;