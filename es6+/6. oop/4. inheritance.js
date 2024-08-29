// ইনহেরিটেন্স (Inheritance) হলো Object-Oriented Programming (OOP) এর একটি গুরুত্বপূর্ণ ধারণা, যেখানে একটি ক্লাসের বৈশিষ্ট্য এবং মেথডগুলো আরেকটি ক্লাসে উত্তরাধিকারসূত্রে পাওয়া যায়।
// সহজভাবে বললে, ইনহেরিটেন্স এমন একটি পদ্ধতি যেখানে একটি নতুন ক্লাস পুরানো ক্লাসের প্রোপার্টি এবং মেথডগুলো ব্যবহার করতে পারে এবং প্রয়োজনে নতুন ফিচারও যোগ করতে পারে।
// এর মাধ্যমে কোডের পুনঃব্যবহারযোগ্যতা এবং ফ্লেক্সিবিলিটি বৃদ্ধি পায়।

// **** ইনহেরিটেন্সের মূল ধারণা: ****

// 1. Parent বা Superclass (প্যারেন্ট বা সুপারক্লাস): এটি হলো সেই ক্লাস যেটি থেকে অন্য ক্লাস ইনহেরিট করে। এই ক্লাসের প্রোপার্টি এবং মেথডগুলো চাইল্ড ক্লাসে ব্যবহার করা যেতে পারে।
// 2. Child বা Subclass (চাইল্ড বা সাবক্লাস): এটি হলো সেই ক্লাস যেটি Parent ক্লাস থেকে ইনহেরিট করে। এই ক্লাস Parent ক্লাসের সমস্ত বৈশিষ্ট্য পায়
//    এবং প্রয়োজনে নতুন বৈশিষ্ট্য ও মেথড যোগ করতে পারে বা Parent ক্লাসের মেথডগুলো ওভাররাইড করতে পারে।

// উদাহরণস্বরূপ:
// ধরা যাক আমরা একটি Vehicle নামে একটি Parent ক্লাস তৈরি করেছি এবং এর থেকে Car এবং Bike নামে দুটি Child ক্লাস তৈরি করছি।

// Parent class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    return `${this.brand} ${this.model} engine has started`;
  }

  stopEngine() {
    return `${this.brand} ${this.model} engine has turned off`;
  }
}

// Child class - Car
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model); // Parent class এর constructor কল করা
    this.doors = doors;
  }

  openTrunk() {
    return `${this.brand} ${this.model} trunk has opened`;
  }
}

// Child class - Bike
class Bike extends Vehicle {
  constructor(brand, model, type) {
    super(brand, model); // Parent class এর constructor কল করা
    this.type = type;
  }

  popAWheelie() {
    return `${this.brand} ${this.model} pop a whechel`;
  }
}

// Car এর ইনস্ট্যান্স তৈরি
const myCar = new Car("Toyota", "Corolla", 4);
console.log(myCar.startEngine()); // Output: Toyota Corolla এর ইঞ্জিন চালু হলো।
console.log(myCar.openTrunk()); // Output: Toyota Corolla এর ট্রাঙ্ক খোলা হলো।
console.log(myCar.stopEngine()); // Output: Toyota Corolla এর ইঞ্জিন বন্ধ হলো।

// Bike এর ইনস্ট্যান্স তৈরি
const myBike = new Bike("Yamaha", "MT-15", "Sport");
console.log(myBike.startEngine()); // Output: Yamaha MT-15 এর ইঞ্জিন চালু হলো।
console.log(myBike.popAWheelie()); // Output: Yamaha MT-15 হুইলি দিচ্ছে!
console.log(myBike.stopEngine()); // Output: Yamaha MT-15 এর ইঞ্জিন বন্ধ হলো।

// উদাহরণ বিশ্লেষণ:
// 1. Parent ক্লাস Vehicle:
//    - Vehicle হলো Parent বা Superclass, যার মধ্যে দুটি মেথড রয়েছে: startEngine() এবং stopEngine()। এই ক্লাসটি একটি গাড়ি বা বাইকের মতো সাধারণ বৈশিষ্ট্যসমূহ ধারণ করে।

// 2. Child ক্লাস Car এবং Bike:
//    - Car এবং Bike ক্লাস দুটি Vehicle ক্লাস থেকে ইনহেরিট করেছে। তারা Parent ক্লাসের সমস্ত প্রোপার্টি এবং মেথডগুলো পেয়েছে, যেমন: brand, model, startEngine(), এবং stopEngine()।
//    - Car ক্লাসে নতুন একটি মেথড যোগ করা হয়েছে, যার নাম openTrunk(), যা শুধুমাত্র গাড়ির জন্য প্রযোজ্য।
//    - Bike ক্লাসে একটি নতুন মেথড যোগ করা হয়েছে, যার নাম popAWheelie(), যা বাইকের জন্য প্রযোজ্য।

// 3. super() ব্যবহার:
//    - Car এবং Bike ক্লাসের constructor এ super() ব্যবহার করে Parent ক্লাসের constructor কল করা হয়েছে, যা Parent ক্লাসের প্রোপার্টিগুলোকে ইনিশিয়ালাইজ করতে সাহায্য করে।

// ইনহেরিটেন্সের উপকারিতা:

// 1. কোডের পুনঃব্যবহারযোগ্যতা: Parent ক্লাসের কোড Child ক্লাসগুলোতে পুনরায় ব্যবহার করা যায়, যা কোড ডুপ্লিকেশন কমায়।

// 2. কোডের মডুলারিটি: ইনহেরিটেন্স ব্যবহারে কোডের মডুলারিটি বৃদ্ধি পায়, কারণ প্রোগ্রামের বিভিন্ন অংশ আলাদা আলাদাভাবে কাজ করতে পারে।

// 3. কোডের স্থায়িত্ব: Parent ক্লাসের কোন পরিবর্তন করলে তা Child ক্লাসগুলোতে প্রতিফলিত হয়, যা কোড মেইনটেনেন্স সহজ করে।

// 4. কোডের ফ্লেক্সিবিলিটি: ইনহেরিটেন্সের মাধ্যমে Child ক্লাসগুলো Parent ক্লাসের বৈশিষ্ট্য ও মেথডগুলো ব্যবহার করতে পারে এবং প্রয়োজনে সেগুলোকে ওভাররাইড করেও ব্যবহার করতে পারে।
