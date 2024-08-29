// Create a function weekdayName that takes a number (1-7) as input and returns the corresponding day of the week. Use a switch statement for this problem.

function weekDayName(day) {
  switch (day) {
    case 1:
      return "Saturday";

    case 2:
      return "Sunday";

    case 3:
      return "Monday";

    case 4:
      return "Tuesday";

    case 5:
      return "Wednesday";

    case 6:
      return "Thursday";

    case 7:
      return "Friday";

    default:
      return "This is not a valid day of the week";
  }
}

// The break statements are unnecessary after return statements because the return already exits the function.

console.log(weekDayName(5));
