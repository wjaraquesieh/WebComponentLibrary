import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ backgroundImage: string; disabled?: boolean }>`
  background-image: url(${(props) => props.backgroundImage});
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

const HeroImage: React.FC<HeroImageProps> = ({ disabled, backgroundImage, children }) => {
  return (
    <HeroContainer disabled={disabled} backgroundImage={backgroundImage}>
      <HeroContent>{children}</HeroContent>
    </HeroContainer>
  );
};

export default HeroImage;
