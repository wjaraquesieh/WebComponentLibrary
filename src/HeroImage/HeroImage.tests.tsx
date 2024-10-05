import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders the hero image', () => {
  const { container } = render(
    <HeroImage backgroundImage="test.jpg">Hero Content</HeroImage>
  );
  expect(container.firstChild).toBeVisible();
});

test('hero image is disabled', () => {
  const { container } = render(
    <HeroImage disabled backgroundImage="test.jpg">
      Hero Content
    </HeroImage>
  );
  expect(container.firstChild).toHaveStyle('opacity: 0.5');
});
