import React, { useState, useEffect } from 'react';
import { SkillBar, SkillProgress as SkillProgressBar } from './SkillProgress.styles';

const SkillProgress = ({ level }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <SkillBar>
      <SkillProgressBar style={{ width: animated ? `${level}%` : '0%' }} />
    </SkillBar>
  );
};

export default SkillProgress;
