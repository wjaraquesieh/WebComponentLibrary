import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders the radio button', () => {
  render(<RadioButton label="Option 1" name="options" value="1" />);
  const labelElement = screen.getByText(/Option 1/i);
  expect(labelElement).toBeVisible();
});

test('radio button is disabled', () => {
  render(<RadioButton disabled label="Option 1" name="options" value="1" />);
  const inputElement = screen.getByRole('radio');
  expect(inputElement).toBeDisabled();
});
