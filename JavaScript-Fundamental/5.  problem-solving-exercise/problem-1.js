// Write a function convertTemperature that takes a temperature in Celsius and returns the temperature in Fahrenheit. Use the formula: Fahrenheit = (Celsius \* 9/5) + 32.

let temperature = 90;

function convertTemperature(celsius) {
  let fahrenheit = `${(celsius * 9) / 5 + 32} °F`;
  return fahrenheit;
}

let result = convertTemperature(temperature);
console.log(result);
