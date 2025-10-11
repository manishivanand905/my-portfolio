import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  border-radius: 32px;
  padding: 35px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: liquidMorph 12s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.7s;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 32px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      0 0 80px rgba(129, 202, 252, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:hover::after {
    opacity: 1;
  }
`;