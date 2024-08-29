// Polymorphism (পলিমরফিজম) হলো Object-Oriented Programming (OOP)-এর একটি মৌলিক ধারণা, যা গ্রিক শব্দ থেকে এসেছে। "Poly" মানে "বহু" এবং "morphism" মানে "আকার" বা "ফর্ম"।
// তাই, Polymorphism-এর অর্থ হলো "বহুরূপ" বা "বহুরূপিতা"। OOP-তে Polymorphism হলো এমন একটি প্রক্রিয়া যেখানে একাধিক ক্লাসের অবজেক্টগুলো
// একই ইন্টারফেস বা মেথডের মাধ্যমে বিভিন্নভাবে আচরণ করতে পারে।

// Polymorphism এর ধরণ:
// Polymorphism প্রধানত দুই ধরনের হতে পারে:

// 1. Compile-Time Polymorphism (Static Polymorphism):
//    - এটি তখন ঘটে যখন মেথড ওভারলোডিং এর মাধ্যমে একই নামের মেথড বিভিন্ন ধরনের আর্গুমেন্ট বা প্যারামিটার নিয়ে কাজ করে।
//    - JavaScript-এর মতো ডায়নামিক ভাষায় এটি সাধারণত দেখা যায় না।

// 2. Run-Time Polymorphism (Dynamic Polymorphism):
//    - এটি তখন ঘটে যখন একটি বেস ক্লাসের রেফারেন্স একাধিক ডেরাইভড (উত্তরাধিকার) ক্লাসের অবজেক্টগুলো ধরে রাখতে পারে এবং সেই ক্লাসের মেথডগুলোর উপর ভিন্ন ভিন্নভাবে কাজ করতে পারে।
//    - JavaScript-এ এটি সবচেয়ে সাধারণ এবং গুরুত্বপূর্ণ।

// JavaScript-এ Polymorphism উদাহরণ:
// ধরা যাক, একটি Animal ক্লাস রয়েছে এবং এটি থেকে বিভিন্ন প্রাণীর ক্লাস ডেরাইভড হয়েছে, যেমন Dog এবং Cat। speak() নামে একটি মেথড প্রতিটি ক্লাসে রয়েছে, তবে প্রতিটি প্রাণী তার নিজস্ব ভাবে কথা বলে।

class Animal {
  speak() {
    console.log("Animal is speaking...");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog says: Woof Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat says: Meow Meow!");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

const myDog = new Dog();
const myCat = new Cat();

// Polymorphism in action
makeAnimalSpeak(myDog); // Output: Dog says: Woof Woof!
makeAnimalSpeak(myCat); // Output: Cat says: Meow Meow!

// ব্যাখ্যা:
// 1. Base Class Animal: এখানে একটি বেস ক্লাস Animal রয়েছে, যেখানে একটি সাধারণ speak() মেথড সংজ্ঞায়িত করা হয়েছে।

// 2. Derived Classes Dog এবং Cat: এই ক্লাসগুলো Animal থেকে ইনহেরিট করে এবং তাদের নিজস্ব speak() মেথড সংজ্ঞায়িত করেছে।

// 3. Polymorphism in Action: যখন makeAnimalSpeak() ফাংশনটি ডাকা হয়, তখন এটিকে Animal টাইপের রেফারেন্স দেওয়া হয়। কিন্তু ফাংশনটি যখন চালানো হয়,
//    তখন speak() মেথডটি সেই নির্দিষ্ট ক্লাসের মেথড অনুযায়ী কাজ করে, যেটি রেফারেন্স ধরে আছে।

// Polymorphism এর সুবিধা:
// 1. কোড পুনরায় ব্যবহারযোগ্যতা: Polymorphism ব্যবহারের মাধ্যমে একই কোডের ভিন্ন ভিন্ন অবজেক্টের উপর বিভিন্নভাবে কাজ করা যায়। এর ফলে কোড পুনরায় ব্যবহারযোগ্য হয়।

// 2. ইনটারফেসের সহজতা: ব্যবহারকারী বা প্রোগ্রামার কেবলমাত্র একটি সাধারণ ইন্টারফেস (যেমন speak() মেথড) দেখতে পায়, তবে অভ্যন্তরীণভাবে তা বিভিন্নভাবে কাজ করে।

// 3. কোড রক্ষণাবেক্ষণ সহজ হয়: Polymorphism ব্যবহার করে একবার ক্লাস তৈরি করলে, সহজেই নতুন অবজেক্ট বা ক্লাস যোগ করা যায় এবং তা বিদ্যমান কোডে প্রভাব ফেলবে না।
