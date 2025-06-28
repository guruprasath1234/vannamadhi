import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Scissors, ShoppingCart, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Language Translator Tool using AI",
      description: "An intelligent translation application powered by AI that supports multiple languages with high accuracy and real-time translation capabilities.",
      icon: <Sparkles className="w-6 h-6" />,
      technologies: ["Python", "AI/ML", "Natural Language Processing", "Flask"],
      color: "from-blue-500/20 to-purple-600/20",
      borderColor: "border-blue-500/30",
      features: ["Real-time translation", "Multiple language support", "AI-powered accuracy", "User-friendly interface"]
    },
    {
      title: "Barber Booking Site",
      description: "A comprehensive booking platform for barbershops with appointment scheduling, service management, and customer reviews.",
      icon: <Scissors className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      color: "from-green-500/20 to-teal-600/20",
      borderColor: "border-green-500/30",
      features: ["Online booking system", "Service catalog", "Customer reviews", "Admin dashboard"]
    },
    {
      title: "E-commerce Website Development",
      description: "A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking.",
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      color: "from-orange-500/20 to-red-600/20",
      borderColor: "border-orange-500/30",
      features: ["Product catalog", "Shopping cart", "Payment processing", "Order management"]
    },
    {
      title: "Face Recognition Based Voting System",
      description: "A secure voting system using face recognition technology to ensure voter authentication and prevent electoral fraud.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Database"],
      color: "from-purple-500/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
      features: ["Biometric authentication", "Secure voting", "Real-time recognition", "Data integrity"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`dark-card rounded-xl shadow-xl overflow-hidden card-hover border ${project.borderColor}`}
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} border-b border-dark-700/50`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-primary-600 text-primary-400 py-2 px-4 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Participations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Hackathon Participations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "KRACKTHON 2.0 at Kumaraswmy College, Karur",
              "SIH - Smart India Hackathon 2023 [Disease Detection in Plants/Crops]",
              "SIH - Smart India Hackathon 2024 [Enhancing 3D Navigation Railway App]"
            ].map((hackathon, index) => (
              <motion.div
                key={hackathon}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="dark-card p-6 rounded-lg shadow-md text-center card-hover dark-card-hover"
              >
                <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-500/30">
                  <span className="text-accent-400 font-bold text-lg">🏆</span>
                </div>
                <p className="text-gray-300 font-medium text-sm leading-relaxed">
                  {hackathon}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;