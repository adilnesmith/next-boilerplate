import { render, screen } from '@testing-library/react';
import Profile from './index';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
describe('PROFILE', () => {
    it('renders the profile', () => {
        render(<Profile />);
        // const column1 = screen.getByTestId('profile');
        // expect(column1).toBeInTheDocument();
        // expect(column1).toBeVisible();
    });

});
