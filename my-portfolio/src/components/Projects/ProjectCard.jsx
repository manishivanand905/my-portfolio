import React from "react";
import { motion } from "framer-motion";

import {
  Card,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  Tag,
} from "./ProjectCube.styles";

const ProjectCard = ({ project, index }) => {
  return (
    <Card
      as={motion.div}
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      whileHover={{ scale: 1.03, y: -12 }}
    >
      <div>
        <div style={{ fontSize: "60px", marginBottom: "20px" }}>
          {project.image}
        </div>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </div>
      <ProjectTags>
        {project.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </ProjectTags>
    </Card>
  );
};

export default ProjectCard;
