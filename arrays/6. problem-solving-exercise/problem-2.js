// Write a function that finds the sum of all elements in an array.

// Approach 1: Using for Loop
function sumOfArray(arr) {
  if (arr.length === 0) return 0; // Handle edge case: empty array
  let total = 0; // যোগফল সংরক্ষণ করার জন্য একটি ভ্যারিয়েবল
  for (let i = 0; i <= arr.length - 1; i++) {
    total += arr[i]; // প্রতিটি উপাদান যোগ করা হচ্ছে
  }
  return total;
}

const array = [1, 2, 3, 4];
console.log(sumOfArray(array));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// 1. আমরা একটি ভ্যারিয়েবল sum দিয়ে শুরু করি, যার প্রাথমিক মান 0।
// 2. প্রতিটি উপাদান লুপের মাধ্যমে অ্যাক্সেস করে সেটিকে sum এর সাথে যোগ করি।
// 3. শেষে sum রিটার্ন করি।

// ---------------------------------------------------------------------------

// Approach 2: Using reduce() Method
function sumArrayElements(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumArrayElements(numbers));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// 1. reduce() মেথড একটি ক্যালব্যাক ফাংশন ব্যবহার করে অ্যারের প্রতিটি উপাদান প্রক্রিয়াজাত করে।
// 2. এখানে sum হলো accumulator এবং num হলো বর্তমান উপাদান।
// 3. প্রাথমিক মান হিসেবে 0 পাস করা হয়েছে। এটি তখন ব্যবহার করা হবে যখন অ্যারে ফাঁকা থাকবে।

// ---------------------------------------------------------------------------

// Edge Case: Empty Array
// 1. যদি অ্যারে ফাঁকা হয়, উভয় পদ্ধতিই 0 রিটার্ন করবে।
// 2. কারণ যোগফলের নিরপেক্ষ মান হলো 0।
