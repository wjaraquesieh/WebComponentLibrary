import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? 'grey' : 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Label: React.FC<LabelProps> = ({ disabled, children, htmlFor }) => {
  return (
    <StyledLabel disabled={disabled} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;
