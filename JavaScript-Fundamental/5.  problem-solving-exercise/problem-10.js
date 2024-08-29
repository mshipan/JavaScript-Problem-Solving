// Write a function calculateFactorial using a function declaration that returns the factorial of a given number.

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = n; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(6));
