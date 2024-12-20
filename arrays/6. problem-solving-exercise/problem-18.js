// Write a function that fills part of an array with a specific value (fill).

function fillArray(arr, value, start, end) {
  return arr.fill(value, start, end);
}

const array = [1, 2, 3, 4, 5];
console.log(fillArray(array, 5, 1, 3));

// ---------------------------------------------------------------------------

// কোড ব্যাখ্যা
// 1. arr.fill(value, start, end):
//    - value: যে মানটি অ্যারের নির্দিষ্ট অংশে সেট করতে চান।
//    - start: কোন ইন্ডেক্স থেকে পূরণ শুরু হবে। ডিফল্ট মান: 0।
//    - end: কোন ইন্ডেক্সে পূরণ শেষ হবে (শেষ ইন্ডেক্সটি বাদ দেওয়া হয়)। ডিফল্ট মান: অ্যারের দৈর্ঘ্য।

// 2. ডিফল্ট প্যারামিটার:
//    - start এবং end প্রদান না করলে পুরো অ্যারে পূরণ করবে।

// ---------------------------------------------------------------------------

// আউটপুট বিশ্লেষণ
// const array = [1, 2, 3, 4, 5];

// শুধু প্রথম থেকে পূরণ
// console.log(fillArray(array, 9));
// আউটপুট: [9, 9, 9, 9, 9]

// নির্দিষ্ট রেঞ্জে পূরণ
// console.log(fillArray(array, 7, 2, 4));
// আউটপুট: [9, 9, 7, 7, 9]

// ---------------------------------------------------------------------------

// Edge Cases
// 1. Empty Array:
// const emptyArray = [];
// console.log(fillArray(emptyArray, 5));
// আউটপুট: []

// 2. Start এবং End এর বাইরে:
// const array = [1, 2, 3];
// console.log(fillArray(array, 10, -1, 5));
// আউটপুট: [1, 2, 10]

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n): যেখানে n হলো সেই উপাদানের সংখ্যা যা পরিবর্তন করা হবে।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(1): এটি মূল অ্যারেকেই পরিবর্তন করে, কোনো অতিরিক্ত স্থান ব্যবহার করে না।
