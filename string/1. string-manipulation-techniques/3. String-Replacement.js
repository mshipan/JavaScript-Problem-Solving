// স্ট্রিং রিপ্লেসমেন্ট হলো একটি স্ট্রিংয়ের নির্দিষ্ট অংশকে নতুন কোনো অংশ দিয়ে প্রতিস্থাপন বা পরিবর্তন করা।
// এটি জাভাস্ক্রিপ্টে সাধারণত টেক্সট ম্যানিপুলেশনের জন্য ব্যবহৃত হয়, যেমন ভুল বানান ঠিক করা,
// স্পেসিফিক শব্দ পরিবর্তন করা, বা টেক্সট ফরম্যাটিং।

// ----------------------------------------------------------------------------

// replace() মেথড
// replace(searchValue, newValue) মেথড ব্যবহার করে স্ট্রিংয়ের নির্দিষ্ট অংশ পরিবর্তন করা হয়। এটি প্রথমে যেই অংশ
// মেলে সেটি শুধু পরিবর্তন করে। অর্থাৎ, এটি শুধুমাত্র প্রথম ম্যাচ হওয়া অংশকে রিপ্লেস করে।

// ----------------------------------------------------------------------------

// প্যারামিটার:
// - searchValue: যেটা খুঁজে বের করতে হবে।
// - newValue: যেটা দিয়ে প্রতিস্থাপন করা হবে।

// ----------------------------------------------------------------------------

// ১. সিম্পল রিপ্লেসমেন্ট
const text = "I like JavaScript.";
const result = text.replace("JavaScript", "Python");
console.log(result); // Output: "I like Python."

// ----------------------------------------------------------------------------

// ২. কেস-সেন্সিটিভ রিপ্লেসমেন্ট
// replace() মেথড কেস-সেন্সিটিভ। অর্থাৎ, বড় হাতের অক্ষর এবং ছোট হাতের অক্ষরের মধ্যে পার্থক্য করে।
const text1 = "I like JAVASCRIPT.";
const result1 = text1.replace("JavaScript", "Python");
console.log(result1); // Output: "I like JAVASCRIPT."

// ----------------------------------------------------------------------------

// ৩. নিয়মিত অভিব্যক্তি (Regular Expression) ব্যবহার
// replace() মেথডে রেগুলার এক্সপ্রেশন ব্যবহার করলে স্ট্রিংয়ের একাধিক ম্যাচিং অংশ পরিবর্তন করা যায়।

// সব ম্যাচ রিপ্লেস করা (গ্লোবাল):
const text2 = "I like JavaScript and JavaScript is fun.";
const result2 = text2.replace(/JavaScript/g, "Python");
console.log(result2); // Output: "I like Python and Python is fun."

// কেস ইনসেন্সিটিভ (কেস অগ্রাহ্য করা):
const text3 = "I like JAVASCRIPT and JavaScript is fun.";
const result3 = text3.replace(/JavaScript/gi, "Python");
console.log(result3); // Output: "I like Python and Python is fun."

// ----------------------------------------------------------------------------

// ৪. ফাংশন ব্যবহার করে রিপ্লেস
// replace() মেথডে কাস্টম ফাংশন দেওয়া যায়, যেখানে প্রতি ম্যাচে ফাংশন কল হবে এবং ডায়নামিকভাবে নতুন মান তৈরি হবে।

// উদাহরণ:
const text4 = "I like JavaScript and JavaScript is fun.";
const result4 = text4.replace(/JavaScript/g, (match, offset) => {
  return `Python (found at index ${offset})`;
});
console.log(result4);
// Output: "I like Python (found at index 7) and Python (found at index 22) is fun."

// ----------------------------------------------------------------------------

// ৫. রিপ্লেসমেন্টের সীমাবদ্ধতা
// - শুধুমাত্র প্রথম ম্যাচ:
// replace() শুধুমাত্র প্রথম ম্যাচকেই রিপ্লেস করে যদি রেগুলার এক্সপ্রেশন ব্যবহার না করা হয়।
const text5 = "JavaScript is JavaScript.";
const result5 = text5.replace("JavaScript", "Python");
console.log(result5); // Output: "Python is JavaScript."

// - ইম্যুটেবল স্ট্রিং:
// মূল স্ট্রিং অপরিবর্তিত থাকে; পরিবর্তনটি শুধুমাত্র নতুন স্ট্রিংয়ে সংরক্ষিত হয়।

// replaceAll() মেথড
// ES2021-এ নতুন একটি ফিচার হিসেবে replaceAll() এসেছে। এটি স্ট্রিংয়ের সমস্ত ম্যাচিং অংশ পরিবর্তন করতে ব্যবহৃত হয়।

// উদাহরণ:
const text6 = "JavaScript is fun. JavaScript is powerful.";
const result6 = text6.replaceAll("JavaScript", "Python");
console.log(result6); // Output: "Python is fun. Python is powerful."

// ----------------------------------------------------------------------------

// স্ট্রিং রিপ্লেসমেন্টের ব্যবহার:
// 1. ভুল বানান ঠিক করা:
const sentence = "Thsi is a tst.";
const fixed = sentence.replace("Thsi", "This").replace("tst", "test");
console.log(fixed); // Output: "This is a test."

// 2. কোনো ডেটা ফরম্যাট করা:
const date = "2024-11-15";
const formattedDate = date.replace(/-/g, "/");
console.log(formattedDate); // Output: "2024/11/15"

// 3. অপ্রয়োজনীয় অংশ সরানো:
const message = "Hello!! How are you??";
const cleaned = message.replace(/!|\?/g, "");
console.log(cleaned); // Output: "Hello How are you"
