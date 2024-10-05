import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders the text', () => {
  render(<Text>Sample text</Text>);
  const textElement = screen.getByText(/Sample text/i);
  expect(textElement).toBeVisible();
});

test('text is disabled', () => {
  render(<Text disabled>Disabled text</Text>);
  const textElement = screen.getByText(/Disabled text/i);
  expect(textElement).toHaveStyle('color: grey');
});
