/* eslint-disable testing-library/no-unnecessary-act */
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './Login.page';
import { screen, render, fireEvent, act } from '@testing-library/react';
import ApiService from '../../services/api/Api.service';

/**
 * global function
 */
const GlobalFunction = () => {
    return {
        loginPage: function() {
            render(<BrowserRouter><LoginPage/></BrowserRouter>)
        }
    }
};

describe('login page', () => {

    describe('login page is rendering', () => {

        test('check successfully rendering login page', async () => {
            GlobalFunction().loginPage();
            const screenText = screen.getByText('Demo Credentials');
            expect(screenText).toBeInTheDocument();
        });

        test('check necessary components are there', async () => {
            GlobalFunction().loginPage();
            
            const emailInput = screen.getByTestId('email');
            expect(emailInput).toBeInTheDocument();

            const passwordInput = screen.getByTestId('password');
            expect(passwordInput).toBeInTheDocument();

            const lgButton = screen.getByRole('button', {name:'Login'});
            expect(lgButton).toBeInTheDocument();

            const rgButton = screen.getByRole('button', {name:'Register'});
            expect(rgButton).toBeInTheDocument();

        });
    });

    describe('login page form submit', () => {

        test('unsuccessful submit', async() => {
            GlobalFunction().loginPage();

            // click button
            const lgButton = screen.getByRole('button', {name:'Login'});
            await act(() => {
                fireEvent.click(lgButton);
            });

            const emailErrorLabel = screen.getByText('email is a required field');
            expect(emailErrorLabel).toBeInTheDocument();

            const passwordErrorLabel = screen.getByText('password must be at least 5 characters');
            expect(passwordErrorLabel).toBeInTheDocument();

        });

        test('successful submit', async() => {

            const mockOnSubmit = jest.fn();

            render(<BrowserRouter><LoginPage mockOnSubmit={mockOnSubmit}/></BrowserRouter>)

            /**
             * set value
             */
            const emailInput = screen.getByTestId('email');
            await act(() => {
                fireEvent.change(emailInput, {target: {value : 'mohamedsiraj@siraj.lk'}});
            });

            const passwordInput = screen.getByTestId('password');
            await act(() => {
                fireEvent.change(passwordInput, {target: {value : 'followme'}});
            });

            // click button
            const lgButton = screen.getByRole('button', {name:'Login'});
            await act(() => {
                fireEvent.click(lgButton);
            });

            expect(mockOnSubmit).toHaveBeenCalledTimes(1);

        });

    });

    describe('api call testing', () => {

        test('login api call', async () => {

            const mockLoginData = {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            };

            const apiService = new ApiService();
            const response = await apiService.login(mockLoginData);

            expect(response?.status).toBe(200);
        });

    });


});