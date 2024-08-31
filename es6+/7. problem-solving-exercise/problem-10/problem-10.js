// Write a module that exports a function for calculating the area of different shapes (circle, square, rectangle). Import this module into another file
// and use it to calculate areas.

// Import the areaCalculator module
const areaCalculator = require("./areaCalculator");

// Calculate the area of a circle with a radius of 5
const circleArea = areaCalculator.calculateCircleArea(5);
console.log(`Area of the circle: ${circleArea}`);

// Calculate the area of a square with a side length of 4
const squareArea = areaCalculator.calculateSquare(4);
console.log(`Area of the square: ${squareArea}`);

// Calculate the area of a rectangle with length 6 and width 3
const rectangleArea = areaCalculator.calculateRectangleArea(6, 3);
console.log(`Area of the rectangle: ${rectangleArea}`);
