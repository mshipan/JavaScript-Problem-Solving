// hoisting is javascript default behavior
// in simple word hoising means declaration put to the top

// var x;
// x = undefined
x = 5; // assign 5 to x

console.log(x); // console log the x

var x; // declare x

// for "let" and "const" keyword

// let x;
// x = not set undefined (no memory set for x)
carName = "volvo";
let carName;

// same for const

// is let and const are hoisted?
// Ans: Yes, they are hoisted but in the first they are not set undefined, as we see which is do for "var"

// javaScript is only hoist declaration not initialization
