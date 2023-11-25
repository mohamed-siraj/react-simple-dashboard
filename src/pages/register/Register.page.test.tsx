/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Register.page";
import ApiService from "../../services/api/Api.service";


/**
 * global function
 */
const GlobalFunction = () => {
    return {
        registerPage: function () {
            render(<BrowserRouter><RegisterPage /></BrowserRouter>)
        }
    }
};

describe('register page', () => {

    describe('register page is rendering', () => {

        test('check successfully rendering register page', async () => {
            GlobalFunction().registerPage();
            const screenText = screen.getByText('Registration');
            expect(screenText).toBeInTheDocument();
        });

        test('check all components are working', () => {
            GlobalFunction().registerPage();

            const inputEmail = screen.getByTestId('email');
            expect(inputEmail).toBeInTheDocument();

            const inputPassword = screen.getByTestId('password');
            expect(inputPassword).toBeInTheDocument();

            const inputConfirmPassword = screen.getByTestId('confirmPassword');
            expect(inputConfirmPassword).toBeInTheDocument();

            const btnRegister = screen.getByRole('button', { name: 'Register' });
            expect(btnRegister).toBeInTheDocument();

            const btnBack = screen.getByRole('button', { name: 'Back' });
            expect(btnBack).toBeInTheDocument();
        });

    });

    describe('registerw page form submit', () => {

        test('unsuccessful submit', async () => {
            render(<BrowserRouter><RegisterPage /></BrowserRouter>);

            const rgBtn = screen.getByRole('button', { name: 'Register' });
            await act(() => {
                fireEvent.click(rgBtn);
            });

            const errorEmail = screen.getByText('email is a required field');
            expect(errorEmail).toBeInTheDocument();

            const errorPassword = screen.getByText('password must be at least 5 characters');
            expect(errorPassword).toBeInTheDocument();

            const errorConfirmPassword = screen.getByText('confirmPassword must be at least 5 characters');
            expect(errorConfirmPassword).toBeInTheDocument();

        });

        test('successful submit', async () => {
            const mockOnSUbmit = jest.fn();
            render(<BrowserRouter><RegisterPage mockOnSUbmit={mockOnSUbmit} /></BrowserRouter>);

            const inputEmail = screen.getByTestId('email');
            await act(() => {
                fireEvent.change(inputEmail, { target: { value: 'mohamedsiraj@siraj.lk' } });
            });

            const inputPassword = screen.getByTestId('password');
            await act(() => {
                fireEvent.change(inputPassword, { target: { value: 'followme' } });
            });

            const inputConfirmPassword = screen.getByTestId('confirmPassword');
            await act(() => {
                fireEvent.change(inputConfirmPassword, { target: { value: 'followme' } });
            });

            const rgBtn = screen.getByRole('button', { name: 'Register' });
            await act(() => {
                fireEvent.click(rgBtn);
            });

            expect(mockOnSUbmit).toHaveBeenCalledTimes(1);

        });

    });

    describe('api call testing', () => {

        test('register api call', async () => {


            const mockData = {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            };

            const apiService = new ApiService();
            const response = await apiService.register(mockData);

            expect(response?.status).toBe(200);
        });

    });
});