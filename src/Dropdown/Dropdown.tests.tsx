import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders the dropdown', () => {
  render(
    <Dropdown
      options={[{ label: 'Option 1', value: '1' }]}
    />
  );
  const optionElement = screen.getByText(/Option 1/i);
  expect(optionElement).toBeVisible();
});

test('dropdown is disabled', () => {
  render(
    <Dropdown
      disabled
      options={[{ label: 'Option 1', value: '1' }]}
    />
  );
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeDisabled();
});
