import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from '../components/MovieForm';

afterEach(cleanup);
// Spy mockup function
const onSubmit = jest.fn();

test( '<MovieForm>', () => {
    const { queryByTestId, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit}/>);
    expect(queryByTestId('movie-form')).toBeTruthy();

    console.log(fireEvent.change(getByLabelText('Text'), { target: {value: 'hello'}}));

    // if I don't use the fake jest function, I will get a long red console.error message
    console.error = jest.fn();
    fireEvent.click(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
        text: 'hello',
    });


})