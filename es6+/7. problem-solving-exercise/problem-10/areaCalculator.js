// module

// Function to calculate the area of a circle
const calculateCircleArea = (radius) => {
  return parseFloat((Math.PI * radius * radius).toFixed(2));
};

// Function to calculate the area of a square
const calculateSquare = (side) => {
  return side * side;
};

// Function to calculate the area of a rectangle
const calculateRectangleArea = (length, width) => {
  return length * width;
};

module.exports = {
  calculateCircleArea,
  calculateSquare,
  calculateRectangleArea,
};
