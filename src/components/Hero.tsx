import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-lg font-medium text-primary-400">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Vannamadhi M
              </h1>
              <p className="text-2xl text-gray-300 font-medium">
                MCA Graduate & Software Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              Motivated and eager recent graduate seeking an entry-level position to leverage my academic knowledge and skills. Committed to contributing to team success and gaining practical experience to support career growth and development.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                <span>Hosur, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                <span>9042256441</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                <span>madhi3981@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/*<motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(96, 165, 250, 0.4)' }}
              whileTap={{ scale: 0.95 }}             
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 flex items-center gap-2 glow-primary"
              >
              <Download size={20} />
              Download Resume
              </motion.a>*/}
              
               {/*avduwseidbfiucbiabwsidbxicvuabsidbxc


               w0esdhcu baiSDIbcbauedsbuxcbi*/}
              <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-primary-600 text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
              Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/madhimurthy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-200 border border-dark-700 hover:border-primary-500"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/vannamadhi-m-772035312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 text-gray-400 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-200 border border-dark-700 hover:border-primary-500"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary-500/30"
              >
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-dark-800/80 rounded-full flex items-center justify-center shadow-2xl border border-dark-700">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-white">VM</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">MCA</h3>
                    <p className="text-gray-400">Software Developer</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 bg-secondary-500/20 rounded-lg flex items-center justify-center text-secondary-400 font-bold shadow-lg backdrop-blur-sm border border-secondary-500/30"
              >
                React
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-5 w-14 h-14 bg-accent-500/20 rounded-lg flex items-center justify-center text-accent-400 font-bold shadow-lg backdrop-blur-sm border border-accent-500/30"
              >
                JS
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 left-0 w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 font-bold shadow-lg backdrop-blur-sm border border-primary-500/30"
              >
                AI
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;