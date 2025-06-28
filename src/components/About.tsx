import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and Python"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Experience with machine learning projects and AI-powered applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in team environments"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Creative approach to solving complex technical challenges"
    }
  ];

  const languages = ["Tamil", "English", "Telugu", "Kannada"];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate software developer with a strong foundation in computer science and a drive for continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Motivated Software Developer & Recent MCA Graduate
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated and enthusiastic software developer with a Master's in Computer Applications from 
              Adhiyamaan College of Engineering. My academic journey has equipped me with a solid foundation in 
              programming languages, software development methodologies, and modern technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With hands-on experience in web development, AI/ML projects, and hackathon participations, 
              I bring both theoretical knowledge and practical skills to every project. I'm passionate about 
              creating innovative solutions and contributing to meaningful technological advancements.
            </p>

            {/* Languages */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <motion.span
                    key={language}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30"
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="dark-card p-6 rounded-xl shadow-xl card-hover dark-card-hover"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 mb-4 border border-primary-500/30">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;