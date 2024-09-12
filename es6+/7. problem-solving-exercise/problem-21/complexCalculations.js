// Write a module that exports a class Calculator with methods for basic arithmetic
// operations (addition, subtraction, multiplication, division). Then, create another
// module that imports Calculator and uses it to perform complex calculations.

import { Calculator } from "./calculator";

// Create an instance of Calculator
const calc = new Calculator();

// Performing complex calculations
const num1 = 10;
const num2 = 5;
const num3 = 2;

const result1 = calc.add(num1, num2);
const result2 = calc.multiply(result1, num3);
const result3 = calc.divide(result2, num3);
const result4 = calc.subtract(result3, num1);

// Displaying the results
console.log(`Result of adding ${num1} and ${num2} is: ${result1}`);
console.log(`Result of multiplying ${result1} by ${num3} is: ${result2}`);
console.log(`Result of dividing ${result2} by ${num3} is: ${result3}`);
console.log(`Result of subtracting ${num1} from ${result3} is: ${result4}`);
