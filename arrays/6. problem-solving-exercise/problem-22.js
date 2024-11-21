// Write a function that finds an element in an array using findLast that matches a certain condition.

function findLastMatchingElement(arr, condition) {
  return arr.findLast(condition);
}

// Example Usage
const array = [5, 12, 8, 130, 44];

// Find the last element greater than 10
const result = findLastMatchingElement(array, (num) => num > 10);

console.log(result);
// Output: 44

// ---------------------------------------------------------------------------

// ব্যাখ্যা
// 1. findLast() মেথড:
//    - এটি একটি নতুন মেথড যা ES2022-এ যুক্ত হয়েছে।
//    - এটি ডান দিক থেকে বাম দিকে অ্যারে ইটারেট করে এবং প্রথম উপাদানটি ফেরত দেয় যা নির্দিষ্ট শর্ত পূরণ করে।
//    - শর্ত পূরণকারী উপাদান না পেলে এটি undefined ফেরত দেয়।

// 2. কোড বিশ্লেষণ:
//    - arr.findLast(condition):
//      - condition হলো একটি ফাংশন যা প্রত্যেক উপাদানের উপর চালানো হয়।
//      - প্রথম উপাদান যা শর্ত পূরণ করে সেটি ফেরত দেয়।

// 3. উদাহরণ:
//    - Input Array: [5, 12, 8, 130, 44]
//    - Condition: num > 10
//    - Iteration Steps:
//      - 44: শর্ত পূরণ করে, ফেরত দেয়।
//      - 130: চেক করা হয়, কিন্তু এটি পরে আসে।
//      - বাকিগুলো চেক করা হয় না কারণ একটি উপাদান ইতোমধ্যে খুঁজে পাওয়া গেছে।

// ---------------------------------------------------------------------------

// Edge Cases
// Case 1: Empty Array
// - যদি অ্যারে খালি হয়, এটি undefined ফেরত দেয়।
// console.log(findLastMatchingElement([], (num) => num > 10));
// Output: undefined

// Case 2: No Match Found
// - শর্ত পূরণকারী কোনো উপাদান না থাকলে এটি undefined ফেরত দেয়।
// const array = [1, 2, 3];
// console.log(findLastMatchingElement(array, (num) => num > 10));
// Output: undefined

// Case 3: Multiple Matches
// - অ্যারে থেকে ডান দিকের প্রথম শর্ত পূরণকারী উপাদান ফেরত দেয়।
// const array = [5, 12, 8, 130, 44];
// console.log(findLastMatchingElement(array, (num) => num > 8));
// Output: 44

// ---------------------------------------------------------------------------

// Time Complexity:
// - সর্বোচ্চ অ্যারের দৈর্ঘ্য অনুযায়ী শর্ত চেক করতে হয়।
// - মোট: O(n)

// ---------------------------------------------------------------------------

// Space Complexity:
// - কোনো অতিরিক্ত স্পেস ব্যবহার করে না।
// - মোট: O(1)
