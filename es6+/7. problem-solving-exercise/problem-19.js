// Write a program that creates an Animal class with a method speak.
// Extend this class to create Dog and Cat classes that override the speak method.
// Use template literals to format the output of the speak method.

class Animal {
  constructor(name) {
    this.name = name;
  }

  // Speak method for the base class
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Dog class extending Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Overriding speak method for Dog
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  // Overriding speak method for Cat
  speak() {
    console.log(`${this.name} meows.`);
  }
}

// Create instances of Dog and Cat
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Calling speak method on both instances
dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.
