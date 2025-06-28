import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Adhiyamaan College of Engineering, Hosur",
      duration: "2023 - 2025",
      percentage: "87.5%",
      status: "Passout",
      description: "Comprehensive program covering advanced computer science concepts, software engineering, and modern development practices.",
      highlights: [
        "Advanced Programming Concepts",
        "Software Engineering Principles",
        "Database Management Systems",
        "Web Technologies & Frameworks"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St Joseph's College, Hosur",
      duration: "2020 - 2023",
      percentage: "80.0%",
      status: "Completed",
      description: "Foundation in computer science fundamentals, programming languages, and application development.",
      highlights: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Computer Networks",
        "Software Development Lifecycle"
      ]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "St Joseph's Matriculation School",
      duration: "2019 - 2020",
      percentage: "84.5%",
      status: "Completed",
      description: "Higher secondary education with focus on science and mathematics.",
      highlights: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (10th)",
      institution: "St Joseph's Matriculation School",
      duration: "2017 - 2018",
      percentage: "62.4%",
      status: "Completed",
      description: "Secondary education with strong foundation in core subjects.",
      highlights: [
        "Core Academic Subjects",
        "Basic Computer Skills",
        "Mathematics & Science",
        "Language Proficiency"
      ]
    }
  ];

  const paperPresentations = [
    "Face Recognition Based Voting System",
    "Quantum Computing",
    "Virtual Reality",
    "Multi Language Translator Tool Using AI"
  ];

  return (
    <section id="education" className="section-padding bg-dark-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic journey and continuous learning that built my foundation in computer science
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-700"></div>

            {educationData.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-dark-900 shadow-lg ${
                  index === 0 ? 'bg-green-500' : 'bg-primary-500'
                }`}></div>

                {/* Education card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="dark-card p-8 rounded-xl shadow-xl card-hover dark-card-hover"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-lg font-semibold text-primary-400 mb-2">
                        {education.institution}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        education.status === 'Passout'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {education.status}
                      </span>
                      <div className="text-2xl font-bold text-accent-400">
                        {education.percentage}
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1 mb-4 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {education.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Subjects & Areas</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {education.highlights.map((highlight, hlIndex) => (
                        <div key={hlIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Paper Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Paper Presentations & Research
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paperPresentations.map((paper, index) => (
              <motion.div
                key={paper}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="dark-card p-6 rounded-lg shadow-md text-center card-hover dark-card-hover"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                  <Award className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">
                  {paper}
                </h4>
                <p className="text-xs text-gray-400">
                  Research & Presentation
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;