// Write a function that copies a part of an array to another location within the same array (copyWithin).

function copyArray(arr, target, start, end) {
  return arr.copyWithin(target, start, end);
}

const array = [1, 2, 3, 4, 5];
console.log(copyArray(array, 1, 3, 5));

// ---------------------------------------------------------------------------

// কোড ব্যাখ্যা
// 1. arr.copyWithin(target, start, end):
//    - target: কোন অবস্থানে কপি শুরু হবে।
//    - start: যে ইন্ডেক্স থেকে কপি শুরু হবে। ডিফল্ট মান: 0।
//    - end: যে ইন্ডেক্স পর্যন্ত কপি হবে (শেষ ইন্ডেক্সটি বাদ দেওয়া হয়)। ডিফল্ট মান: অ্যারের দৈর্ঘ্য।

// 2. মূল অ্যারেটি পরিবর্তিত হয়:
//    - এই মেথড কোনো নতুন অ্যারে তৈরি করে না। এটি সরাসরি মূল অ্যারেটিতে কাজ করে।

// ---------------------------------------------------------------------------

// উদাহরণ বিশ্লেষণ
// const array = [10, 20, 30, 40, 50];

// অ্যারের প্রথমে শেষের দুটি উপাদান কপি
// console.log(copyArray(array, 0, 3, 5));
// আউটপুট: [40, 50, 30, 40, 50]

// মাঝের অংশে শুরু থেকে উপাদান কপি
// console.log(copyArray(array, 2, 0, 2));
// আউটপুট: [10, 20, 10, 20, 50]

// ---------------------------------------------------------------------------

// Edge Cases
// 1. Empty Array:
// const emptyArray = [];
// console.log(copyArray(emptyArray, 0));
// আউটপুট: []

// 2. Target, Start এবং End এর বাইরে:
// const array = [1, 2, 3, 4];
// console.log(copyArray(array, -2, 0, 5));
// আউটপুট: [1, 2, 1, 2]

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n): যেখানে n হলো কপিকৃত উপাদানের সংখ্যা।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(1): অতিরিক্ত কোনো স্থান ব্যবহার করে না, মূল অ্যারেটিতে কাজ করে।