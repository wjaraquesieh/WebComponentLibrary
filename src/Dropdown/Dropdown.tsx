import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? 'grey' : 'white')};
`;

const Dropdown: React.FC<DropdownProps> = ({ disabled, options, onChange }) => {
  return (
    <StyledSelect disabled={disabled} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
