import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 750px;
  margin: 70px auto 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.1),
      0 0 30px rgba(255, 255, 255, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    transform: translateY(-2px);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  min-height: 160px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.1),
      0 0 30px rgba(255, 255, 255, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    transform: translateY(-2px);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 
      0 15px 50px rgba(0, 0, 0, 0.2),
      0 0 60px rgba(255, 255, 255, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.3) inset;
    border-color: rgba(255, 255, 255, 0.6);
  }

  &:hover::before {
    width: 400px;
    height: 400px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(-2px);
  }
`;

export const ErrorMessage = styled.span`
  color: #ffebee;
  background: rgba(244, 67, 54, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(244, 67, 54, 0.3);
  font-size: 14px;
  margin-top: 8px;
  display: block;
  padding: 8px 12px;
  border-radius: 10px;
`;