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

    });

});