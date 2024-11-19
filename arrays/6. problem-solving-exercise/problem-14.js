// Write a function that filters out only even numbers from an array (filter).

function findEvenNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findEvenNumbers(array));

// ---------------------------------------------------------------------------

// How It Works:

// 1. Input Array:
// - আমাদের কাছে একটি অ্যারে আছে, যেমন [1, 2, 3, 4, 5, 6, 7, 8]।

// 2. Filter Condition:
// - প্রতিটি উপাদানের জন্য শর্ত: num % 2 === 0
// - অর্থাৎ, যেসব সংখ্যাকে ২ দিয়ে ভাগ করলে অবশিষ্টাংশ (remainder) থাকে না, সেগুলোই জোড় সংখ্যা।

// 3. Output Array:
// - filter() মেথড শর্ত পূরণ করা সংখ্যাগুলো নিয়ে একটি নতুন অ্যারে তৈরি করবে।
// - এই ক্ষেত্রে নতুন অ্যারে হবে [2, 4, 6, 8]।

// ---------------------------------------------------------------------------

// Edge Cases:

// 1. Empty Array:
// const result = filterEvenNumbers([]);
// console.log(result); // Output: []

// 2. No Even Numbers:
// const result = filterEvenNumbers([1, 3, 5, 7]);
// console.log(result); // Output: []

// 3. All Even Numbers:
// const result = filterEvenNumbers([2, 4, 6, 8]);
// console.log(result); // Output: [2, 4, 6, 8]

// ---------------------------------------------------------------------------

// Advantages of filter:
// - এটি অরিজিনাল অ্যারেকে পরিবর্তন না করেই নতুন অ্যারে তৈরি করে।
// - জটিল শর্ত সহজে প্রয়োগ করা যায়।
// - কোডকে ক্লিন এবং পড়তে সহজ করে তোলে।

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n), কারণ অ্যারের প্রতিটি উপাদান একবার করে চেক করা হয়।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(k), যেখানে k হল নতুন অ্যারের উপাদানের সংখ্যা।
