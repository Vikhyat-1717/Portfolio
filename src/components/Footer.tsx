import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {currentYear} Vikhyat. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
              <motion.a
                key={platform}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 