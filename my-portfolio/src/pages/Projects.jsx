import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Data for the projects
const projectsData = [
  {
    title: "CarGenie Platform",
    description:
      "CarGenie is an intelligent car discovery and comparison platform that simplifies vehicle research with data-driven insights. It features detailed car specs, comparisons, and an intuitive admin portal for streamlined management.",
    techStack: ["React", "JavaScript", "Node JS", "MongoDB"],
    githubLink: "https://github.com/manishivanand905/CarGenie",
    liveLink: "https://car-genie-client.vercel.app/",
    image: "cargeani.jpg",
  },
  {
    title: "Comment App",
    description:
      "The Comments App is a web application that enables users to add, view, and interact with comments in a user-friendly interface. It is built using modern web technologies, focusing on efficient code organization and functionality.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Comments-App",
    liveLink: "https://reac",
    image: "commentApp.jpg",
  },
  {
    title: "RentEasy App",
    description:
      "RentEasy is a system used for monthly rental management, designed to collect rents and maintain detailed records of tenants, including their personal and rental information.",
    techStack: ["HTML5", "CSS3", "Node JS", "React JS", "MongoDB"],
    githubLink: "https://github.com/manishivanand905/Rental-Management-System",
    liveLink: "https://rental-management-system-1.onrender.com/",
    image: "rentEasy.jpg",
  },
];

// Styled Components
const ProjectsSection = styled(motion.section)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 50px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 120px 20px 60px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.8rem, 6vw, 3.5rem);
  margin-bottom: 25px;
  background: ${({ theme }) =>
    theme.body === "#FFF"
      ? `linear-gradient(135deg, ${theme.text} 0%, ${theme.text} 100%)`
      : "linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1.5px;
  text-align: left;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.text}22;
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
`;

const IconLink = styled.a`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ProjectsSection
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <SectionTitle variants={itemVariants}>My Projects</SectionTitle>
      <ProjectsGrid variants={sectionVariants}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
            </CardContent>
            <CardFooter>
              <IconLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </IconLink>
              <IconLink
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </IconLink>
            </CardFooter>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
