// stringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;
        const delimiter = /,|\n/;// delimiter can be either a new line or comma
        const numArray = numbers.split(delimiter).map(Number);
        return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;