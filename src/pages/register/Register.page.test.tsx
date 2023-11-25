import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./Register.page";


/**
 * global function
 */
const GlobalFunction = () => {
    return {
        registerPage: function() {
            render(<BrowserRouter><RegisterPage/></BrowserRouter>)
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

            const btnRegister = screen.getByRole('button',{name: 'Register'});
            expect(btnRegister).toBeInTheDocument();

            const btnBack = screen.getByRole('button',{name: 'Back'});
            expect(btnBack).toBeInTheDocument();
        });

    });

    describe('login page form submit', () => {

        

    });

});