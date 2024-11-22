// Write a function that checks if a string is a palindrome (i.e., the string reads the same backward).
function isPalindrome(str) {
  if (str.length === 0) return 0;
  const normalizeStr = str.toLowerCase();
  let left = 0,
    right = normalizeStr.length - 1;
  while (left < right) {
    if (normalizeStr[left] !== normalizeStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Madam")); // Output: true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: false (special characters are not handled)

// ---------------------------------------------------------------------------

// কোডের ব্যাখ্যা:

// Step 1: Normalize the string
// const normalizedStr = str.toLowerCase();
// - toLowerCase(): বড় অক্ষর এবং ছোট অক্ষরের মধ্যে পার্থক্য দূর করতে স্ট্রিংটি ছোট হাতের অক্ষরে রূপান্তরিত করা হয়েছে।

// Step 2: Use Two-pointer Technique
// let left = 0;
// let right = normalizedStr.length - 1;

// while (left < right) {
//   if (normalizedStr[left] !== normalizedStr[right]) {
//     return false; // Not a palindrome
//   }
//   left++;
//   right--;
// }
// - left এবং right পয়েন্টার: স্ট্রিংয়ের প্রথম এবং শেষ দিক থেকে একসাথে চেক করা হয়।
// - যদি কোনো পর্যায়ে দুইটি পয়েন্টারের মান মিলে না যায়, স্ট্রিংটি প্যালিনড্রোম নয়।

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. Case Insensitivity: বড় এবং ছোট অক্ষর ভিন্ন হওয়া উচিত নয়।
//    - উদাহরণ: "Madam" -> প্যালিনড্রোম।
// 2. Special Characters এবং Spaces:
//    - বর্তমান কোডে শুধুমাত্র অক্ষর চেক করা হয়, স্পেশাল ক্যারেক্টার বা স্পেসের জন্য কোড আপডেট করতে হবে।

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n), যেখানে n স্ট্রিংয়ের দৈর্ঘ্য। কারণ একবারই স্ট্রিংটি পয়েন্টার দিয়ে চেক করা হয়।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(1), কারণ কোনো অতিরিক্ত স্ট্রাকচার ব্যবহার করা হয়নি।

// ---------------------------------------------------------------------------

// Special Characters এবং Spaces হ্যান্ডল করতে:

// function isPalindrome(str) {
//   // Step 1: Remove non-alphanumeric characters and convert to lowercase
//   const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   // Step 2: Use two-pointer technique
//   let left = 0;
//   let right = normalizedStr.length - 1;

//   while (left < right) {
//     if (normalizedStr[left] !== normalizedStr[right]) {
//       return false; // Not a palindrome
//     }
//     left++;
//     right--;
//   }

//   return true; // It's a palindrome
// }

// Example usage
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("No 'x' in Nixon"));               // Output: true
