import { render, screen } from '@testing-library/react';
import Home from './index';
import { Provider } from 'react-redux'
import { store } from 'pages/store'
const MockHome = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
describe('HOME', () => {
    it('renders HomePanel when selectedId is HOME_PAGE', () => {
        const { getByTestId } = render(<MockHome />);
        const homePanel = getByTestId('home');
        expect(homePanel).toBeInTheDocument();
    });
});