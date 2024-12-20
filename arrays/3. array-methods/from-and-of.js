// ১. from() মেথড
// from() মেথডটি একটি Iterable object (যেমন: স্ট্রিং, অ্যারে, সেট, ম্যাপ) বা array-like object
// (যেমন: arguments, NodeList, ইত্যাদি) থেকে একটি নতুন অ্যারে তৈরি করতে ব্যবহার হয়।

// এটি সাধারণত array-like objects বা iterables কে অ্যারে-এ কনভার্ট করার জন্য ব্যবহৃত হয়।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
Array.from(iterable, mapFunction, thisArg);

// - iterable: যে iterable object বা array-like object থেকে অ্যারে তৈরি করা হবে।
// - mapFunction (optional): একটি ফাংশন যা প্রতিটি উপাদানের উপর কাজ করবে।
// - thisArg (optional): mapFunction এর জন্য context।

// --------------------------------------------------------------------------

// উদাহরণ:
// স্ট্রিং থেকে অ্যারে তৈরি
let str = "hello";
let arr = Array.from(str);
console.log(arr); // আউটপুট: ['h', 'e', 'l', 'l', 'o']

// Set থেকে অ্যারে তৈরি
let set = new Set([1, 2, 3]);
let arrFromSet = Array.from(set);
console.log(arrFromSet); // আউটপুট: [1, 2, 3]

// Map function ব্যবহার করা
let numbers = [1, 2, 3, 4];
let doubled = Array.from(numbers, (x) => x * 2);
console.log(doubled); // আউটপুট: [2, 4, 6, 8]

// এখানে, Array.from() ব্যবহার করে আমরা স্ট্রিং এবং সেট থেকে অ্যারে তৈরি করেছি এবং একটি mapFunction ব্যবহার করে প্রত্যেকটি সংখ্যাকে দ্বিগুণ করেছি।

// --------------------------------------------------------------------------

// ২. of() মেথড
// of() মেথডটি অ্যারে তৈরি করার জন্য ব্যবহার হয়। এটি এক বা একাধিক উপাদান নিয়ে একটি নতুন অ্যারে তৈরি করে, এবং এটি array-like একটি নতুন অ্যারে রিটার্ন করে।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
// Array.of(element1, element2, ..., elementN);

// - element1, element2, ..., elementN: যে উপাদানগুলো অ্যারে তে থাকবে।

// --------------------------------------------------------------------------

// উদাহরণ:
let arr2 = Array.of(1, 2, 3, 4);
console.log(arr2); // আউটপুট: [1, 2, 3, 4]

let singleElementArray = Array.of(100);
console.log(singleElementArray); // আউটপুট: [100]

let emptyArray = Array.of();
console.log(emptyArray); // আউটপুট: []

// এখানে, Array.of() ব্যবহৃত হয়েছে অ্যারে তৈরি করতে। এটি যে কোন সংখ্যা বা উপাদান নিয়ে নতুন অ্যারে তৈরি করতে সাহায্য করে।

// --------------------------------------------------------------------------

// সংক্ষেপে:
// - Array.from(): এটি array-like বা iterable objects থেকে একটি নতুন অ্যারে তৈরি করতে ব্যবহৃত হয়।
// - Array.of(): এটি সরাসরি একটি নতুন অ্যারে তৈরি করতে ব্যবহৃত হয়, যা বিভিন্ন উপাদান গ্রহণ করতে পারে।
