import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListDashboardComponent from './User-list.dashboard-component';

test('renders user list component', () => {
  render(<UserListDashboardComponent />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
