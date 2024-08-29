// Create a program that checks if a given year is a leap year. A year is a leap year if it is divisible by 4, but not divisible by 100, except when it is divisible by 400.

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leep year`);
} else {
  console.log(`${year} is not a leep year`);
}
