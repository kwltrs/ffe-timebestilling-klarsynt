import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Bestill time-headline', () => {
  const { getByText } = render(<App />);
  const headlineElement = getByText(/bestill time hos klarsynt/i);
  expect(headlineElement).toBeInTheDocument();
});
