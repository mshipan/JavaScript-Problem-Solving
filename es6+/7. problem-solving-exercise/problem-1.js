// Write a function that demonstrates the difference between let, const, and var in terms of block scope, reassignment, and hoisting.
function demonstrateLetConstVar() {
  // Block Scope Example
  if (true) {
    var varVariable = "I am Var";
    let letVariable = "I am Let";
    const constVariable = "I am const";
  }

  //   console.log(varVariable); // "I am var" - var is function-scoped, so it's accessible here
  //   console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined - let is block-scoped
  //   console.log(constVariable); // Uncaught ReferenceError: constVariable is not defined - const is block-scoped

  // Reassignment Example
  var varVariable = "Reassigned Var"; // var can be reassigned
  let letVariable = "Reassigned Let"; // let can be reassigned

  // Attempting to redeclare constVariable in the same scope
  // This will throw an error
  const constVariable = "Reassigned Const"; // Uncaught TypeError: Assignment to constant variable - const cannot be reassigned

  console.log(varVariable); // "Reassigned var"
  console.log(letVariable); // "Reassigned let"

  // Hoisting Example
  console.log(hoistedVar); // undefined - var is hoisted but not initialized
  // console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization - let is not hoisted
  // console.log(hoistedConst); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization - const is not hoisted

  var hoistedVar = "Hoisted var";
  let hoistedLet = "Hoisted let";
  const hoistedConst = "Hoisted const";
}
demonstrateLetConstVar();
