import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? 'grey' : 'black')};

  @media (max-width: 600px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const Text: React.FC<TextProps> = ({ disabled, children }) => {
  return <StyledText disabled={disabled}>{children}</StyledText>;
};

export default Text;
