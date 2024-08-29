// Class হলো অবজেক্ট তৈরি করার ব্লুপ্রিন্ট বা ছাঁচ। ES6 এ ক্লাস কনসেপ্টটি ইন্ট্রোডিউস করা হয়েছে, যা আগে প্রোটোটাইপের মাধ্যমে করা হতো।

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // মেথড ডিক্লারেশন
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// ক্লাস থেকে অবজেক্ট তৈরি
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
