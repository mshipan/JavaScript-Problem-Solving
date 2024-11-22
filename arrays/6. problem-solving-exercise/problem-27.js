// Write a function to find common elements between two arrays.

function findCommonElements(arr1, arr2) {
  // Step 1: Sort both arrays to apply the two-pointer technique
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  const result = [];
  let i = 0, // Pointer for arr1
    j = 0; // Pointer for arr2

  // Step 2: Traverse both arrays using two pointers
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // If both pointers point to the same value, add to the result
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      // Move the pointer in arr1 forward if its value is smaller
      i++;
    } else {
      // Move the pointer in arr2 forward if its value is smaller
      j++;
    }
  }
  return result;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(findCommonElements(array1, array2));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:

// Step 1: Sort the Arrays
// arr1.sort((a, b) => a - b);
// arr2.sort((a, b) => a - b);
// - দুইটি ইনপুট অ্যারে sort করা হয়েছে কারণ two-pointer technique ঠিকভাবে কাজ করার জন্য অ্যারে sorted হতে হয়।

// Step 2: Two Pointers
// let i = 0,
// j = 0;
// const result = [];

// - i এবং j দুইটি পয়েন্টার দিয়ে কাজ শুরু হয়, যেখানে:
//   - i arr1 অ্যারেতে কাজ করে।
//   - j arr2 অ্যারেতে কাজ করে।

// While Loop Explanation:
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] === arr2[j]) {
//     result.push(arr1[i]);
//     i++;
//     j++;
//   } else if (arr1[i] < arr2[j]) {
//     i++;
//   } else {
//     j++;
//   }
// }

// 1. যদি arr1[i] === arr2[j]:
// উভয় অ্যারেতে একই উপাদান পাওয়া গেলে সেটি result-এ যোগ করা হয় এবং উভয় পয়েন্টার ১ বাড়ানো হয়।
// উদাহরণ: arr1[i] = 2, arr2[j] = 2 -> result.push(2)

// 2. যদি arr1[i] < arr2[j]:
// arr1-এর বর্তমান উপাদান ছোট হলে, i++ করে next element-এ যাওয়া হয়।
// উদাহরণ: arr1[i] = 1, arr2[j] = 2 -> i++

// 3. যদি arr1[i] > arr2[j]:
// arr2-এর বর্তমান উপাদান ছোট হলে, j++ করে next element-এ যাওয়া হয়।
// উদাহরণ: arr1[i] = 3, arr2[j] = 2 -> j++

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. একটি অ্যারে খালি:
// console.log(findCommonElements([], [1, 2, 3])); // Output: []

// 2. কোনো কমন এলিমেন্ট নেই:
// console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // Output: []

// 3. ডুপ্লিকেট এলিমেন্টস:
// console.log(findCommonElements([1, 1, 2], [1, 2, 2])); // Output: [1, 2]

// ---------------------------------------------------------------------------

// Time Complexity:
// - Sorting: O(nlogn+mlogm), যেখানে n এবং m দুইটি অ্যারের দৈর্ঘ্য।
// - Two-pointer traversal: O(n+m)।
// - মোট: O(nlogn+mlogm)।

// ---------------------------------------------------------------------------

// Space Complexity:
// - অতিরিক্ত স্পেস ব্যবহৃত হয়েছে শুধু result স্টোর করার জন্য।
// - স্পেস কমপ্লেক্সিটি: O(k), যেখানে k হলো common elements এর সংখ্যা।
