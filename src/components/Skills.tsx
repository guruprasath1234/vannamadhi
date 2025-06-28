import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Bootstrap/Tailwind", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Machine Learning", level: 75 },
        { name: "Database Management", level: 80 },
        { name: "API Development", level: 75 }
      ]
    }
  ];

  const certifications = [
    "Python Programming Certification",
    "Applications of Machine Learning",
    "Mastering in Cloud Computing",
    "Testing Automation on Selenium"
  ];

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and continuous learning journey
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="dark-card p-8 rounded-xl dark-card-hover"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                          ease: "easeOut" 
                        }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Certifications & Training
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="dark-card p-4 rounded-lg shadow-md text-center card-hover dark-card-hover"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary-500/30">
                  <span className="text-primary-400 font-bold text-lg">✓</span>
                </div>
                <p className="text-gray-300 font-medium text-sm leading-relaxed">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;