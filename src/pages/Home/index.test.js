import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../utils/context';
import Home from './'

describe('The Home component', () => {
    test('renders the Home component', () => {
        render(
            <Router>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </Router>
        );
    });
})
