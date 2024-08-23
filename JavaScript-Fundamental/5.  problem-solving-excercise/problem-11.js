// Create a function expression called isPrime that checks if a number is prime. The function should return true if the number is prime and false otherwise.

const isPrime = function (n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(10));
