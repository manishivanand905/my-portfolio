import React from 'react';
import styled from 'styled-components';
import ProjectCube from './ProjectCube';
import { projectsData } from '../../data/projects';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 40px;
  margin-top: 70px;
`;

const ProjectGrid = () => {
  return (
    <Grid>
      {projectsData.map((project, index) => (
        <ProjectCube key={project.id} project={project} index={index} />
      ))}
    </Grid>
  );
};

export default ProjectGrid;