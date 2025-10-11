import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutPageContainer = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 50px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 120px 20px 60px;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.8rem, 6vw, 3.5rem);
  margin-bottom: 25px;
  background: ${({ theme }) =>
    theme.body === '#FFF'
      ? `linear-gradient(135deg, ${theme.text} 0%, ${theme.text} 100%)`
      : 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1.5px;
  text-align: left;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 auto 50px auto;
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

export const ResumeButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)')};
  border: 1.5px solid ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.25)')};
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  i,
  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    padding-bottom: 150%;
    border-radius: 50%;
    background: ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)')};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    border-color: ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)')};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;
