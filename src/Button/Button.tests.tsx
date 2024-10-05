import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the button', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeVisible();
});

test('button is disabled', () => {
  render(<Button disabled>Click me</Button>);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toHaveStyle('cursor: not-allowed');
});
