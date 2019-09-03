import adder from './adder';

describe('Adder', () => {
  test('adds two numbers', () => {
    expect(adder(5,2)).toEqual(7);
  })
});

