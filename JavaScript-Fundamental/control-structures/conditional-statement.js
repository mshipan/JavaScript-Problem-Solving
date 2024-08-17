// There are three types of conditional statements

// They are
// 1. if
// 2. if...else
// 3. if...else if

// **** if ****

var myName = "Shipan Mallik";

if (myName === "Shipan Mallik") {
  console.log("You are allowed");
}

// **** if...else ****

var myAge = 10;

if (myAge > 18) {
  console.log("You are Adult");
} else {
  console.log("Your Age are not enough to be adult");
}
// **** if...else if ****

if (myAge >= 18 && myAge <= 25) {
  console.log("You are a Teenager");
} else if (myAge > 26) {
  console.log("You are an Adult");
} else {
  console.log("You are a Kid");
}

// **** Nesting conditional statements ****

var num = 11;

if (num > 1) {
  if (num > 10) {
    console.log("greater than 10");
  } else {
    console.log("Somewhere between 1 to 10");
  }
}

// **** Switch ****

var weekDay = "Sunday";

switch (weekDay) {
  case "Saturday":
    console.log("Today is Closed! Saturday");
    break;
  case "Sunday":
    console.log("Office day! Sunday");
    break;
  case "Monday":
    console.log("Office day! Monday");
    break;
  case "Tuesday":
    console.log("Office day! Tuesday");
    break;
  case "Wednessday":
    console.log("Office day! Wednessday");
    break;
  case "Thursday":
    console.log("Office day! Thursday");
    break;
  case "Friday":
    console.log("Office day! Friday");
    break;
  default:
    console.log("Not a Day");
}
