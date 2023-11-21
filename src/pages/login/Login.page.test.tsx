/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from '@testing-library/react';
import LoginPage from './Login.page';
import { BrowserRouter } from 'react-router-dom';

describe('Login component test', () => {

  test('login page successfully rendering', () => {
    render(<BrowserRouter><LoginPage /></BrowserRouter>);
    const linkElement = screen.getByText('Senior Software Engineer');
    expect(linkElement).toBeInTheDocument();
  });

  test('check all components are there in login page', async () => {
    
    render(<BrowserRouter><LoginPage /></BrowserRouter>);

    /**
     * check filed and button there in login page
     */
    const emailLabel = screen.getByText('Email address');
    expect(emailLabel).toBeInTheDocument();

    const passwordLabel = screen.getByText('Password');
    expect(passwordLabel).toBeInTheDocument();

    const emailInput = screen.getByTestId('email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('password');
    expect(passwordInput).toBeInTheDocument();

    const loginBtn = screen.getByRole('button', {name: 'Login'});
    expect(loginBtn).toBeInTheDocument();

  });

  test('check form submit validation', async () => {
    
    render(<BrowserRouter><LoginPage /></BrowserRouter>);
    //get button element and trigger click event
    const submitBtn = screen.getByRole('button', {name: 'Register'});
    
    // if react state handle inside of this submit area we should use act function from test library
    await act(() => {
      fireEvent.submit(submitBtn);
    });

    //get validation event check email validation
    const emailValidation =  screen.getByText('email is a required field');
    expect(emailValidation).toBeInTheDocument();
    //password validation
    const passwordValidation =  screen.getByText('password must be at least 5 characters');
    expect(passwordValidation).toBeInTheDocument();

  });

});


