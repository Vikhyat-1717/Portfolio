import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: '/projects/taskmanager.jpg',
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://taskmanager-demo.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application with interactive maps and detailed forecasts using multiple APIs.',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    image: '/projects/weather.jpg',
    github: 'https://github.com/yourusername/weather',
    demo: 'https://weather-demo.com',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-secondary rounded-lg overflow-hidden shadow-lg"
    >
      <div className="h-48 relative">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black border border-white rounded-full text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 