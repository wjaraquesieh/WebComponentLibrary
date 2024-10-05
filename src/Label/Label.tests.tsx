import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders the label', () => {
  render(<Label>Label Text</Label>);
  const labelElement = screen.getByText(/Label Text/i);
  expect(labelElement).toBeVisible();
});

test('label is disabled', () => {
  render(<Label disabled>Disabled Label</Label>);
  const labelElement = screen.getByText(/Disabled Label/i);
  expect(labelElement).toHaveStyle('cursor: not-allowed');
});
