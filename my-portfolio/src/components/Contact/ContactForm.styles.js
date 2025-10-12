import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text}e6;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text}4d;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}80;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.text}4d;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.text};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}80;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 8px;
  display: block;
`;