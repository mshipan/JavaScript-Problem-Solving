// Create a function that takes an array of user objects and returns a formatted string using template literals. Include the user's name, age, and occupation in the output.

// array of user objects
const users = [
  { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
  { id: 2, name: "Bob", age: 34, occupation: "Doctor" },
  { id: 3, name: "Charlie", age: 22, occupation: "Designer" },
];

// Function to format user details
function formatUserDetails(userArray) {
  return userArray
    .map((user) => {
      return `${user.name} is ${user.age} years old and works as a ${user.occupation}.`;
    })
    .join("\n");
}

// Calling the function with the users array
const formatedString = formatUserDetails(users);
console.log(formatedString);
