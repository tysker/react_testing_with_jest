import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from '../components/NewMovie';

afterEach(cleanup);

test( '<NewMovie>', () => {
    const { debug, getByTestId, queryByTestId, container, getByText } = render(<NewMovie/>);
    const pagetitle = getByTestId('page-title');

    expect(pagetitle.textContent).toBe('New Movie');
    expect(queryByTestId('movie-form')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
})