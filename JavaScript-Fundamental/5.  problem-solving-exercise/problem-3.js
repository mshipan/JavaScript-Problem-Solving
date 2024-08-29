// Write a function calculateArea that calculates the area of a rectangle, circle, or triangle based on the shape type and relevant parameters. Use appropriate data types for the calculations.

function calculateArea(shape, ...params) {
  let area;

  switch (shape.toLowerCase()) {
    case "rectangle":
      let [length, width] = params;

      if (typeof length === "number" && typeof width === "number") {
        area = length * width;
      } else {
        return "Invalid parameters for rectangle.";
      }
      break;
    case "circle":
      let [radius] = params;
      if (typeof radius === "number") {
        area = Math.PI * radius * radius;
      } else {
        return "Invalid parameters for circle.";
      }
      break;
    case "triangle":
      let [base, height] = params;
      if (typeof base === "number" && typeof height === "number") {
        area = 0.5 * base * height;
      } else {
        return "Invalid parameters for triangle.";
      }
      break;
    default:
      return "Invalid shape type.";
  }
  return `The area of the ${shape} is ${area.toFixed(2)} square units.`;
}

console.log(calculateArea("circle", 2));
