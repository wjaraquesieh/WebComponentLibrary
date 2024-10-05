import React from 'react';
import styled from 'styled-components';

type ImgProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const StyledImg = styled.div<{ disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => !props.disabled && 'darkblue'};
  }
`;

const Img: React.FC<ImgProps> = ({ disabled, onClick, children }) => {
  return (
    <StyledImg disabled={disabled} onClick={onClick}>
      {children}
    </StyledImg>
  );
};

export default Img;
