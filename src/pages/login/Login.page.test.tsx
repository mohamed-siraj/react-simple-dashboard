import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './Login.page';

test('renders login page', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
