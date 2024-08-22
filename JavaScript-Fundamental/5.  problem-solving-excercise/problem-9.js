// Write a function reverseString that takes a string as input and returns the string reversed. Use a for loop to iterate over the string.

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("hello"));
