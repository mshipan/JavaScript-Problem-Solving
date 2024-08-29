// Write a function gradeCalculator that takes a student's score as input and returns the grade based on the following criteria:
// A: 90-100 B: 80-89 C: 70-79 D: 60-69 F: below 60

function gradeCalculator(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score < 60) {
    return "F";
  } else {
    return "The result is not valid";
  }
}

console.log(gradeCalculator(51));
