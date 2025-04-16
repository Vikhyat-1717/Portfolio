import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const education = [
  {
    year: '2022 - 2026',
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Specialization in Artificial Intelligence and Machine Learning',
    institution: 'NIIT University',
    description: 'Currently pursuing my undergraduate degree with a focus on AI/ML. Actively participating in coding competitions and technical events.',
  },
  {
    year: '2021 - 2022',
    degree: 'Class XII (Science Stream)',
    specialization: 'CBSE Board',
    institution: 'MDH International School',
    description: 'Scored 95% in CBSE Board examinations. Developed strong foundation in Mathematics and Computer Science.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-accent">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'md:left-0' : 'md:right-0'
                } left-1/2 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 rounded-full bg-white`}
              />

              <div
                className={`bg-secondary p-6 rounded-lg shadow-lg border border-white ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}
              >
                <div className="flex items-center mb-4">
                  <AcademicCapIcon className="h-6 w-6 text-white mr-2" />
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                </div>
                <p className="text-gray-400 mb-2">{item.institution}</p>
                <p className="text-white mb-2">{item.year}</p>
                <p className="text-gray-300 mb-2">{item.specialization}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 