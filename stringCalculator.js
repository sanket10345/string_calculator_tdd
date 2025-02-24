// stringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;
        const delimiter = /,|\n/;// delimiter can be either a new line or comma
        const numArray = numbers.split(delimiter).map(Number);

        const negatives = numArray.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;