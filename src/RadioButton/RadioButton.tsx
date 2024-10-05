import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? 'grey' : 'black')};
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  checked,
  onChange,
  label,
  name,
  value,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
