import { render, fireEvent, getByTestId } from '@testing-library/react';
import Page2 from './index';
import { AuthProvider } from 'lib/context/AuthContext';
const mockPage2 = () => {
    return (
        <AuthProvider>
            <Page2 />
        </AuthProvider>
    )
}
describe('PAGE_2', () => {
    it('renders the page2', () => {
        const { getByTestId } = render(<Page2 />);
        const heading = getByTestId("heading");
        expect(heading.textContent).toContain('User: logout');
    });
    it('calls the login function when the Login button is clicked', () => {
        const { getByText } = render(<Page2 />);
        const loginButton = getByText('Login');
        const mockLoginFn = jest.fn();
        loginButton.onclick = mockLoginFn;
        fireEvent.click(loginButton);
        expect(mockLoginFn).toHaveBeenCalled();
    });
    it('calls the logout function when the Logout button is clicked', () => {
        const { getByText } = render(<Page2 />);
        const logoutButton = getByText('Logout');
        const mockLogoutFn = jest.fn();
        logoutButton.onclick = mockLogoutFn;
        fireEvent.click(logoutButton);
        expect(mockLogoutFn).toHaveBeenCalled();
    });
    it('displays correct text when login button is clicked', () => {
        const { getByText, getByTestId } = render(mockPage2());
        const loginButton = getByText('Login');
        fireEvent.click(loginButton);
        const heading = getByTestId('heading');
        expect(heading.textContent).toEqual('User: login');
    });
    it('displays correct text when logout button is clicked', () => {
        const { getByText, getByTestId } = render(mockPage2());
        const logoutButton = getByText('Logout');
        fireEvent.click(logoutButton);
        const heading = getByTestId('heading');
        expect(heading.textContent).toEqual('User: logout');
    });
});
