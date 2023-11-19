import React from 'react';
import * as axios from "axios";
import { render, screen } from '@testing-library/react';
import LoginPage from './Login.page';
import { BrowserRouter } from 'react-router-dom';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

test('login page successfully rendering', () => {
  render(<BrowserRouter><LoginPage /></BrowserRouter>);
  const linkElement = screen.getByText('Senior Software Engineer');
  expect(linkElement).toBeInTheDocument();
});
