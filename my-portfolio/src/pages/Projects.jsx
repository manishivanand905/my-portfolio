import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/Projects/ProjectGrid';

const Projects = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
      style={{maxWidth: '1400px', margin: '0 auto', padding: '140px 50px 80px', minHeight: '100vh'}}
    >
      <motion.h2
        className="section-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '25px', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700, letterSpacing: '-1.5px', textShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'}}
      >
        My Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '50px', maxWidth: '700px', lineHeight: 1.6, fontWeight: 400, letterSpacing: '0.3px'}}
      >
        A collection of my recent work and personal projects
      </motion.p>

      <ProjectGrid />
    </motion.div>
  );
}

export default Projects;