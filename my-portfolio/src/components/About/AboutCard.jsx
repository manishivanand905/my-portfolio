import React from 'react';
import { motion } from 'framer-motion';
import { AboutCardContainer, IconWrapper } from './AboutCard.styles';

const AboutCard = ({ icon, title, description, index }) => {
  return (
    <AboutCardContainer
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#ffffff', fontWeight: '600' }}>
        {title}
      </h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7', fontSize: '16px' }}>
        {description}
      </p>
    </AboutCardContainer>
  );
};

export default AboutCard;