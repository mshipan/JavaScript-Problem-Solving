// Types of Execution Contexts

// 1. Global Execution Context:

// -This is the default or base execution context.
// -It is created when the JavaScript file is initially run.
// -In the global context, the "this" keyword refers to the global object, which is "window" in browsers and "global" in Node.js.
// -Variables and functions declared in the global scope are stored in the global execution context.

// {**** suppose we have created an html document where we included a script.js file and the js file is blank. this
// means we initialize the global execution context. this give us two special things, those are "window" and "this" keywords or object ****}

// Global Execution Context has two phases

// 1. Creation phase
// 2. Execution phase

// 1. --- Creation phase ---
// in the Creation phase we have two things
// 1. window: global object
// 2. this: refer window

var name = "Tom";
function sayName() {
  console.log(this.name);
}

// in the creation phase beside the two things some other things are happend
// these are:

// - allocate memory for the variable "name" and the "sayName" function
// - initialize the "name" variable into "undefined"
// - put the full sayName function definition into a memory

// --- 2. Execution phase ---

// - assign value "Tom" to the varable "name"
// - now here comes the function execution context

// 2. Function Execution Context:

// - Every time a function is invoked, a new function execution context is created.
// - This context is specific to the function being executed.
// - Within this context, "this" refers to the object that invoked the function, unless the function is called in a different way (e.g., using call, apply, or bind).
// - Function execution contexts have access to the variables and functions defined in their own scope and any outer scopes due to lexical scoping.

// Function Execution Context also has two phases

// 1. Creation phase
// 2. Execution phase

var name2 = "Tom";
function sayName2() {
  console.log(this.name2 + "Runs");
}

// invoke the function sayName2()
sayName2();

// here name2 and sayName2 will be created and try to be executed in global context.
// then in the function execution context inside the sayName2 function,
// in the creation phase of function execution, if there are any variable inside the function memory location will be created

// *** Let's clear this ****

// GEC
// creation:
//     name2 = undefined
// execution:
//     name2 = "Tom"
//     sayName2 (function) = execute
//   when we found that sayName2 is a function it means now it will be function execution

// FEC (for sayName2())
// creation:
//     nothing need to be created
// execution:
//     found log() for console object
//     FEC (from console.log())
//       creation
//       execution
