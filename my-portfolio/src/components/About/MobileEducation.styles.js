import styled from "styled-components";
import { breakpoints } from "../../styles/theme";

export const MobileEducationContainer = styled.div`
  padding: 30px 15px;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const EducationItem = styled.div`
  background: ${({ theme }) => theme.text}11;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text}22;
  padding: 15px;
  text-align: left;
`;

export const Institution = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

export const Degree = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 5px;
`;

export const Year = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
`;
