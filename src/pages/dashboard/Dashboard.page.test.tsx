import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from './Dashboard.page';

test('renders dashboard page', () => {
  render(<DashboardPage />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
