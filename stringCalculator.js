// stringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;
        let delimiter = /,|\n/;// delimiter can be either a new line or comma

        // If custom delimiter Eg-> ";"' //;\n1;2
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");

            // Match and extract custom delimiter from format //[delimiter]\n
            const delimiterMatch = parts[0].match(/^\/\/\[(.+)]$/);

            if (delimiterMatch) { // if delimitier is of the following format //[delimiter]\n[numbers…]”
                let customDelimiter = delimiterMatch[1];
                customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                delimiter = new RegExp(customDelimiter);
            }
            else { // if delimiter of format //[delimiter]\n[numbers…]
                let customDelimiter = parts[0].slice(2);
                customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                delimiter = new RegExp(customDelimiter);
            }
            numbers = parts.slice(1).join("\n");
        }

        const numArray = numbers.split(delimiter).map(Number);
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;