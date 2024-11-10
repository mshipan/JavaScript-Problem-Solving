// reverse() হলো জাভাস্ক্রিপ্টের একটি বিল্ট-ইন মেথড, যা কোনো অ্যারের উপাদানগুলোর ক্রমকে উল্টে দেয়। 
// এটি মূল অ্যারের উপরেই সরাসরি পরিবর্তন করে এবং রিটার্ন করে সেই পরিবর্তিত অ্যারেটিকে। এর মাধ্যমে অ্যারের 
// প্রথম উপাদানটি শেষ দিকে এবং শেষের উপাদানটি প্রথম দিকে চলে আসে।

// --------------------------------------------------------------------------

// reverse() মেথডের বৈশিষ্ট্য:
// - এটি অ্যারের উপাদানগুলোর ক্রমকে উল্টে দেয়।
// - এই মেথডটি মূল অ্যারেতেই পরিবর্তন আনে, অর্থাৎ এটি in-place অপারেশন।
// - reverse() মেথড পরিবর্তিত অ্যারেটিকে রিটার্ন করে।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
array.reverse()

// --------------------------------------------------------------------------

// উদাহরণ:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();

console.log(numbers); // আউটপুট: [5, 4, 3, 2, 1]
// এখানে, reverse() মেথডটি numbers অ্যারের উপাদানগুলোর ক্রমকে উল্টে দিয়ে পরিবর্তিত অ্যারে 
// [5, 4, 3, 2, 1] রিটার্ন করেছে।

// --------------------------------------------------------------------------

// স্ট্রিং অ্যারের সাথে উদাহরণ:
let fruits = ["apple", "banana", "mango", "grapes"];
fruits.reverse();

console.log(fruits); // আউটপুট: ["grapes", "mango", "banana", "apple"]

// এখানে, fruits অ্যারেটির উপাদানগুলোর ক্রম reverse() মেথডের মাধ্যমে উল্টে গিয়ে ফলাফল হয়েছে 
// ["grapes", "mango", "banana", "apple"]।

// --------------------------------------------------------------------------

// reverse() মেথডের উপকারিতা:
// 1. সহজে ক্রম উল্টানো: কোনো অ্যারের উপাদানগুলোকে সহজে উল্টো ক্রমে সাজাতে সাহায্য করে।
// 2. মূল অ্যারে পরিবর্তন: in-place অপারেশন হওয়ায় এটি অতিরিক্ত মেমরি ব্যবহার ছাড়াই মূল অ্যারেতে পরিবর্তন আনে।

// --------------------------------------------------------------------------

// ব্যবহার ক্ষেত্র:
// - ডাটা প্রক্রিয়াকরণে: কোনো অ্যারের উপাদানগুলোকে উল্টো ক্রমে সাজানো প্রয়োজন হলে।
// - বিপরীত ক্রমে প্রিন্ট: কোনো অ্যারের উপাদানগুলোকে বিপরীত ক্রমে প্রিন্ট করার জন্য।

// --------------------------------------------------------------------------

// reverse() এর সাথে সতর্কতা:
// যেহেতু এটি মূল অ্যারে পরিবর্তন করে, তাই যদি মূল অ্যারেটি অপরিবর্তিত রাখতে চান, 
// তাহলে প্রথমে অ্যারেটির একটি কপি তৈরি করা ভালো।
let originalArray = [1, 2, 3, 4];
let reversedArray = [...originalArray].reverse();

console.log(originalArray); // আউটপুট: [1, 2, 3, 4]
console.log(reversedArray); // আউটপুট: [4, 3, 2, 1]

// এখানে originalArray অপরিবর্তিত থাকে, আর reversedArray উল্টানো অ্যারে হিসাবে রিটার্ন হয়।