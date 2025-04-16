import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const About = () => {
  const handleDownload = () => {
    try {
      window.open('/Vikhyat_CV.pdf', '_blank');
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume file not found. Please contact me directly for my resume.');
    }
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              I'm Vikhyat, a passionate Computer Science student at NIIT University, pursuing my B.Tech with a specialization in Artificial Intelligence and Machine Learning. My journey in technology began with a fascination for how machines can learn and make decisions, which has evolved into a deep interest in AI/ML and its applications.
            </p>
            <p className="text-gray-300">
              As a student, I'm constantly exploring new technologies and frameworks, with a particular focus on machine learning algorithms and their implementation. I enjoy working on projects that combine my technical skills with creative problem-solving, whether it's developing AI models or building full-stack applications.
            </p>
            <p className="text-gray-300">
              Beyond academics, I'm an active participant in coding competitions and hackathons, which help me stay updated with the latest industry trends and improve my problem-solving abilities. I believe in continuous learning and am always looking for opportunities to expand my knowledge in AI/ML and software development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full transition-colors hover:bg-gray-200 border-2 border-white"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Projects', value: '5+' },
              { label: 'Hackathons', value: '3+' },
              { label: 'Certifications', value: '4+' },
              { label: 'Skills', value: '10+' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg text-center border border-white"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{item.value}</h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 