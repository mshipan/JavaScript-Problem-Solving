// স্ট্রিং রিপিট জাভাস্ক্রিপ্টে এমন একটি পদ্ধতি যার মাধ্যমে একটি নির্দিষ্ট স্ট্রিংকে ইচ্ছেমতো বারবার পুনরাবৃত্তি করা যায়। এই কাজটি করার জন্য আমরা repeat() মেথড ব্যবহার করি।

// ----------------------------------------------------------------------------

// repeat() মেথডের বিবরণ
// repeat() মেথড একটি স্ট্রিংকে নির্দিষ্ট সংখ্যক বার পুনরাবৃত্তি করে এবং সেই স্ট্রিংটি রিটার্ন করে।

// সিনট্যাক্স:

string.repeat(count);

// - count: কতবার স্ট্রিং রিপিট হবে তা নির্ধারণ করে। এটি একটি পজিটিভ পূর্ণসংখ্যা হতে হবে।

// ----------------------------------------------------------------------------

// বৈশিষ্ট্য
// 1. ইনপুট স্ট্রিং অপরিবর্তিত থাকে।
// 2. যদি count এর মান 0 দেওয়া হয়, তবে এটি একটি ফাঁকা স্ট্রিং ("") রিটার্ন করবে।
// 3. যদি count নেগেটিভ বা ইনফিনিটি দেওয়া হয়, তবে এটি RangeError দেবে।

// ----------------------------------------------------------------------------

// উদাহরণ

// ১. সাধারণ স্ট্রিং রিপিট

const text = "Hello ";
console.log(text.repeat(3));
// Output: "Hello Hello Hello "

// ২. একটি নির্দিষ্ট চিহ্ন রিপিট করা

const symbol = "*";
console.log(symbol.repeat(5));
// Output: "*****"

// ৩. সংখ্যার মতো স্ট্রিং রিপিট করা

const numberString = "123";
console.log(numberString.repeat(4));
// Output: "123123123123"

// ----------------------------------------------------------------------------

// স্পেশাল কেস

// ১. যদি count শূন্য হয়

const message = "Goodbye!";
console.log(message.repeat(0));
// Output: ""

// ২. যদি count নেগেটিভ হয়

const word = "Repeat";
console.log(word.repeat(-1));
// Output: RangeError: Invalid count value

// ৩. দশমিক সংখ্যা দিলে
// repeat() মেথড স্বয়ংক্রিয়ভাবে দশমিক মানকে পূর্ণসংখ্যায় রূপান্তর করে।

const text1 = "JS ";
console.log(text1.repeat(2.5));
// Output: "JS JS "

// ----------------------------------------------------------------------------

// প্রয়োগ

// ১. স্ট্রিং প্যাটার্ন তৈরি

const pattern = "-";
console.log(pattern.repeat(10));
// Output: "----------"

// ২. বার্তা সাজানো

const title = "Welcome";
const border = "*".repeat(10);
console.log(border + " " + title + " " + border);
// Output: "********** Welcome **********"

// ৩. তালিকা সাজানো

const bullet = "- ";
const items = ["Item 1", "Item 2", "Item 3"];
items.forEach((item) => console.log(bullet.repeat(3) + item));
// Output:
// --- Item 1
// --- Item 2
// --- Item 3

// ----------------------------------------------------------------------------

// ব্যবহারিক উদাহরণ

// ১. HTML কোড জেনারেট করা

const row = "<tr><td>Row</td></tr>";
console.log(row.repeat(3));
// Output:
// <tr><td>Row</td></tr><tr><td>Row</td></tr><tr><td>Row</td></tr>

// ২. পাসওয়ার্ড মাস্কিং

const password = "mypassword";
console.log("*".repeat(password.length));
// Output: "**********"
