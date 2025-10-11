import styled from 'styled-components';
import GlassCard from '../Common/GlassCard';

export const AboutCardContainer = styled(GlassCard)`
  text-align: center;
  padding: 45px 35px;
`;

export const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  font-size: 40px;
  animation: float 4s ease-in-out infinite;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
`;