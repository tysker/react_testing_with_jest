import {add, multiply} from '../components/Calculate'

// unit test
// it only tests one thing
test( 'add', () => {
    expect(add(10,2)).toBe(12);
    expect(add(21,7)).toBe(28);
});

test( 'multiply', () => {
    expect(multiply(10,2)).toBe(20);
    expect(multiply(2,7)).toBe(14);
});
