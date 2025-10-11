import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Home/Hero';

const Home = ({ setActivePage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Hero setActivePage={setActivePage} />
    </motion.div>
  );
};

export default Home;