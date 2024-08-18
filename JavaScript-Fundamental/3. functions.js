// There are two types of function declaration.

// They are:
// 1. function statement
// 2. function expresion

// **** function statement ****

function funcName1() {
  // statement
}

// **** function expresion ****

var funcName2 = function () {
  // statement
};

function printMyName(name, age) {
  console.log(`My name is: ` + name + ` and my age is: ` + age);
}

printMyName("Shipan Mallik", 28);

// We can pass a function to another function as an argument
function callMyName(name, callback) {
  var age = 25;
  callback(age);
  console.log(`Mr. ` + name);
}

function hello(age) {
  console.log(`argument, Your age is: ` + age);
}

callMyName("Shipan Mallik", hello);

// **** Arrow function ****
const sayHelloArrow = (name) => {
  return `Hello, ${name}!`;
};

console.log(sayHelloArrow("Bob"));

const add = (a, b) => a + b;
console.log(add(5, 3));
