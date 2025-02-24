// stringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;
        let delimiter = /,|\n/;// delimiter can be either a new line or comma

        // If custom delimiter Eg-> ";"' //;\n1;2
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts.slice(1).join("\n");
        }

        const numArray = numbers.split(delimiter).map(Number);
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;