/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './Login.page';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import { toast } from 'react-toastify';
import StorageService from '../../services/storage/Storage.service';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    warning: jest.fn(),
  },
}));

jest.mock('../../services/storage/Storage.service');

describe('Login component test', () => {

  test('login page successfully rendering', async () => {

    await TestRenderer.act(() => {
      render(<BrowserRouter><LoginPage initLoading={false} /></BrowserRouter>);
    });

    const linkElement = screen.getByText('Senior Software Engineer');
    expect(linkElement).toBeInTheDocument();
  });

  test('check all components are there in login page', async () => {

    await TestRenderer.act(() => {
      render(<BrowserRouter><LoginPage initLoading={false} /></BrowserRouter>);
    });

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

    const loginBtn = screen.getByRole('button', { name: 'Login' });
    expect(loginBtn).toBeInTheDocument();


  });

  test('check form submit validation', async () => {

    await TestRenderer.act(() => {
      render(<BrowserRouter><LoginPage initLoading={false} /></BrowserRouter>);
    });

    //get button element and trigger click event
    const submitBtn = screen.getByRole('button', { name: 'Register' });

    // if react state handle inside of this submit area we should use act function from test library
    await TestRenderer.act(() => {
      fireEvent.submit(submitBtn);
    });

    //get validation event check email validation
    const emailValidation = screen.getByText('email is a required field');
    expect(emailValidation).toBeInTheDocument();
    //password validation
    const passwordValidation = screen.getByText('password must be at least 5 characters');
    expect(passwordValidation).toBeInTheDocument();

  });

  test('form submit unsuccessfully', async () => {

    await TestRenderer.act(async () => {
      render(<BrowserRouter><LoginPage initLoading={false} /></BrowserRouter>);
    });

    await userEvent.type(screen.getByTestId('email'), 'mohamedsiraj1@siraj.lk');
    await userEvent.type(screen.getByTestId('password'), 'followme1');

    //get button element and trigger click event
    const submitBtn = screen.getByRole('button', { name: 'Register' });

    await TestRenderer.act(() => {
      fireEvent.submit(submitBtn);
    });

    expect(toast.warning).toHaveBeenCalled();

  });

  test('form submit successfully', async () => {

    await TestRenderer.act(async () => {
      render(<BrowserRouter><LoginPage initLoading={false} /></BrowserRouter>);
    });

    await userEvent.type(screen.getByTestId('email'), 'mohamedsiraj@siraj.lk');
    await userEvent.type(screen.getByTestId('password'), 'followme');

    //get button element and trigger click event
    const submitBtn = screen.getByRole('button', { name: 'Register' });

    await TestRenderer.act(() => {
      fireEvent.submit(submitBtn);
    });


  });

  test('Loading component check', async () => {
    await TestRenderer.act(() => {
      render(<BrowserRouter><LoginPage initLoading={true} /></BrowserRouter>);
    });

    const textLoading = screen.getByText('Loading...');
    expect(textLoading).toBeInTheDocument();

  });

});


