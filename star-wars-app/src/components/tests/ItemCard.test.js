import { screen, render, cleanup} from '@testing-library/react';
import { ItemCard } from '../ItemCard';
import { BrowserRouter } from 'react-router-dom';

test('should render ItemCard component (Luke Skywalker)', () =>{
    render(
        <BrowserRouter>
            <ItemCard id={'pe1'} name={"Luke Skywalker"}/>
        </BrowserRouter>)
    const itemCardElement = screen.getByTestId('item-pe1')
    expect(itemCardElement).toBeInTheDocument();
    expect(itemCardElement).toHaveTextContent('Luke Skywalker')
    const detailsLink = screen.getByText('Details')
    detailsLink.click()
    expect(window.location.pathname).toEqual('/pe1')
});