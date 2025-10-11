import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  LogoSection,
  Logo,
  LogoText,
  Description,
  SocialLinks,
  SocialIcon,
  QuickLinksSection,
  SectionTitle,
  LinksList,
  LinkItem,
  FooterLink,
  ContactSection,
  ContactItem,
  ContactIcon,
  ContactText,
  BottomBar,
  Copyright,
} from "./Footer.styles";

const Footer = ({ setActivePage, theme }) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/manishivanand905/",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mani-shivanand-b05908227/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/im_shiva_nand/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Shadnagar, 509202", type: "location" },
    { icon: <FaPhoneAlt />, text: "+91 7416161249", type: "phone" },
    { icon: <FaEnvelope />, text: "shivanandmani003@gmail.com", type: "email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <FooterContainer theme={theme}>
      <FooterContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <FooterSection as={motion.div} variants={itemVariants}>
          <LogoSection>
            <Logo theme={theme}>
              <span>M</span>
            </Logo>
            <LogoText theme={theme}>Mani's Portfolio</LogoText>
          </LogoSection>
          <Description theme={theme}>
            Creative developer focused on building modern, responsive and
            user-friendly web applications with attention to detail and
            performance.
          </Description>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                as={motion.a}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </SocialLinks>
        </FooterSection>

        <QuickLinksSection as={motion.div} variants={itemVariants}>
          <SectionTitle theme={theme}>Quick Links</SectionTitle>
          <LinksList>
            {quickLinks.map((link, index) => (
              <LinkItem key={link.id} as={motion.li} whileHover={{ x: 5 }}>
                <FooterLink
                  theme={theme}
                  onClick={() => setActivePage(link.id)}
                >
                  › {link.label}
                </FooterLink>
              </LinkItem>
            ))}
          </LinksList>
        </QuickLinksSection>

        <ContactSection as={motion.div} variants={itemVariants}>
          <SectionTitle theme={theme}>Contact</SectionTitle>
          <LinksList>
            {contactInfo.map((info, index) => (
              <ContactItem key={index} as={motion.li} whileHover={{ x: 5 }}>
                <ContactIcon>{info.icon}</ContactIcon>
                <ContactText theme={theme}>{info.text}</ContactText>
              </ContactItem>
            ))}
          </LinksList>
        </ContactSection>
      </FooterContent>

      <BottomBar theme={theme}>
        <Copyright theme={theme}>
          © 2025 Mani Shivanand's Portfolio. All rights reserved.
        </Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
