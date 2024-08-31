// Create a Person class with properties for name, age, and occupation, and a method to return a greeting. Then, extend this class to create an Employee class
// that includes additional properties like employee ID and department.

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  // Method to return a greeting
  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.occupation}.`;
  }
}

// Extend the Person class to create an Employee class
class Employee extends Person {
  constructor(name, age, occupation, employeeID, department) {
    // Call the parent class's constructor to set name, age, and occupation
    super(name, age, occupation);
    this.employeeID = employeeID;
    this.department = department;
  }

  // Method to return a detailed greeting including employee-specific details
  detailedGreeting() {
    return `${this.greeting()} I work in the ${
      this.department
    } department and my employee ID is ${this.employeeID}.`;
  }
}

const person = new Person("John Smith", 34, "Software Engineer Lead");
console.log(person.greeting());

const employee = new Employee(
  "Shipan Mallik",
  28,
  "Junior Full Stack Developer",
  1234,
  "It"
);
console.log(employee.detailedGreeting());
