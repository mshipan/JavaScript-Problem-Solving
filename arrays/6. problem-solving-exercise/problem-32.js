// Write a function to find the longest substring with all unique characters in a string.

function longestUniqueSubstring(s) {
  let i = 0; // উইন্ডোর শুরু
  let j = 0; // উইন্ডোর শেষ
  let maxLength = 0; // সবচেয়ে লম্বা ইউনিক সাবস্ট্রিং-এর দৈর্ঘ্য
  const charSet = new Set(); // ইউনিক অক্ষর সংরক্ষণের জন্য সেট

  while (j < s.length) {
    if (!charSet.has(s[j])) {
      // নতুন অক্ষর উইন্ডোতে যোগ করো
      charSet.add(s[j]);
      // সর্বাধিক দৈর্ঘ্য আপডেট করো
      maxLength = Math.max(maxLength, j - i + 1);
      j++; // উইন্ডোর শেষ বাড়াও
    } else {
      // পুনরাবৃত্তি হলে উইন্ডোর শুরু সরাও
      charSet.delete(s[i]);
      i++;
    }
  }

  return maxLength;
}

// উদাহরণ ব্যবহার:
console.log(longestUniqueSubstring("abcabcbb")); // Output: 3
console.log(longestUniqueSubstring("bbbbb")); // Output: 1
console.log(longestUniqueSubstring("pwwkew")); // Output: 3

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// - উইন্ডো প্রাথমিক সেটআপ:
//   - i এবং j হল উইন্ডোর শুরু এবং শেষ।
//   - একটি সেট (charSet) ব্যবহার করা হয়েছে, যাতে ইউনিক অক্ষর সংরক্ষণ করা যায়।
//   - maxLength দিয়ে সবচেয়ে লম্বা সাবস্ট্রিং-এর দৈর্ঘ্য ট্র্যাক করা হয়।
// - লুপের ভেতরে শর্ত:

//   - যদি s[j] সেটে না থাকে:
//     - সেটে s[j] যোগ করো।
//     - maxLength আপডেট করো: j−i+1।
//     - j বাড়াও।
//   - যদি s[j] ইতোমধ্যে সেটে থাকে:
//     - সেট থেকে s[i] মুছে ফেলো।
//     - i বাড়াও।
// - শেষে maxLength রিটার্ন করো।

// ---------------------------------------------------------------------------

// উদাহরণ:
// Input: "abcabcbb"
// Output: 3
// Explanation: "abc" হল সবচেয়ে লম্বা ইউনিক সাবস্ট্রিং।

// Input: "bbbbb"
// Output: 1
// Explanation: "b" হল সবচেয়ে লম্বা ইউনিক সাবস্ট্রিং।

// Input: "pwwkew"
// Output: 3
// Explanation: "wke" হল সবচেয়ে লম্বা ইউনিক সাবস্ট্রিং।

// ---------------------------------------------------------------------------

// টাইম কমপ্লেক্সিটি:
// - O(n) — প্রতিটি অক্ষর একবার যোগ এবং একবার মুছে ফেলা হয়।

// ---------------------------------------------------------------------------

// স্পেস কমপ্লেক্সিটি:
// - O(k) — যেখানে k হল ইউনিক অক্ষরের সংখ্যা।
