// Write a function that flattens an array with nested arrays up to a specific depth (flat).

const flattenArray = (arr, depth) => {
  return arr.flat(depth);
};

const nestedArray = [1, [2, [3, [4, [5]]]]];
console.log(flattenArray(nestedArray, 2));

// ---------------------------------------------------------------------------

// কোডের ব্যাখ্যা
// 1. arr.flat(depth):
//    - arr: এটি মূল অ্যারে যা ফ্ল্যাট করা হবে।
//    - depth: এটি ফ্ল্যাট করার গভীরতা নির্ধারণ করে।
//      - উদাহরণস্বরূপ, depth = 2 হলে, অ্যারেটি সর্বোচ্চ 2 স্তর পর্যন্ত ফ্ল্যাট হবে।

// 2. উদাহরণ:
//    - মূল অ্যারে: [1, [2, [3, [4, [5]]]]]
//    - depth = 2:
//      - প্রথম স্তর ফ্ল্যাট হবে: [1, 2, [3, [4, [5]]]]
//      - দ্বিতীয় স্তর ফ্ল্যাট হবে: [1, 2, 3, [4, [5]]]

// 3. ফলাফল:
//    - আউটপুট: [1, 2, 3, [4, [5]]]

// ---------------------------------------------------------------------------

// Edge Cases

// Case 1: Empty Array
// - যদি অ্যারে খালি থাকে, তাহলে flat() মেথড সরাসরি খালি অ্যারে ফেরত দেয়।
// const emptyArray = [];
// console.log(emptyArray.flat(2)); // Output: []

// Case 2: No Nested Arrays
// - যদি অ্যারেতে কোনো নেস্টেড অ্যারে না থাকে, তাহলে flat() মেথড মূল অ্যারেটি অপরিবর্তিতভাবে ফেরত দেয়।
// const flatArray = [1, 2, 3];
// console.log(flatArray.flat(1)); // Output: [1, 2, 3]

// Case 3: Excess Depth Value
// - যদি depth এর মান অ্যারেতে থাকা সর্বোচ্চ স্তরের চেয়ে বড় হয়, তাহলে অ্যারেটি পুরোপুরি ফ্ল্যাট হয়ে যাবে।
// const nestedArray = [1, [2, [3, [4]]]];
// console.log(nestedArray.flat(10)); // Output: [1, 2, 3, 4]

// Case 4: Depth Value as 0
// - যদি depth = 0 সেট করা হয়, তাহলে flat() মেথড অ্যারেটিকে কোনো পরিবর্তন করবে না।
// const nestedArray = [1, [2, [3, [4]]]];
// console.log(nestedArray.flat(0)); // Output: [1, [2, [3, [4]]]]

// Case 5: Arrays with Sparse (Holes) Elements
// - flat() মেথড অ্যারেতে থাকা খালি স্থান বা holes (undefined slots) অপসারণ করে।
// const sparseArray = [1, , 3, [4, , 6]];
// console.log(sparseArray.flat(1)); // Output: [1, 3, 4, 6]

// Case 6: Non-Nested Arrays with Depth
// - যদি flat() এর depth উল্লেখ করা হয় কিন্তু অ্যারেটি নেস্টেড না হয়, তাহলে মেথডটি কোনো পরিবর্তন ছাড়াই মূল অ্যারে ফেরত দেয়।
// const simpleArray = [1, 2, 3, 4];
// console.log(simpleArray.flat(2)); // Output: [1, 2, 3, 4]

// Case 7: Arrays Containing Non-Array Elements
// - flat() শুধুমাত্র নেস্টেড অ্যারে ফ্ল্যাট করে। অন্য কোনো ডেটা টাইপ থাকলে তা অপরিবর্তিত থাকে।
// const mixedArray = [1, [2, "hello", [true, 4]]];
// console.log(mixedArray.flat(2)); // Output: [1, 2, "hello", true, 4]

// ---------------------------------------------------------------------------

// Time Complexity:
// - যদি অ্যারেটি খুব বড় হয় এবং গভীর স্তর পর্যন্ত ফ্ল্যাট করতে হয়, তাহলে টাইম কমপ্লেক্সিটি হবে O(n), যেখানে n হলো অ্যারেটির মোট উপাদান সংখ্যা।

// ---------------------------------------------------------------------------

// Space Complexity:
// - স্পেস কমপ্লেক্সিটি নির্ভর করে মূল অ্যারে কতটুকু স্তরে নেস্টেড রয়েছে। গভীর নেস্টেড অ্যারে হলে স্পেস কমপ্লেক্সিটি বাড়তে পারে।
