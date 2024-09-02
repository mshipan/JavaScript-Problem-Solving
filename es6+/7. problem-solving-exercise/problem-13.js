// Create an abstract class Shape with an abstract method calculateArea. Then, implement this method in derived
// classes like Circle, Square, and Rectangle to calculate the area of each shape.

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error(
        "Abstract class 'Shape' cannot be instantiated directly."
      );
    }
  }
  // Abstract method
  calculateArea() {
    throw new Error(
      "Abstract method 'calculateArea' must be implemented by a derived class."
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.calculateArea()}`); // Output: Area of Circle: 78.53981633974483

const square = new Square(4);
console.log(`Area of Square: ${square.calculateArea()}`); // Output: Area of Square: 16

const rectangle = new Rectangle(4, 6);
console.log(`Area of Rectangle: ${rectangle.calculateArea()}`); // Output: Area of Rectangle: 24
