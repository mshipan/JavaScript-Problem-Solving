// Write a function sumOfMultiples that calculates the sum of all multiples of 3 and 5 below a given number.
function sumOfMultiples(nums) {
  let sum = 0;
  for (let i = 0; i < nums; i++) {
    console.log(i);
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfMultiples(10));
