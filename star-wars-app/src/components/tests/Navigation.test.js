import { screen, render, cleanup} from '@testing-library/react';
import { Navigation } from '../Navigation';
import { BrowserRouter } from 'react-router-dom';

test('should render Navigation component', () =>{
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>)
    const navElement = screen.getByTestId('nav-1')
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent('Home')
    expect(navElement).toHaveTextContent('People')
    expect(navElement).toHaveTextContent('Species')
    expect(navElement).toHaveTextContent('Films')
    expect(navElement).toHaveTextContent('Planets')
    expect(navElement).toHaveTextContent('Starships')
    expect(navElement).toHaveTextContent('Vehicles')
});