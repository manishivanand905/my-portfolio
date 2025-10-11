import React from 'react';
import { motion } from 'framer-motion';

const LoadingTransition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        background: '#000', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <motion.div
        style={{ 
          width: 50, 
          height: 50, 
          borderRadius: '50%', 
          border: '5px solid #fff', 
          borderTop: '5px solid #f093fb' 
        }}
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, ease: "linear", duration: 1 }}
      />
    </motion.div>
  );
};

export default LoadingTransition;