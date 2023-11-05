import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListComponent from './User-list.component';

test('renders user list component', () => {
  render(<UserListComponent />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});
