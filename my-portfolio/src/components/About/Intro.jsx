import React from "react";
import {
  IntroContainer,
  ImageWrapper,
  ProfileImage,
  TextContainer,
  BioParagraph,
  SkillsHeader,
  SkillsGrid,
  SkillItem,
} from "./Intro.styles";

const skills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Python", icon: "fab fa-python" },
  { name: "SQL", icon: "fas fa-database" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "Express.js", icon: "fab fa-node-js" },
  { name: "WordPress", icon: "fab fa-wordpress" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "VS Code", icon: "fas fa-code" },
  { name: "Microsoft Office", icon: "fas fa-file-word" },
];

const Intro = () => {
  return (
    <IntroContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <ImageWrapper>
        {/* Reminder: Replace this with your actual image in /public/profile-image.png */}
        <ProfileImage
          src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/ec5c7f61-9c39-42c2-a6a4-15b6373d5ef6.jpeg"
          alt="M. Shivanand"
        />
      </ImageWrapper>

      <TextContainer>
        <BioParagraph>
          I'm a passionate Full Stack Developer with expertise in ReactJS,
          Node.js, and SQL, dedicated to crafting scalable, functional, and
          user-centered digital experiences. My approach combines technical
          proficiency with creative problem-solving to build high-performance
          web applications that enhance user engagement and efficiency.
        </BioParagraph>
        <BioParagraph>
          I thrive on solving real-world problems through innovative web
          solutions. Whether it's optimizing performance, enhancing user
          experience, or integrating cutting-edge technologies, I am always
          eager to push boundaries and create impact.
        </BioParagraph>

        <SkillsHeader>
          Here are a few technologies I've been working with recently:
        </SkillsHeader>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillItem
              key={skill.name}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </SkillItem>
          ))}
        </SkillsGrid>
      </TextContainer>
    </IntroContainer>
  );
};

export default Intro;