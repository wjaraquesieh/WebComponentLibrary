import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const StyledDropdown = styled.div<{ disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => !props.disabled && 'darkblue'};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ disabled, onClick, children }) => {
  return (
    <StyledDropdown disabled={disabled} onClick={onClick}>
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
