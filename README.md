# String Calculator (TDD Implementation)

## Overview
This project is an implementation of a **String Calculator** following the principles of **Test-Driven Development (TDD)**. It allows adding numbers from a given string input, supporting different delimiters, including custom and multiple delimiters.

For more details, refer to the [TDD Assessment Blog](https://blog.incubyte.co/blog/tdd-assessment/).

## Features
- Adds numbers provided in a string format.
- Supports default delimiters (comma `,` and newline `\n`).
- Supports custom single-character delimiters defined in the format `//[delimiter]\n`.
- Supports custom delimiters of any length in the format `//[delimiter]\n` (e.g., `//[***]\n1***2***3` → `6`).
- Supports multiple custom delimiters in the format `//[delim1][delim2]\n` (e.g., `//[*][%]\n1*2%3` → `6`).
- Throws an error when negative numbers are included.

## Installation
To run this project locally, follow these steps:

### Prerequisites
Ensure you have **Node.js** installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/string-calculator-tdd.git
   cd string-calculator-tdd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run tests:
   ```sh
   npm test
   ```

## Usage
You can use the **StringCalculator** class in your application as follows:

```javascript
const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator();

console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.add("//[*][%]\n1*2%3")); // Output: 6
```

## Running Tests
This project uses **Jest** for unit testing. Run the tests using:
```sh
npm test
```
### Example Test Cases
```javascript
test('supports multiple delimiters "[*][%]"', () => {
  expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
});

test('throws an error for negative numbers', () => {
  expect(() => calculator.add("1,-2,3")).toThrow("Negatives not allowed: -2");
});
```

## License
This project is licensed under the MIT License.

---

**Happy Coding! 🚀**

