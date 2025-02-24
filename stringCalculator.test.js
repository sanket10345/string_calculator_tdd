const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });
  test('returns sum of a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });
  test('returns sum of two numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
  });
});