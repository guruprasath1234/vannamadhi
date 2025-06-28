import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer (Intern)",
      company: "Make Vision",
      duration: "Dec 2024 - May 2025",
      location: "Remote",
      type: "Internship",
      description: "Currently working as a frontend developer intern, contributing to modern web applications and gaining hands-on experience with industry-standard development practices.",
      responsibilities: [
        "Developing responsive web interfaces using modern frameworks",
        "Collaborating with design team to implement UI/UX designs",
        "Writing clean, maintainable, and efficient code",
        "Participating in code reviews and team meetings"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Git"],
      status: "current"
    },
    {
      title: "Python Programming Intern",
      company: "AICTE",
      duration: "4 - 31 July, 2024",
      location: "Virtual",
      type: "Virtual Internship",
      description: "Completed a comprehensive Python programming internship focusing on core programming concepts and practical applications.",
      responsibilities: [
        "Learned advanced Python programming concepts",
        "Worked on real-world programming projects",
        "Participated in virtual workshops and seminars",
        "Completed assignments and coding challenges"
      ],
      technologies: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
      status: "completed"
    },
    {
      title: "Software Development Intern",
      company: "AJR Institute",
      duration: "June - July, 2023",
      location: "Virtual",
      type: "Virtual Internship",
      description: "Gained foundational experience in software development through a structured internship program.",
      responsibilities: [
        "Introduction to software development lifecycle",
        "Hands-on experience with programming languages",
        "Team collaboration on development projects",
        "Learning industry best practices"
      ],
      technologies: ["Programming Fundamentals", "Software Development", "Team Collaboration"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional experience and internships that have shaped my development journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-700"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-dark-900 shadow-lg ${
                  experience.status === 'current' 
                    ? 'bg-green-500' 
                    : 'bg-primary-500'
                }`}></div>

                {/* Experience card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="dark-card p-8 rounded-xl shadow-xl card-hover dark-card-hover"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-400 mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.status === 'current'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {experience.status === 'current' ? 'Current' : experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshop Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Workshops & Training
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="dark-card p-6 rounded-lg shadow-md text-center dark-card-hover"
            >
              <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-secondary-500/30">
                <Briefcase className="w-8 h-8 text-secondary-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Workshop on Testing Automation on Selenium
              </h4>
              <p className="text-gray-400 text-sm">
                Comprehensive training on automated testing using Selenium framework, 
                covering test script development and best practices in quality assurance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;