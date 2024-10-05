import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './Image';

test('renders the image', () => {
  render(<Image src="test.jpg" alt="Test Image" />);
  const imageElement = screen.getByAltText(/Test Image/i);
  expect(imageElement).toBeVisible();
});

test('image is disabled', () => {
  render(<Image disabled src="test.jpg" alt="Disabled Image" />);
  const imageElement = screen.getByAltText(/Disabled Image/i);
  expect(imageElement).toHaveStyle('opacity: 0.5');
});
