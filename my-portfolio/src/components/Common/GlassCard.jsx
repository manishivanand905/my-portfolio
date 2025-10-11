import React from 'react';
import { Card } from './GlassCard.styles';

const GlassCard = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default GlassCard;