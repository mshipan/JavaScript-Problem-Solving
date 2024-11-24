// Write a function that checks if a specific value exists within any k-sized window in an array.
function valueExistsInWindow(arr, target, k) {
  if (arr.length < k) {
    throw new Error(
      "Array length must be greater than or equal to the window size k."
    );
  }
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === target) {
      return true;
    }
    if (j - i + 1 === k) {
      i++;
    }
  }
  return false;
}

const array = [1, 2, 3, 4, 5];

console.log(valueExistsInWindow(array, 3, 3));
console.log(valueExistsInWindow(array, 6, 3));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// - শুরুতেই চেক করা: যদি arr.length < k, তাহলে একটি ত্রুটি তৈরি করা হয়েছে, কারণ k-এর চেয়ে ছোট অ্যারেতে এই সমাধান কার্যকর নয়।
// - লুপ চালানো: j-এর মাধ্যমে পুরো অ্যারে স্ক্যান করা হয়েছে।
//   - যদি arr[j]===target, তাহলে target-এর উপস্থিতি নিশ্চিত করা হয়েছে এবং সরাসরি true রিটার্ন করা হয়েছে।
// - উইন্ডোর আকার বজায় রাখা: যখন j−i+1===k, তখন উইন্ডোর শুরু সরানো হয়েছে (i++)।
// - শেষে চেক করা: যদি লুপ শেষে target না মিলে, তাহলে false রিটার্ন করা হয়েছে।

// ---------------------------------------------------------------------------

// উদাহরণ:
// Input: arr = [1, 2, 3, 4, 5], target = 3, k = 3
// Output: true
// Explanation: উইন্ডো [1, 2, 3], [2, 3, 4], [3, 4, 5] এর মধ্যে [1, 2, 3] এ 3 আছে।

// Input: arr = [1, 2, 3, 4, 5], target = 6, k = 3
// Output: false
// Explanation: কোনো উইন্ডোতেই 6 নেই।

// Input: arr = [1, 2, 2, 4, 5], target = 2, k = 2
// Output: true
// Explanation: উইন্ডো [1, 2], [2, 2], [2, 4], [4, 5] এর মধ্যে [1, 2] তে 2 আছে।

// ---------------------------------------------------------------------------

// টাইম কমপ্লেক্সিটি:
// - O(n) — প্রতিটি উপাদান একবার প্রসেস করা হয়েছে।

// ---------------------------------------------------------------------------

// স্পেস কমপ্লেক্সিটি:
// - O(1) — অতিরিক্ত কোনো ডেটা স্ট্রাকচার ব্যবহৃত হয়নি।
