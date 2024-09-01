// Create a Vehicle class with properties like make, model, and year. Then, extend this class to create a Car class that adds properties like number of doors and fuel type.
// Demonstrate how to use methods from both the base and derived classes.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return `${this.make} ${this.model}'s engine has started.`;
  }

  stopEngine() {
    return `${this.make} ${this.model}'s engine has stopped.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors, fuelType) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
    this.fuelType = fuelType;
  }

  openDoors() {
    return `Opening all ${this.numberOfDoors} doors of the ${this.make} ${this.model}.`;
  }

  refuel() {
    return `Refueling the ${this.make} ${this.model} with ${this.fuelType}.`;
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021, 4, "Petrol");

// Use methods from the Vehicle class
console.log(myCar.startEngine()); // Output: "Toyota Corolla's engine has started."
console.log(myCar.stopEngine()); // Output: "Toyota Corolla's engine has stopped."

// Use methods from the Car class
console.log(myCar.openDoors()); // Output: "Opening all 4 doors of the Toyota Corolla."
console.log(myCar.refuel()); // Output: "Refueling the Toyota Corolla with Petrol."
