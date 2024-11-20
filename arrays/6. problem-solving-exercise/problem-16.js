// Write a function that checks if a specific value exists in an array (some).

const valueExistCheck = function (arr, n) {
  return arr.some((num) => num === n);
};

const array = [1, 2, 3, 4];
console.log(valueExistCheck(array, 3));
console.log(valueExistCheck(array, 5));
// ---------------------------------------------------------------------------

// কোডটি কীভাবে কাজ করে:
// 1. some() মেথড:
//    - এটি একটি callback function নেয়।
//    - অ্যারের প্রতিটি উপাদানের উপর callback চালানো হয় যতক্ষণ না এটি একটি true মান পায়।
//    - যদি কোনো উপাদান শর্ত পূরণ করে, এটি true রিটার্ন করে এবং অবিলম্বে লুপ বন্ধ করে।

// 2. Callback Logic:
//    - num === n চেক করে বর্তমান উপাদানটি নির্দিষ্ট মানের সমান কিনা।

// 3. Output:
//    - প্রথম ক্ষেত্রে: 3 অ্যারেতে আছে, তাই এটি true।
//    - দ্বিতীয় ক্ষেত্রে: 5 অ্যারেতে নেই, তাই এটি false।

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. Empty Array:
// console.log(valueExistCheck([], 3)); // Output: false

// 2. Duplicate Values:
// const numbers = [1, 2, 3, 3, 4];
// console.log(valueExistCheck(numbers, 3)); // Output: true

// 3. Different Data Types:
// const mixedArray = [1, '2', true];
// console.log(valueExistCheck(mixedArray, 2)); // Output: false
// console.log(valueExistCheck(mixedArray, '2')); // Output: true

// ---------------------------------------------------------------------------

// Advantages of some:
// - সহজ এবং দ্রুত মান চেক করার জন্য।
// - অ্যারের মধ্যে নির্দিষ্ট শর্ত পূরণকারী উপাদান থাকলেই কাজ শেষ হয়ে যায়, সম্পূর্ণ লুপ করার প্রয়োজন নেই।

// ---------------------------------------------------------------------------

// Time Complexity:
// - Best Case: O(1), যদি প্রথম উপাদানই শর্ত পূরণ করে।
// - Worst Case: O(n), যদি কোনো উপাদান শর্ত পূরণ না করে বা লুপ শেষ করতে হয়।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(1), কারণ এটি অতিরিক্ত মেমরি ব্যবহার করে না।
