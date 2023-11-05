import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCreateUpdateDashboardComponent from './User-create-update.dashboard-component';

test('renders user create update component', () => {
  render(<UserCreateUpdateDashboardComponent />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
