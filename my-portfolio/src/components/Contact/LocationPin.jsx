import React from 'react';
import { personalData } from '../../data/personal';
import styled from 'styled-components';

const ContactInfo = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const LocationPin = () => {
  return (
    <ContactInfo>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '20px', fontSize: '16px' }}>
        Or reach me directly:
      </p>
      <ContactLinks>
        <ContactLink href={`mailto:${personalData.email}`}>
          📧 {personalData.email}
        </ContactLink>
        <ContactLink href={`tel:${personalData.phone}`}>
          📱 {personalData.phone}
        </ContactLink>
        <span style={{ color: 'rgba(255, 255, 255, 0.8)', padding: '10px 20px', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          📍 {personalData.location}
        </span>
      </ContactLinks>
    </ContactInfo>
  );
};

export default LocationPin;