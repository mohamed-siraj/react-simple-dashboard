import React from 'react';
import { render, screen } from '@testing-library/react';
import LogOutDashboardComponent from './log-out.dashboard-component';

test('renders log out component', () => {
  render(<LogOutDashboardComponent />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
