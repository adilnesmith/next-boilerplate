import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './index';
import { SIDE_BAR } from 'lib/general-config'
const mockedSetSelectedId = jest.fn()

describe('SIDEBAR', () => {
    it('renders the sidebar', () => {
        render(<Sidebar setSelectedID={mockedSetSelectedId} />);
        const aside = screen.getByTestId('aside');
        const asideLink = screen.getByTestId(`aside-link-${SIDE_BAR.LINKS[0].id}`);
        expect(aside).toBeInTheDocument();
        expect(aside).toBeVisible();
        expect(asideLink).toBeInTheDocument();
        expect(asideLink).toBeVisible();

    });
});
