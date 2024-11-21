// Write a function that retrieves an element from an array at a specified index using the at method.

function findElemFromIndex(arr, index) {
  return arr.at(index);
}

const array = [1, 2, 3, 4, 5];
console.log(findElemFromIndex(array, 2));
console.log(findElemFromIndex(array, -1));

// ---------------------------------------------------------------------------

// ব্যাখ্যা
// 1. at() মেথড:
//    - এটি একটি অ্যারের নির্দিষ্ট ইন্ডেক্সের উপাদান ফেরত দেয়।
//    - পজিটিভ ইন্ডেক্স সরাসরি বাম দিক থেকে শুরু হয় (0 থেকে শুরু করে)।
//    - নেগেটিভ ইন্ডেক্স ডান দিক থেকে শুরু হয় (-1 হলো শেষ উপাদান)।
//    - ইন্ডেক্স সীমার বাইরে থাকলে এটি undefined ফেরত দেয়।

// 2. কোড বিশ্লেষণ:
//    - arr.at(index):
//      - প্যারামিটার হিসেবে index দেয়া হয়।
//      - পজিটিভ ইন্ডেক্স: বাম দিক থেকে উপাদান ফেরত দেয়।
//      - নেগেটিভ ইন্ডেক্স: ডান দিক থেকে উপাদান ফেরত দেয়।

// 3. উদাহরণ:
//    - Input Array: [10, 20, 30, 40, 50]
//    - Index:
//      - 2: 30 ফেরত দেয় কারণ এটি তৃতীয় উপাদান।
//      - -1: 50 ফেরত দেয় কারণ এটি শেষ উপাদান।

// ---------------------------------------------------------------------------

// Edge Cases
// Case 1: Index Out of Range
// - যদি ইন্ডেক্স অ্যারের দৈর্ঘ্যের বাইরে হয়, এটি undefined ফেরত দেয়।
// console.log(findElemFromIndex([10, 20, 30], 5));
// Output: undefined

// Case 2: Empty Array
// - যদি অ্যারে খালি থাকে, এটি সর্বদা undefined ফেরত দেয়।
// console.log(findElemFromIndex([], 0));
// Output: undefined

// Case 3: Negative Index
// - নেগেটিভ ইন্ডেক্স ডান দিক থেকে উপাদান ফেরত দেয়।
// console.log(findElemFromIndex([10, 20, 30, 40], -2));
// Output: 30

// Case 4: Index as Decimal
// - দশমিক ইন্ডেক্স দিলে এটি undefined ফেরত দেয়।
// console.log(findElemFromIndex([10, 20, 30], 1.5));
// Output: undefined

// ---------------------------------------------------------------------------

// Time Complexity:
// - মেথড সরাসরি অ্যারের নির্দিষ্ট ইন্ডেক্সে অ্যাক্সেস করে।
// - মোট: O(1)

// ---------------------------------------------------------------------------

// Space Complexity:
// - কোনো অতিরিক্ত স্পেস ব্যবহার হয় না।
// - মোট: O(1)
