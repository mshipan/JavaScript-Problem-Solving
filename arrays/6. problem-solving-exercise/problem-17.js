// Write a function that checks if all elements in an array meet a specific condition (every).

function allElementsMeetCondition(arr, conditionFn) {
  return arr.every(conditionFn);
}

const isPositive = (num) => num > 0;
const array = [1, 2, 3, 4, 5];
console.log(allElementsMeetCondition(array, isPositive));

const isLessThanTen = (num) => num < 10;
const anotherArray = [3, 8, 9];
console.log(allElementsMeetCondition(anotherArray, isLessThanTen));

const yetAnotherArray = [1, -2, 3];
console.log(allElementsMeetCondition(yetAnotherArray, isPositive));

// ---------------------------------------------------------------------------

// 1. every() মেথডের কাজ:
//    - এটি অ্যারের প্রতিটি উপাদানের উপর callback ফাংশন প্রয়োগ করে।
//    - যদি সব উপাদান callback ফাংশনের শর্ত পূরণ করে, তবে এটি true রিটার্ন করে।
//    - যদি কোনো একটি উপাদান শর্ত পূরণ না করে, তবে এটি সাথে সাথে false রিটার্ন করে এবং আর চেক করে না।

// 2. ফাংশনের গঠন:
//    - arr.every(conditionFn) — এখানে conditionFn একটি কন্ডিশন চেক করার ফাংশন।
//    - এটি অ্যারের প্রতিটি উপাদানের জন্য শর্ত চেক করে।

// 3. কোড বিশ্লেষণ:
//    - isPositive ফাংশন ব্যবহার করে চেক করা হচ্ছে যে, সব সংখ্যাই পজিটিভ কিনা।
//    - isLessThanTen ফাংশন দিয়ে চেক করা হচ্ছে যে, সব সংখ্যাই ১০ এর চেয়ে ছোট কিনা।

// ---------------------------------------------------------------------------

// Edge Cases
// Empty array
// console.log(allElementsMeetCondition([], isPositive)); // Output: true (Because there are no elements to violate the condition)

// // Single element array
// console.log(allElementsMeetCondition([5], isPositive)); // Output: true

// // All elements meet the condition
// console.log(allElementsMeetCondition([2, 4, 6, 8], (num) => num % 2 === 0)); // Output: true

// // Some elements do not meet the condition
// console.log(allElementsMeetCondition([2, 4, 6, 7], (num) => num % 2 === 0)); // Output: false

// ---------------------------------------------------------------------------

// Key Notes
// - every() একটি নির্ভরযোগ্য পদ্ধতি যখন অ্যারের প্রতিটি উপাদানের উপর শর্ত প্রয়োগ করতে হবে।
// - এটি অনেক সহজ ও কার্যকরী, বিশেষত বড় অ্যারেতে শর্ত চেক করার জন্য।
// - কোডটি আরও ডায়নামিক করার জন্য আমরা conditionFn ব্যবহার করেছি, যা যেকোনো শর্ত চেক করতে ব্যবহার করা যায়।

// ---------------------------------------------------------------------------

// Time Complexity:
// every() মেথডটি অ্যারের প্রতিটি উপাদানের উপর callback ফাংশন প্রয়োগ করে যতক্ষণ না একটি শর্ত ব্যর্থ হয়।

// - Best Case:
//   - যদি প্রথম উপাদানই শর্ত পূরণ না করে, তবে লুপটি একবারেই থেমে যাবে।
//   - Time Complexity: O(1)

// - Average Case:
//   - যদি অ্যারের মাঝামাঝি কোনো উপাদান শর্ত পূরণ না করে, তবে অর্ধেক উপাদান চেক করা লাগবে।
//   - Time Complexity: O(n/2) (এটি গড়পড়তা, যা কার্যত O(n) এর সমান)

// - Worst Case:
//   - যদি অ্যারের সব উপাদান শর্ত পূরণ করে, তবে প্রতিটি উপাদান চেক করা হবে।
//   - Time Complexity: O(n), যেখানে n হলো অ্যারের দৈর্ঘ্য।

// ---------------------------------------------------------------------------

// Space Complexity:
// - every() কোনো অতিরিক্ত ডেটা স্ট্রাকচার তৈরি করে না। এটি শুধুমাত্র ইনপুট অ্যারে এবং একটি শর্ত ফাংশনের উপর কাজ করে।
// - Space Complexity: O(1)
