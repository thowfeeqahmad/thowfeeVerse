import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Cloud, 
  Settings,
  Cpu,
  Globe
} from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-neon-cyan to-neon-blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-neon-purple to-neon-pink',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      category: 'Design',
      icon: Palette,
      color: 'from-neon-pink to-neon-cyan',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe Creative Suite', level: 88 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Brand Identity', level: 87 },
      ],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-neon-blue to-neon-purple',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'iOS Development', level: 75 },
        { name: 'Android Development', level: 78 },
        { name: 'PWA', level: 90 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-neon-cyan to-neon-purple',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
        { name: 'Terraform', level: 70 },
      ],
    },
    {
      category: 'Data & Analytics',
      icon: Cpu,
      color: 'from-neon-pink to-neon-blue',
      skills: [
        { name: 'Python Data Science', level: 88 },
        { name: 'Machine Learning', level: 82 },
        { name: 'Data Visualization', level: 90 },
        { name: 'SQL', level: 92 },
        { name: 'TensorFlow', level: 75 },
      ],
    },
  ];

  const tools = [
    'VS Code', 'Git', 'Vite', 'Webpack', 'ESLint', 'Prettier',
    'Jest', 'Cypress', 'Postman', 'Jira', 'Slack', 'Notion'
  ];

  return (
    <section id="tech-stack" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies and tools that power my digital creations.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-poppins">{skill.name}</span>
                      <span className="text-neon-cyan font-poppins font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center justify-center mb-8">
            <Settings className="w-8 h-8 text-neon-cyan mr-3" />
            <h3 className="text-2xl font-orbitron font-bold gradient-text">
              Tools & Technologies
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-gray-300 font-poppins hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;