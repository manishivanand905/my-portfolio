import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../../data/skills';
import SkillSphere from './SkillSphere';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 70px;
`;

const SkillChart = () => {
  return (
    <SkillsGrid>
      {skillsData.map((skill, index) => (
        <SkillSphere key={index} skill={skill} index={index} />
      ))}
    </SkillsGrid>
  );
};

export default SkillChart;