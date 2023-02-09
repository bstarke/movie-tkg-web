import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.queryByText(/My Movie Collection/i);
  expect(linkElement).toBeInTheDocument();
});
