import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

afterEach(cleanup);

// with destructuring
test('<Counter />', () => {
    const { debug, getByTestId} = render(<Counter/>);
    const counterButton = getByTestId('counter-button');
    const counterSelect = getByTestId('counter-select');
    //debug(); // Outputs dom as string

    // Asserts counter-button is a button
    expect(counterButton.tagName).toBe('BUTTON');
    // Asserts counter-button starts with 0
    expect(counterButton.textContent).toBe('0');
    //====================================
    expect(counterSelect.tagName).toBe('SELECT');
    // Asserts counter-select has Hallo written
    expect(counterSelect.textContent).toBe('Hallo');
    //console.log(wrapper.getByText('0').tagName);

    // Every time you click on the button it increment the counter with one
    fireEvent.click(counterButton)
    expect(counterButton.textContent).toBe('1');

    fireEvent.click(counterButton)
    expect(counterButton.textContent).toBe('2');
});




// without destructuring
test('<Counter />', () => {
    const wrapper = render(<Counter/>);
    //wrapper.debug(); // Outputs dom as string

    // Asserts counter-button is a button
    expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON');
    // Asserts counter-button starts with 0
    expect(wrapper.getByTestId('counter-button').textContent).toBe('0');
    //console.log(wrapper.getByText('0').tagName);
});