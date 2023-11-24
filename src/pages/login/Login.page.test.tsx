import { BrowserRouter } from 'react-router-dom';
import LoginPage from './Login.page';
import { screen, render } from '@testing-library/react';

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

    });

});