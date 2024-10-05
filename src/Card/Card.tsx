import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid ${(props) => (props.disabled ? 'grey' : '#ccc')};
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const Card: React.FC<CardProps> = ({ disabled, children }) => {
  return <StyledCard disabled={disabled}>{children}</StyledCard>;
};

export default Card;
