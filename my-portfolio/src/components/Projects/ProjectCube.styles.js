import styled from "styled-components";

export const Card = styled.div`
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 18px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 16px;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 8px 18px;
  border-radius: 25px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;
