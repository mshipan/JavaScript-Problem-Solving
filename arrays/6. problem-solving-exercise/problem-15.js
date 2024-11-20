// Write a function that finds the sum of all numbers in an array (reduce).
function findSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

const array = [1, 2, 3, 4];
console.log(findSum(array));

// ---------------------------------------------------------------------------

// How It Works:
// 1. reduce() মেথড:
//    - এটি দুটি প্যারামিটার নেয়: একটি callback function এবং একটি initial value।
//    - callback function-এর মধ্যে দুটি অংশ থাকে:
//      - accumulator(a): পূর্ববর্তী অপারেশনের ফলাফল।
//      - currentValue(b): বর্তমান উপাদান যা প্রক্রিয়াকৃত হচ্ছে।
//    - initial value: accumulator-এর শুরু মান (এখানে 0)।

// 2. Callback Logic:
//    - প্রতিটি উপাদানের জন্য accumulator + currentValue যোগ করা হয়।
//    - প্রথম চক্রে: 0+1=1।
//    - দ্বিতীয় চক্রে: 1+2=3।
//    - তৃতীয় চক্রে: 3+3=6।
//    - এবং এইভাবে শেষ পর্যন্ত যোগফল বের হয়।

// 3. Output:
//    - যোগফল: 10

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. Empty Array:
// const result = findSum([]);
// console.log(result); // Output: 0
// যদি অ্যারে ফাঁকা থাকে, তবে reduce() initial value (0) রিটার্ন করবে।

// 2. Array with Negative Numbers:
// const result = findSum([-1, -2, -3]);
// console.log(result); // Output: -6

// 3. Array with One Element:
// const result = findSum([10]);
// console.log(result); // Output: 10

// ---------------------------------------------------------------------------

// Advantages of reduce:
// - জটিল গণনা বা প্রসেসিং সহজ করে।
// - কোড ক্লিন এবং কমপ্যাক্ট হয়।
// - শুধুমাত্র যোগফল নয়, অন্যান্য ধরণের কম্পিউটেশনেও ব্যবহার করা যায়।

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n), কারণ প্রতিটি উপাদান একবার প্রক্রিয়াকৃত হয়।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(1), কারণ অতিরিক্ত কোনো মেমরি ব্যবহার হয় না।
