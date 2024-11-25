// স্ট্রিং ট্রিমিং বলতে স্ট্রিংয়ের শুরু এবং শেষ থেকে অপ্রয়োজনীয় স্পেস (spaces) বা সাদা জায়গা (whitespace) মুছে ফেলার প্রক্রিয়াকে বোঝায়।
// এটি সাধারণত ডেটা পরিষ্কার করার জন্য প্রয়োজন হয়, যেমন ইউজার ইনপুট প্রক্রিয়াকরণ।

// ----------------------------------------------------------------------------

// ১. trim() মেথড
// trim() মেথড স্ট্রিংয়ের শুরু এবং শেষ থেকে সব সাদা জায়গা (spaces, tabs, newlines) সরিয়ে দেয়।

// সিনট্যাক্স:
string.trim();

// উদাহরণ:
const text = "   Hello, World!   ";
const trimmedText = text.trim();
console.log(trimmedText); // Output: "Hello, World!"

// ----------------------------------------------------------------------------

// ২. trimStart() এবং trimEnd()
// - trimStart() (বা trimLeft()): শুধুমাত্র স্ট্রিংয়ের শুরুর দিক থেকে সাদা জায়গা সরায়।
// - trimEnd() (বা trimRight()): শুধুমাত্র স্ট্রিংয়ের শেষের দিক থেকে সাদা জায়গা সরায়।

// সিনট্যাক্স:
string.trimStart();
string.trimEnd();

// উদাহরণ:
const text1 = "   Hello, World!   ";
console.log(text1.trimStart()); // Output: "Hello, World!   "
console.log(text1.trimEnd()); // Output: "   Hello, World!"

// ----------------------------------------------------------------------------

// ৩. বাস্তব উদাহরণ

// 1. ইউজার ইনপুট পরিষ্কার করা:
// ইউজার ইনপুটে অনেক সময় অপ্রয়োজনীয় স্পেস থাকতে পারে। সেগুলো সরিয়ে প্রক্রিয়া করা হয়।

const userInput = "   ShipanMallik   ";
const cleanedInput = userInput.trim();
console.log(cleanedInput); // Output: "ShipanMallik"

// 2. ডাটাবেস সংরক্ষণে পরিষ্কার ডেটা রাখা:
// ইনপুট ফিল্ড থেকে পাওয়া ডেটা সরাসরি স্টোর করার আগে ট্রিম করা হয়।

const email = "   example@domain.com   ";
const normalizedEmail = email.trim().toLowerCase();
console.log(normalizedEmail); // Output: "example@domain.com"

// ----------------------------------------------------------------------------

// ৪. ট্রিমিং কেন প্রয়োজনীয়?

// 1. ডুপ্লিকেট সমস্যা এড়ানো:
//    সাদা জায়গার কারণে একই ডেটা ভিন্নভাবে সংরক্ষিত হতে পারে। যেমন:

const name1 = "Shipan";
const name2 = "   Shipan   ";
console.log(name1 === name2); // Output: false

//    ট্রিম করার পর:
console.log(name1.trim() === name2.trim()); // Output: true

// 2. ইউজার এক্সপেরিয়েন্স উন্নত করা:
//    লগইন বা ফর্ম সাবমিশনে ইউজারের অপ্রয়োজনীয় স্পেস ইনপুট প্রক্রিয়া ব্যাহত করতে পারে।

// 3. স্ট্রিং ম্যাচিং সঠিকভাবে করা:
//    ওয়েবসাইটের সার্চ ফিল্ডে অপ্রয়োজনীয় স্পেস থাকলে সার্চ রেজাল্ট মিসম্যাচ হতে পারে। ট্রিম করলে সমস্যা সমাধান হয়।

// ----------------------------------------------------------------------------

// ৫. এক্সট্রা স্পেস রিমুভ করা (মাঝের স্পেসসহ)
// যদি স্ট্রিংয়ের শুরু এবং শেষ ছাড়াও মাঝখানে একাধিক স্পেস থাকে, সেটাও সরাতে হলে `split()` এবং `join()` মেথড ব্যবহার করা হয়।

// উদাহরণ:

const text2 = "  This   is   a   test  ";
const cleanedText = text2.split(/\s+/).join(" ").trim();
console.log(cleanedText); // Output: "This is a test"

// ----------------------------------------------------------------------------

// ৬. চ্যালেঞ্জ
// স্ট্রিং ট্রিমিং নিয়ে এই সমস্যা সমাধান করুন:

// // নিচের স্ট্রিং থেকে শুধু সাদা জায়গা সরিয়ে পরিষ্কার স্ট্রিং তৈরির জন্য একটি ফাংশন লিখুন।
const messyString = "   I   love   JavaScript!    ";
function cleanString(str) {
  return str.split(/\s+/).join(" ").trim();
}
console.log(cleanString(messyString)); // Output: "I love JavaScript!"
