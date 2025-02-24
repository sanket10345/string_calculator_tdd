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
  test('handles new lines as delimiter', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test('throws error for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });
  test('supports custom delimiter ";"', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  test('Ignore numbers bigger than 1000', () => {
    expect(calculator.add("2,1001")).toBe(2);
  });
  test('Accept number upto 1000', () => {
    expect(calculator.add("2,1000")).toBe(1002);
  });
});