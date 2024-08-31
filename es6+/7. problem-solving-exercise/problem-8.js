// Write a function that takes an indefinite number of arguments and returns their sum using the rest operator.

const sumOfAllNumbers = function (...args) {
  // using reduce method
  // return args.reduce((sum, current) => sum + current, 0);

  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

// Example usage with individual arguments
const result = sumOfAllNumbers(1, 2, 3, 4);

// Example usage with an array, using the spread operator to pass the array elements as individual arguments
const nums = [1, 2, 3, 4];
const result1 = sumOfAllNumbers(...nums);

console.log(result);
console.log(result1);
