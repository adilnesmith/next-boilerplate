import { render, screen } from '@testing-library/react';
import Profile from './index';
import { act } from 'react-dom/test-utils';
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
describe('PROFILE', () => {
    it('renders the profile', async () => {
        await act(async () => {
            render(<Profile />);
        });
        const profile = screen.getByTestId('profile');
        expect(profile).toBeInTheDocument();
        expect(profile).toBeVisible();
    });

});
