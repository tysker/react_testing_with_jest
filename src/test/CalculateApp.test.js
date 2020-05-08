import {total, tax} from '../components/CalculateApp';
import {add, multiply} from '../components/Calculate';

//const calculate = jest.fn(() => 12);

jest.mock('../components/Calculate', () => ({
    add: jest.fn(() => 25),
    multiply: jest.fn( () => '18750')
}));

// jest.mock('./App', () => ({
// }));

// integration test
// test things working together
test('total', () => {
    expect(total(5, 20)).toBe('$25');
    expect(add).toHaveBeenCalledTimes(1);
})

test('how much tax did I pay', () => {
    expect(tax(25000)).toBe('$18750');
    expect(multiply).toHaveBeenCalledTimes(1);

    multiply.mockImplementation(() => 21375);

    expect(tax(28500)).toBe('$21375');
    expect(multiply).toHaveBeenCalledTimes(2);
})