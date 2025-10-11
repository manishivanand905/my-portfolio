import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterContainer = styled.footer`
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(54, 53, 55, 0.5)"};
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  border-top: 1px solid
    ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};
  position: relative;
  width: 100%;
  margin-top: 80px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      135deg,
      transparent 30%,
      ${(props) =>
          props.theme.body === "#FFF"
            ? "rgba(54, 53, 55, 0.03)"
            : "rgba(255, 255, 255, 0.03)"}
        50%,
      transparent 70%
    );
    transform: rotate(45deg);
    animation: shimmerFooter 10s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes shimmerFooter {
    0%,
    100% {
      transform: translateX(-30%) translateY(-30%) rotate(45deg);
    }
    50% {
      transform: translateX(30%) translateY(30%) rotate(45deg);
    }
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px 30px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 50px 30px 25px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 40px 20px 20px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 5px;
`;

export const LogoText = styled.h3`
  font-size: 22px;
  font-weight: 700;
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "linear-gradient(135deg, #363537 0%, #555 100%)"
      : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  margin: 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
`;

export const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin: 0 0 5px 0;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${(props) =>
      props.theme.body === "#FFF"
        ? "linear-gradient(90deg, #363537, #555)"
        : "linear-gradient(90deg, #FAFAFA, #FFF)"};
    border-radius: 2px;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.text};
  opacity: 0.75;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    opacity: 1;
    color: ${(props) => (props.theme.body === "#FFF" ? "#000" : "#FFF")};
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  font-size: 14px;
  margin: 0;
  letter-spacing: 0.3px;
`;
export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 5px;
`;

export const SocialIcon = styled(motion.a)`
  font-size: 24px;
  color: ${({ theme }) => (theme.body === "#FFF" ? "#363537" : "#FAFAFA")};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) =>
      theme.body === "#FFF" ? "#0077b5" : "#81CAFC"}; /* highlight color */
  }
`;
export const ContactIcon = styled.span`
  font-size: 20px;
  margin-right: 12px;
  color: ${({ theme }) => (theme.body === "#FFF" ? "#363537" : "#FAFAFA")};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;

  svg {
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #81cafc; /* Accent color for hover */
  }
`;

export const ContactText = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  word-break: break-word;
`;

export const BottomBar = styled.div`
  border-top: 1px solid
    ${(props) =>
      props.theme.body === "#FFF"
        ? "rgba(54, 53, 55, 0.1)"
        : "rgba(255, 255, 255, 0.1)"};
  padding: 20px 40px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 18px 20px;
  }
`;

export const Logo = styled.div`
  width: 45px;
  height: 45px;
  background: ${(props) =>
    props.theme.body === "#FFF"
      ? "linear-gradient(135deg, #363537 0%, #555 100%)"
      : "linear-gradient(135deg, #FAFAFA 0%, #FFF 100%)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => (props.theme.body === "#FFF" ? "#FFF" : "#363537")};
  box-shadow: ${(props) =>
    props.theme.body === "#FFF"
      ? "0 4px 15px rgba(54, 53, 55, 0.2)"
      : "0 4px 15px rgba(255, 255, 255, 0.2)"};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
