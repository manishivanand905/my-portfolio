import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  animation: ${fadeIn} 0.8s ease-out 0.4s;
  animation-fill-mode: backwards;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`;

export const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const ExperienceItemCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const Company = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const Role = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

export const Period = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
`;
