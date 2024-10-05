import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Image: React.FC<ImageProps> = ({ disabled, src, alt }) => {
  return <StyledImage disabled={disabled} src={src} alt={alt} />;
};

export default Image;
