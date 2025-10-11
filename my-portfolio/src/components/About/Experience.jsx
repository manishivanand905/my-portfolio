
import React from 'react';
import { experienceData } from '../../data/experience';
import {
  ExperienceContainer,
  SectionTitle,
  ExperienceList,
  ExperienceItemCard,
  ItemHeader,
  IconWrapper,
  Company,
  Role,
  Period,
  Description,
} from './Experience.styles';

const Experience = () => {
  return (
    <ExperienceContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceList>
        {experienceData.map((job, index) => (
          <ExperienceItemCard key={index}>
            <ItemHeader>
              <IconWrapper>
                <i className="fas fa-briefcase"></i>
              </IconWrapper>
              <Company>{job.company}</Company>
            </ItemHeader>
            <Role>{job.role}</Role>
            <Period>{job.period} | {job.location}</Period>
            <Description>{job.description}</Description>
          </ExperienceItemCard>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default Experience;
