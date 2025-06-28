import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-gray-300 section-padding border-t border-dark-700">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Vannamadhi M</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about creating innovative solutions and contributing to meaningful projects. 
              Let's build something amazing together!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>madhi3981@gmail.com</p>
              <p>+91 9042256441</p>
              <p>Hosur, Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-dark-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Vannamadhi M. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Code className="w-4 h-4" />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-dark-700"
        >
          <div className="text-center">
            <h5 className="text-sm font-semibold text-gray-300 mb-2">Declaration</h5>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
              I hereby declare that all the information furnished above is true and to the best of my knowledge and belief.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;