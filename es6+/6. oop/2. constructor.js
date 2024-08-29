// constructor একটি বিশেষ মেথড যা নতুন অবজেক্ট তৈরি করার সময় কল হয়। এটি সাধারণত ক্লাসের প্রপার্টিগুলো ইনিশিয়ালাইজ করতে ব্যবহৃত হয়।
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`This car is a ${this.model} from ${this.year}.`);
  }
}

const car1 = new Car("Toyota", 2020);
car1.displayInfo(); // Output: This car is a Toyota from 2020.
