import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  HeroSection,
  HeroContent,
  HeroLeft,
  HeroRight,
  GreetingBadge,
  HeroTitle,
  NameHighlight,
  HeroSubtitle,
  SubtitleHighlight,
  HeroDescription,
  CTAButtonGroup,
  PrimaryCTA,
  SecondaryCTA,
  SocialLinks,
  SocialIcon,
  ProfileImageContainer,
  ProfileImage,
  ImageGlow,
} from "./Hero.styles";

function Hero({ setActivePage }) {
  const heroData = {
    greeting: "👋 Hello There",
    name: "𝑺𝒉𝒊𝒗𝒂𝒏𝒂𝒏𝒅",
    subtitle: "Frontend Developer",
    description:
      "Welcome to my digital space! I'm a passionate Full Stack Web Developer with expertise in ReactJS, Node.js, and SQL. I bring a problem-solving mindset to the world of web development. From crafting seamless frontend experiences to optimizing backend systems, I specialize in building scalable, dynamic, and intuitive applications. Explore my projects and experience the power of innovation in action!",
    profileImage:
      "	https://media-content.ccbp.in/ccbp_prod/media/profile_pic/ec5c7f61-9c39-42c2-a6a4-15b6373d5ef6.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/mani-shivanand-b05908227/",
      github: "https://github.com/manishivanand905/",
      instagram: "https://instagram.com/im_shiva_nand/",
    },
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroLeft>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GreetingBadge>{heroData.greeting}</GreetingBadge>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroTitle>
              I'm <NameHighlight>{heroData.name}</NameHighlight>
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroSubtitle>
              I'm a <SubtitleHighlight>{heroData.subtitle}</SubtitleHighlight>
            </HeroSubtitle>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HeroDescription>{heroData.description}</HeroDescription>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CTAButtonGroup>
              <PrimaryCTA
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePage("projects")}
              >
                View Projects
              </PrimaryCTA>
              <SecondaryCTA
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePage("contact")}
              >
                Contact Me
              </SecondaryCTA>
            </CTAButtonGroup>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialLinks>
              <SocialIcon
                href={heroData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialIcon>

              <SocialIcon
                href={heroData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialIcon>

              <SocialIcon
                href={heroData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </SocialIcon>
            </SocialLinks>
          </motion.div>
        </HeroLeft>

        <HeroRight>
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <ProfileImageContainer>
              <ImageGlow />
              <ProfileImage src={heroData.profileImage} alt={heroData.name} />
            </ProfileImageContainer>
          </motion.div>
        </HeroRight>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
