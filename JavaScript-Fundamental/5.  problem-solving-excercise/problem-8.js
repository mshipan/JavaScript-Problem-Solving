// Create a program that generates the first n Fibonacci numbers, where n is a positive integer input by the user.

function generateFibonacci(n) {
  if (n <= 0) {
    return "This is not valid number";
  }
  let fibonacciSeries = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    fibonacciSeries.push(a);
    let nextNum = a + b;
    a = b;
    b = nextNum;
  }
  return fibonacciSeries;
}

console.log(generateFibonacci(5));
