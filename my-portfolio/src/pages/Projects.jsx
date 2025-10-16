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
  {
    title: "Match Game",
    description:
      "The Match Game is a fast-paced image-matching game built with React.js, designed to test the user’s ability to quickly identify and match images under a countdown timer. This interactive game dynamically updates based on user interactions, ensuring an engaging and challenging experience.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Match-Game",
    liveLink: "https://mgame1.ccbp.tech/",
    image: "matchgame.jpg",
  },
  {
    title: "Digital Timer App",
    description:
      "The Digital Timer App is a user-friendly application that allows users to set, start, pause, and reset a countdown timer. Built with React.js, it features an intuitive interface and responsive design, making it easy to manage time effectively for various tasks and activities.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Digital-Timer-App",
    liveLink: "https://digitimerapp1.ccbp.tech/",
    image: "digitaltimer.jpg",
  },
  {
    title: "Stopwatch App",
    description:
      "The Stopwatch App is a simple and efficient tool for measuring elapsed time, featuring start, stop, and reset functionalities. Built with React.js, it offers a clean and intuitive interface, making it easy for users to track time for various activities.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Stopwatch",
    liveLink: "https://stopwatch010.ccbp.tech/",
    image: "stopwatch.jpg",
  },
  {
    title: "Password Manager",
    description:
      "The Password Manager is a secure application that helps users store and manage their passwords efficiently. It features a user-friendly interface, allowing users to add, view, and delete passwords, with an emphasis on security and ease of use.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Password-Manager",
    liveLink: "https://passmanager10.ccbp.tech/",
    image: "passwordmanager.jpg",
  },
  {
    title: "IPL Dashboard App",
    description:
      "The IPL Dashboard App is a comprehensive platform that provides detailed statistics and insights about the Indian Premier League (IPL) cricket tournament. It features an intuitive interface for users to explore team performances, player statistics, and match outcomes, making it a valuable resource for cricket enthusiasts.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/IPL-Dashboard-App",
    liveLink: "https://ipldashboardaa.ccbp.tech/",
    image: "ipldashboard.jpg",
  },
  {
    title: "Fetch And Routing Practice",
    description:
      "The Fetch And Routing Practice project is a web application that demonstrates the use of data fetching and client-side routing in React. It features dynamic content loading and seamless navigation between different views, providing an interactive user experience.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink:
      "https://github.com/manishivanand905/Fetch-And-Routing-Practice",
    liveLink: "https://fetchrout001.ccbp.tech/",
    image: "fetchrouting.jpg",
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "The Cryptocurrency Tracker is a web application that provides temporary information on various cryptocurrencies, including their prices, market trends, and historical data. Built with React.js, it offers an intuitive interface for users to monitor and analyze the performance of different digital assets in the crypto market.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Cryptocurrency-Tracker",
    liveLink: "https://cryptotrackk.ccbp.tech/",
    image: "cryptotracker.jpg",
  },
  {
    title: "Emoji Game",
    description:
      "The Emoji Game is an interactive web application that challenges users to click on unique emojis without repeating any selections. Built with React.js, it features a dynamic interface that tracks user scores and provides instant feedback, making it a fun and engaging experience for players of all ages.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Emoji-Game",
    liveLink: "https://emojigame501.ccbp.tech/",
    image: "emojigame.jpg",
  },
  {
    title: "FAQS app",
    description:
      "The FAQS App is a user-friendly web application that provides answers to frequently asked questions in an organized manner. Built with React.js, it features an intuitive interface that allows users to easily navigate through various topics and find the information they need quickly.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Faqs-App",
    liveLink: "https://frequentaqsapp.ccbp.tech/",
    image: "faqsapp.jpg",
  },
  {
    title: "Registration Form",
    description:
      "The Registration Form is a simple and efficient web application that allows users to sign up by providing their personal information. Built with React.js, it features a clean and intuitive interface, making it easy for users to complete the registration process quickly and securely.",
    techStack: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/manishivanand905/Registration-Form",
    liveLink: "https://applfomrs01.ccbp.tech/",
    image: "registrationform.jpg",
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
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
