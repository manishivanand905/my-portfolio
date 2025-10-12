import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IntroContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
  gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 360px; // Reduced from 400px
  height: 432px; // Reduced from 480px
  margin: 0;
  margin-top: 2rem;
  border-radius: 32px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: 315px; // Reduced from 350px
    height: 378px; // Reduced from 420px
  }

  @media (max-width: 1024px) {
    width: 290px; // Reduced from 320px
    height: 348px; // Reduced from 380px
    margin: 0 auto; // Center on smaller screens where layout stacks
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 250px; // Reduced from 280px
    height: 300px; // Reduced from 340px
  }

  @media (max-width: 480px) {
    width: 215px; // Reduced from 240px
    height: 258px; // Reduced from 300px
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 32px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;

  &:hover {
    transform: scale(1.08);
    filter: brightness(1.1);
  }
`;

export const TextContainer = styled.div`
  padding-top: 1rem; // Align with image padding

  @media (min-width: 992px) {
    padding-top: 2rem;
  }

  @media (min-width: 1200px) {
    padding-top: 3rem;
  }
`;

export const BioParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text}E6; // Slightly transparent
  margin-bottom: 1.5rem;
`;

export const SkillsHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const SkillTag = styled(motion.div)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)')};
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => (theme.body === '#FFF' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)')};
    transform: translateY(-3px);
  }

  i {
    font-size: 1.2rem;
    color: #81caec;
  }
`;