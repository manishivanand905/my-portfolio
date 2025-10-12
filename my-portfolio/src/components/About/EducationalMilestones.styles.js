import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../../styles/theme";

export const MilestonesContainer = styled.div`
  padding: 50px 20px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 50px;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.text}22;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }
`;

export const Milestone = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }
`;

export const MilestoneIcon = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.text};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 1rem;
  color: ${({ theme }) => theme.body};

  ${Milestone}:nth-child(even) & {
    left: -18px;
  }
`;

export const MilestoneContent = styled.div`
  padding: 20px 30px;
  background: ${({ theme }) => theme.text}11;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.text}22;
  position: relative;
  text-align: left;
`;

export const Institution = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

export const Achievement = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
`;
