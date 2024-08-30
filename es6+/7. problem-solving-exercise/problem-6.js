// Create a function that takes an array of numbers and returns the first, second, and rest of the elements using array destructuring.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const generateNums = function (nums) {
  const [first, second, ...rest] = nums;
  return `First: ${first}
  Second: ${second}
  Rest: [${rest}]`;
};

console.log(generateNums(nums));
