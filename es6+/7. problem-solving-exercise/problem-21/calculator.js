class Calculator {
  // Method for addition
  add(a, b) {
    return a + b;
  }

  // Method for subtraction
  subtract(a, b) {
    return a - b;
  }

  // Method for multiplication
  multiply(a, b) {
    return a * b;
  }

  // Method for division
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
}

// Exporting the Calculator class
export { Calculator };
