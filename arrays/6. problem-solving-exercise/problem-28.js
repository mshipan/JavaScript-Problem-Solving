// Write a function that finds all unique pairs in a sorted array where the sum equals a target value.

function findPairs(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  let left = 0,
    right = sortedArr.length - 1;
  let result = [];
  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      result.push([sortedArr[left], sortedArr[right]]);
      left++;
      right--;
      // Skip duplicate elements to ensure unique pairs
      while (left < right && sortedArr[left] === sortedArr[left - 1]) {
        left++;
      }
      while (left < right && sortedArr[right] === sortedArr[right + 1]) {
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

const array = [1, 1, 2, 2, 3, 4, 5];
console.log(findPairs(array, 5));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// Step 1: Initialize Pointers and Result Array

// let left = 0,
// right = sortedArr.length - 1;
// const result = [];
// - left পয়েন্টার অ্যারের প্রথম থেকে শুরু হয়।
// - right পয়েন্টার অ্যারের শেষ থেকে শুরু হয়।
// - result অ্যারেতে সব unique pairs সঞ্চয় হবে।

// Step 2: Use Two Pointers Technique

// while (left < right) {
//   const sum = sortedArr[left] + sortedArr[right];
//   if (sum === target) {
//     result.push([sortedArr[left], sortedArr[right]]);
//     left++;
//     right--;
//     // Skip duplicate elements
//     while (left < right && sortedArr[left] === sortedArr[left - 1]) left++;
//     while (left < right && sortedArr[right] === sortedArr[right + 1]) right--;
//   } else if (sum < target) {
//     left++;
//   } else {
//     right--;
//   }
// }

// 1. sum === target:
// - যদি দুই পয়েন্টারের মানের যোগফল target এর সমান হয়:
//   - সেই জোড়া result-এ যোগ করা হয়।
//   - উভয় পয়েন্টার এক ধাপ এগিয়ে এবং পিছিয়ে যায়।
//   - ডুপ্লিকেট মান এড়াতে left এবং right পুনরাবৃত্তি করে skip করা হয়।

// 2. sum < target:
// - যোগফল ছোট হলে, left++ করা হয় কারণ sorted array-এর কারণে left বাড়ালে যোগফল বাড়বে।

// 3. sum > target:
// - যোগফল বড় হলে, right-- করা হয় কারণ sorted array-এর কারণে right কমালে যোগফল কমবে।

// ---------------------------------------------------------------------------

// Example Walkthrough:

// Input: findPairs([1, 1, 2, 2, 3, 4, 5], 5)
// - Initial state: left = 0, right = 6.
// - Iteration:
//   1. sum = 1 + 5 = 6 (Move right--).
//   2. sum = 1 + 4 = 5 → Pair [1, 4] → Skip duplicates → left++, right--.
//   3. sum = 2 + 3 = 5 → Pair [2, 3] → Skip duplicates → left++, right--.
//   4. Exit loop: left >= right.
// Output: [[1, 4], [2, 3]]

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. ডুপ্লিকেট উপাদান:
// console.log(findPairs([1, 1, 1, 4, 4, 5, 5], 6)); // Output: [[1, 5]]

// 2. নেগেটিভ সংখ্যা:
// console.log(findPairs([-3, -2, -1, 0, 1, 2, 3], 0)); // Output: [[-3, 3], [-2, 2], [-1, 1]]

// 3. কোনো পেয়ার পাওয়া যায়নি:
// console.log(findPairs([1, 2, 3], 10)); // Output: []

// ---------------------------------------------------------------------------

// Time Complexity:
// - Two-pointer traversal: O(n), কারণ প্রতিটি উপাদান একবারই প্রসেস হয়।
// - মোট: O(n)।

// ---------------------------------------------------------------------------

// Space Complexity:
// - অতিরিক্ত স্পেস শুধুমাত্র result অ্যারের জন্য লাগে।
// - স্পেস কমপ্লেক্সিটি: O(k), যেখানে k হলো unique pairs এর সংখ্যা।
