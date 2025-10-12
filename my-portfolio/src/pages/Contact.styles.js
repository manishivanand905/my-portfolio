import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactPageContainer = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 50px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 120px 20px 60px;
  }
`;

export const HeaderContainer = styled(motion.div)`
  text-align: left;
  margin-bottom: 60px;
  width: 100%;
  max-width: 1200px;
`;

export const MainHeader = styled.h1`
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

export const SubHeader = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-top: 10px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 120px;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    padding-left: 30px;
  }
`;

export const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  margin-bottom: 40px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-size: 1.1rem;

  svg {
    margin-right: 20px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const SocialsContainer = styled.div`
  margin-top: auto;
  padding-top: 40px;
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  font-size: 24px;
  color: ${({ theme }) => (theme.body === "#FFF" ? "#363537" : "#FAFAFA")};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) =>
      theme.body === "#FFF" ? "#0077b5" : "#81CAFC"}; /* highlight color */
    transform: translateY(-5px);
  }
`;
