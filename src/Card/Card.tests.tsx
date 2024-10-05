import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders the card', () => {
  const { container } = render(<Card>Card Content</Card>);
  expect(container.firstChild).toBeVisible();
});

test('card is disabled', () => {
  const { container } = render(<Card disabled>Card Content</Card>);
  expect(container.firstChild).toHaveStyle('opacity: 0.6');
});
