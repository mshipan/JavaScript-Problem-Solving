// 1. অ্যারে ডেসট্রাকচারিং (Array Destructuring):
//    ধরা যাক, আপনার একটি অ্যারে আছে:
const numbers = [10, 20, 30, 40];

//    ES6+ এর আগে আপনি অ্যারের মানগুলো আলাদা ভেরিয়েবলগুলোতে রাখার জন্য করতে হতো:

//    const first = numbers[0];
//    const second = numbers[1];

// ডেসট্রাকচারিং ব্যবহার করে এটা অনেক সহজে করা যায়:
const [first, second, third, fourth] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(third); // Output: 30
console.log(fourth); // Output: 40

// ব্যাখ্যা:
// - const [first, second, third, fourth] = numbers; এই লাইনটি অ্যারের প্রতিটি উপাদানকে ভেরিয়েবলগুলোর মধ্যে নির্দিষ্ট ক্রমে (ইন্ডেক্স অনুসারে) ডেসট্রাকচার করে।

// 2. অবজেক্ট ডেসট্রাকচারিং (Object Destructuring):
//    ধরা যাক, আপনার একটি অবজেক্ট আছে:

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// ES6+ এর আগে আপনাকে অবজেক্ট থেকে মানগুলো আলাদা করে পেতে হতো:

// const name = person.name;
// const age = person.age;
// const city = person.city;

// ডেসট্রাকচারিং ব্যবহার করে এটা করা যায়:
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// ব্যাখ্যা:
// - const { name, age, city } = person; এই লাইনটি অবজেক্টের প্রতিটি প্রোপার্টিকে ভেরিয়েবলগুলোর মধ্যে নির্দিষ্ট নাম অনুযায়ী ডেসট্রাকচার করে।

// 3. ডিফল্ট ভ্যালু (Default Values) ব্যবহার:
//    - ডেসট্রাকচারিংয়ের সময় আপনি ডিফল্ট ভ্যালু দিতে পারেন যদি প্রোপার্টি বা অ্যারের উপাদানটি না থাকে:
//      const { name, age, country = "USA" } = person;
//      console.log(country); // Output: USA

// ব্যাখ্যা:
// - এখানে person অবজেক্টে country প্রোপার্টি নেই, তাই country ভেরিয়েবলটির জন্য ডিফল্ট ভ্যালু "USA" ব্যবহার করা হয়েছে।

// 4. নেস্টেড ডেসট্রাকচারিং (Nested Destructuring):
//    আপনার যদি একটি নেস্টেড (Nested) অবজেক্ট থাকে, তাহলে আপনি সেটিও ডেসট্রাকচার করতে পারেন:

const user = {
  id: 101,
  info: {
    name2: "Alice",
    address: {
      city2: "Wonderland",
      country: "Fiction",
    },
  },
};

const {
  info: {
    name2,
    address: { city2, country },
  },
} = user;

console.log(name2); // Output: Alice
console.log(city2); // Output: Wonderland
console.log(country); // Output: Fiction

// ব্যাখ্যা:
// - এখানে নেস্টেড অবজেক্টের মধ্যে থেকে আমরা নির্দিষ্ট প্রোপার্টিগুলো এক্সট্র্যাক্ট করেছি।

// 5. অবজেক্টের প্রপার্টির নাম পরিবর্তন করা:
//    কখনো কখনো, আপনি ডেসট্রাকচার করা মানগুলো ভিন্ন ভেরিয়েবল নাম ব্যবহার করতে চাইতে পারেন:

const { name: fullName, age: yearsOld } = person;

console.log(fullName); // Output: John
console.log(yearsOld); // Output: 30

// ব্যাখ্যা:
// - এখানে name প্রোপার্টির মানকে fullName নামক ভেরিয়েবল এবং age প্রোপার্টির মানকে yearsOld নামক ভেরিয়েবল হিসেবে ডেসট্রাকচার করা হয়েছে।
