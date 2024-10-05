import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => !props.disabled && 'darkblue'};
  }
`;

const Button: React.FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
