import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterPage from './Register.page';

test('renders register page', () => {
  render(<RegisterPage />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
