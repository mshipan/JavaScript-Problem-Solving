// স্ট্রিং ফরম্যাটিং বলতে বোঝায়, একটি স্ট্রিংয়ের মধ্যে ডায়নামিকভাবে ডেটা প্রবেশ করানো বা নির্দিষ্ট কাঠামোতে স্ট্রিং সাজানো।
// JavaScript-এ স্ট্রিং ফরম্যাটিং-এর জন্য একাধিক পদ্ধতি রয়েছে। নিচে কয়েকটি জনপ্রিয় পদ্ধতি আলোচনা করা হলো:

// ----------------------------------------------------------------------------

// পদ্ধতি ১: টেমপ্লেট লিটারাল (Template Literals)
// JavaScript-এ Template Literals ব্যবহার করে স্ট্রিং ফরম্যাটিং অত্যন্ত সহজ। এটি backtick (`) চিহ্ন ব্যবহার করে
// এবং `${variable}` দিয়ে ভ্যারিয়েবল বা এক্সপ্রেশনের মান স্ট্রিংয়ে প্রবেশ করানো যায়।

// উদাহরণ:
const name = "Shipan";
const age = 28;

const formattedString = `My name is ${name}, and I am ${age} years old.`;
console.log(formattedString);
// Output: My name is Shipan, and I am 28 years old.

// ----------------------------------------------------------------------------

// পদ্ধতি ২: স্ট্রিং কনক্যাটেনেশন (String Concatenation)
// পুরনো পদ্ধতিতে স্ট্রিং ফরম্যাটিং করার জন্য প্লাস (`+`) অপারেটর ব্যবহার করা হয়।

// উদাহরণ:
const name1 = "Shipan";
const age1 = 28;

const formattedString1 =
  "My name is " + name1 + ", and I am " + age1 + " years old.";
console.log(formattedString1);
// Output: My name is Shipan, and I am 28 years old.

// ----------------------------------------------------------------------------

// পদ্ধতি ৩: `String.format` এর মতো পদ্ধতি (Custom Implementation)
// JavaScript-এ বিল্ট-ইন `String.format` ফাংশন নেই, তবে এটি কাস্টমভাবে তৈরি করা যায়।

// উদাহরণ:
String.prototype.format = function (...args) {
  return this.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== "undefined" ? args[index] : match;
  });
};

const template = "My name is {0}, and I am {1} years old.";
const formattedString2 = template.format("Shipan", 28);
console.log(formattedString2);
// Output: My name is Shipan, and I am 28 years old.

// ----------------------------------------------------------------------------

// পদ্ধতি ৪: `Intl.NumberFormat` (নাম্বার ফরম্যাটিং)
// নাম্বার, মুদ্রা, অথবা তারিখ ফরম্যাট করার জন্য `Intl.NumberFormat` ব্যবহার করা হয়। এটি স্ট্রিং ফরম্যাটিং-এর একটি নির্দিষ্ট অংশ।

// উদাহরণ:
const amount = 1234567.89;
const formattedAmount = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount);
console.log(formattedAmount);
// Output: $1,234,567.89

// ----------------------------------------------------------------------------

// পদ্ধতি ৫: স্ট্রিং রিপ্লেসমেন্ট (String Replacement)
// একটি স্ট্রিংয়ে নির্দিষ্ট অংশ পরিবর্তন করে ফরম্যাট করা যায়।

// উদাহরণ:
const template1 = "Hello, {name}! Welcome to {place}.";
const formattedString3 = template1
  .replace("{name}", "Shipan")
  .replace("{place}", "Bangladesh");
console.log(formattedString3);
// Output: Hello, Shipan! Welcome to Bangladesh.

// ----------------------------------------------------------------------------

// পদ্ধতি ৬: প্যাডিং (Padding)
// স্ট্রিং-এর দৈর্ঘ্য পূরণ করার জন্য নির্দিষ্ট ক্যারেক্টার যোগ করে ফরম্যাটিং করা যায়।

// উদাহরণ:
const str = "5";
const paddedString = str.padStart(4, "0"); // বাম থেকে প্যাডিং
console.log(paddedString);
// Output: 0005

// ----------------------------------------------------------------------------

// পদ্ধতি ৭: টেবিল বা JSON ফরম্যাটিং
// ডেভেলপার কনসোলে ডেটা ভালোভাবে ফরম্যাট করতে `console.table()` ব্যবহার করা যায়।

// উদাহরণ:
const users = [
  { name: "Shipan", age: 28 },
  { name: "Tonmoy", age: 30 },
];
console.table(users);
// কনসোলে টেবিল আকারে ডেটা দেখাবে
