// Write a function getSubstring that takes a string and two numbers (start index and end index) as input and returns the substring between those indices.

// ----------------------------------------------------------------------------

function getSubstring(str, startIndex, endIndex) {
  return str.substring(startIndex, endIndex);
}

const string = "JavaScript";
console.log(getSubstring(string, 0, 4));

// ----------------------------------------------------------------------------

// ব্যাখ্যা:
// 1. ফাংশন ডিক্লারেশন:
//    - getSubstring নামের একটি ফাংশন ডিক্লেয়ার করা হয়েছে, যা তিনটি প্যারামিটার নেয়:
//      - str (মূল স্ট্রিং),
//      - startIndex (শুরুর ইন্ডেক্স),
//      - endIndex (শেষ ইন্ডেক্স)।

// 2. substring মেথড ব্যবহার:
//    - substring(startIndex, endIndex) মেথডটি মূল স্ট্রিং থেকে শুরুর এবং শেষ ইন্ডেক্সের মধ্যে থাকা সাবস্ট্রিং রিটার্ন করে।
//    - শুরুর ইন্ডেক্স অন্তর্ভুক্ত হয় এবং শেষ ইন্ডেক্স অন্তর্ভুক্ত হয় না।

// 3. ফলাফল রিটার্ন করা:
//    - প্রাপ্ত সাবস্ট্রিং ফাংশন থেকে রিটার্ন করা হয়।

// 4. উদাহরণ:
//    - "JavaScript" থেকে ইন্ডেক্স 0 থেকে 4 পর্যন্ত অংশ নিলে আউটপুট হয় "Java"।
//    - "Bangladesh" থেকে ইন্ডেক্স 3 থেকে 7 পর্যন্ত অংশ নিলে আউটপুট হয় "glad"।

// ----------------------------------------------------------------------------

// গুরুত্বপূর্ণ বিষয়:
// - ইন্ডেক্স সীমাবদ্ধতা:
//   - যদি startIndex এবং endIndex যথাযথ সীমার মধ্যে না থাকে, তবে কোডটি অপ্রত্যাশিত ফলাফল দিতে পারে।
// - বিকল্প মেথড:
//   - slice(startIndex, endIndex) ব্যবহার করেও একই কাজ করা যায়।
