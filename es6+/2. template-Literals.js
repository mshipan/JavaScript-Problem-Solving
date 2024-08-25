// 1. স্ট্রিং এর মধ্যে একাধিক লাইন ব্যবহার
//    Template Literals এর মাধ্যমে আপনি একাধিক লাইনের স্ট্রিং সহজেই তৈরি করতে পারেন, যা আগে সম্ভব ছিল না বা করার জন্য বিশেষ কিছু ব্যবহার করতে হত, যেমন "\n"।

const multiLineString = `This String is
in two lines`;
console.log(multiLineString);

// উদাহরণে, আপনি দেখতে পাচ্ছেন যে স্ট্রিংটি দুই লাইনে লেখা হয়েছে এবং এটি কনসোলে ঠিক একইভাবে প্রদর্শিত হবে।

// 2. স্ট্রিং এর মধ্যে এক্সপ্রেশন ইন্টারপোলেশন
//    Template Literals এর সবচেয়ে শক্তিশালী ফিচার হল ইন্টারপোলেশন। এর মাধ্যমে আপনি স্ট্রিং এর মধ্যে ভেরিয়েবল বা এক্সপ্রেশন যুক্ত করতে পারেন "${}" সিম্বলের মধ্যে।

const myName = "Shipan";
const age = 25;
const greeting = `Hello, my name is ${myName} and I am ${age} years old.`;
console.log(greeting);

// উদাহরণে, myName এবং age ভেরিয়েবলের মানগুলোকে স্ট্রিং এর মধ্যে সরাসরি যুক্ত করা হয়েছে। greeting ভেরিয়েবলের মান হবে: "Hello, my name is Shipan and I am 25 years old."

// 3. ফাংশন কল বা এক্সপ্রেশন ব্যবহার করা
//    আপনি Template Literals এর মধ্যে শুধুমাত্র ভেরিয়েবল নয়, যে কোনো ফাংশন কল বা জটিল এক্সপ্রেশনও ব্যবহার করতে পারেন।

const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);

// এই উদাহরণে, a + b এক্সপ্রেশনটি সরাসরি স্ট্রিং এর মধ্যে ইন্টারপোলেট করা হয়েছে, এবং আউটপুট হবে: "The sum of 5 and 10 is 15."

// 4. ট্যাগড টেমপ্লেট (Tagged Template)
//    টেমপ্লেট লিটারালস এর মাধ্যমে ট্যাগড টেমপ্লেট নামক একটি উন্নত ফিচারও রয়েছে, যেখানে আপনি ফাংশনকে স্ট্রিং এর অংশ এবং ইন্টারপোলেশনগুলো আলাদাভাবে প্রক্রিয়াকরণ করতে দিতে পারেন।

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}<b>${values[i] || ""}</b>`,
    ""
  );
}

const myName2 = "Shipan";
const age2 = 25;
const message = highlight`Hello, my name is ${myName2} and I am ${age2} years old.`;
console.log(message);

// এই উদাহরণে, highlight ফাংশনটি স্ট্রিং এবং ইন্টারপোলেশনগুলিকে প্রক্রিয়াকরণ করে এবং একটি HTML-এর মত আউটপুট তৈরি করে: "Hello, my name is <b>Shipan</b> and I am <b>25</b> years old."
