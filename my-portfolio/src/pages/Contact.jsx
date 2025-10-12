import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "../components/Contact/ContactForm";
import { personalData } from "../data/personal";
import {
  ContactPageContainer,
  HeaderContainer,
  MainHeader,
  SubHeader,
  ContentContainer,
  InfoContainer,
  InfoText,
  InfoItem,
  SocialsContainer,
  SocialIcon,
} from "./Contact.styles";

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  return (
    <ContactPageContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeaderContainer
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <MainHeader>Get In Touch</MainHeader>
      </HeaderContainer>

      <ContentContainer>
        <InfoContainer
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <SubHeader>Let’s Talk</SubHeader>
            <InfoText>
              I'm currently available to take on new projects and Open to Work.
              If you have a project in mind or just want to say hello, feel free
              to reach out.
            </InfoText>
            <InfoItem>
              <FaEnvelope />
              <span>{personalData.email}</span>
            </InfoItem>
            <InfoItem>
              <FaPhoneAlt />
              <span>{personalData.phone}</span>
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              <span>{personalData.location}</span>
            </InfoItem>
          </div>
          <SocialsContainer>
            <SocialIcon
              href="https://github.com/manishivanand905/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/mani-shivanand-b05908227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon
              href="https://instagram.com/im_shiva_nand/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
          </SocialsContainer>
        </InfoContainer>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </ContentContainer>
    </ContactPageContainer>
  );
};

export default Contact;
