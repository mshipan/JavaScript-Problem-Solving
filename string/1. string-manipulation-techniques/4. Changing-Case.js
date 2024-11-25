// স্ট্রিংকে ছোট হাত বা বড় হাতের অক্ষরে রূপান্তর (Changing Case)
// স্ট্রিং ম্যানিপুলেশনের সময় অক্ষরের কেস পরিবর্তন একটি সাধারণ এবং গুরুত্বপূর্ণ কাজ। এটি সাধারণত ডেটা
// স্ট্যান্ডার্ডাইজ করার জন্য করা হয়, যেমন ইউজার ইনপুট প্রক্রিয়া করা, টেক্সট মিলানো, বা টেক্সট ফরম্যাটিং।

// ----------------------------------------------------------------------------

// ১. toLowerCase() মেথড
// toLowerCase() মেথড একটি স্ট্রিংয়ের সব অক্ষরকে ছোট হাতের (lowercase) অক্ষরে রূপান্তর করে।

// সিনট্যাক্স:
string.toLowerCase();

// উদাহরণ:
const text = "Hello, World!";
const lowerText = text.toLowerCase();
console.log(lowerText); // Output: "hello, world!"

// ----------------------------------------------------------------------------

// ২. toUpperCase() মেথড
// toUpperCase() মেথড একটি স্ট্রিংয়ের সব অক্ষরকে বড় হাতের (uppercase) অক্ষরে রূপান্তর করে।

// সিনট্যাক্স:
string.toUpperCase();

// উদাহরণ:
const text1 = "hello, world!";
const upperText = text1.toUpperCase();
console.log(upperText); // Output: "HELLO, WORLD!"

// ----------------------------------------------------------------------------

// ৩. উদাহরণে বাস্তব ব্যবহার

// 1. ইউজার ইনপুট স্ট্যান্ডার্ডাইজ করা:
// ইউজার ইনপুট কেস-সেন্সিটিভ হতে পারে। একে স্ট্যান্ডার্ডাইজ করতে সব ইনপুটকে ছোট হাতের বা বড় হাতের অক্ষরে রূপান্তর করা হয়।
const userInput = "JavaScript";
const searchTerm = "javascript";

if (userInput.toLowerCase() === searchTerm.toLowerCase()) {
  console.log("Match found!");
} else {
  console.log("No match.");
}
// Output: "Match found!"

// 2. ইমেইল অ্যাড্রেস ভেরিফাই করা:
// ইমেইল চেক করার সময় কেস সংবেদনশীল না হওয়ায় একে lowercase-এ রূপান্তর করা হয়।
const email = "Example@Domain.COM";
const normalizedEmail = email.toLowerCase();
console.log(normalizedEmail); // Output: "example@domain.com"

// 3. টেক্সট ফরম্যাটিং:
// কোনো টাইটেল বা হেডিং সব বড় হাতের অক্ষরে রূপান্তর করা যেতে পারে।
const title = "welcome to the website!";
const formattedTitle = title.toUpperCase();
console.log(formattedTitle); // Output: "WELCOME TO THE WEBSITE!"

// ----------------------------------------------------------------------------

// ৪. প্রথম অক্ষর বড় হাতের এবং বাকিগুলো ছোট হাতের (Title Case বা Sentence Case)

// 1. প্রথম অক্ষর বড় করার নিয়ম:
const text2 = "hello, world!";
const capitalizedText =
  text2.charAt(0).toUpperCase() + text2.slice(1).toLowerCase();
console.log(capitalizedText); // Output: "Hello, world!"

// 2. প্রতিটি শব্দের প্রথম অক্ষর বড় করা (Title Case):
const sentence = "javascript is fun!";
const titleCase = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase); // Output: "Javascript Is Fun!"

// ----------------------------------------------------------------------------

// ৫. উদাহরণ: রেগুলার এক্সপ্রেশন দিয়ে কেস পরিবর্তন
// কোনো নির্দিষ্ট অক্ষর বা অংশ বড় হাতের অক্ষরে রূপান্তর করা:
const text3 = "i love javascript programming!";
const updatedText = text3.replace(/javascript/g, (match) =>
  match.toUpperCase()
);
console.log(updatedText); // Output: "i love JAVASCRIPT programming!"

// ----------------------------------------------------------------------------

// ৬. ব্যবহারিক চ্যালেঞ্জ
// 1. ইউজার নাম ফরম্যাটিং:
// ইউজার নাম সবসময় lowercase-এ রাখতে হলে:
const username = "ShipanMallik123";
const normalizedUsername = username.toLowerCase();
console.log(normalizedUsername); // Output: "shipanmallik123"

// 2. ফাইল নামের কেস ঠিক করা:
const fileName = "MyDocument.PDF";
const normalizedFileName = fileName.toLowerCase();
console.log(normalizedFileName); // Output: "mydocument.pdf"
