// Create a program that calculates the factorial of a number using let and const. Ensure that the program correctly handles variable scope.

function calculateFactorial(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }

  const number = n;

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${number} is ${factorial}.`);
}

calculateFactorial(5);
