// স্ট্রিং থেকে নির্দিষ্ট একটি অংশ বা সাবস্ট্রিং খুঁজে বের করার জন্য জাভাস্ক্রিপ্টে বেশ কয়েকটি মেথড রয়েছে।
// প্রতিটি মেথডের নিজস্ব ব্যবহার এবং বৈশিষ্ট্য রয়েছে। নিচে বিভিন্ন মেথড নিয়ে বিস্তারিত আলোচনা করা হলো।

// ----------------------------------------------------------------------------

// ১. `indexOf()` মেথড
// এই মেথড ব্যবহার করে নির্দিষ্ট সাবস্ট্রিং কোথায় পাওয়া যায়, তার প্রথম ইনডেক্স রিটার্ন করে।

// সিনট্যাক্স:
string.indexOf(substring, startIndex);

// - substring: যে সাবস্ট্রিংটি খুঁজবেন।
// - startIndex: (ঐচ্ছিক) কোন ইন্ডেক্স থেকে খুঁজবেন।

// উদাহরণ:
const sentence = "JavaScript is amazing!";
console.log(sentence.indexOf("Script"));
// Output: 4

console.log(sentence.indexOf("is"));
// Output: 11

console.log(sentence.indexOf("Java", 5));
// Output: -1 (পাঁচ নম্বর ইন্ডেক্সের পর "Java" নেই)

// বৈশিষ্ট্য:
// - সাবস্ট্রিং পাওয়া গেলে এর প্রথম ইনডেক্স রিটার্ন করে।
// - না পেলে -1 রিটার্ন করে।

// ----------------------------------------------------------------------------

// ২. lastIndexOf() মেথড
// এই মেথড স্ট্রিংয়ের শেষে থেকে খুঁজে নির্দিষ্ট সাবস্ট্রিংয়ের প্রথম উপস্থিতির ইনডেক্স রিটার্ন করে।

// সিনট্যাক্স:
string.lastIndexOf(substring, startIndex);

// - substring: যে সাবস্ট্রিংটি খুঁজবেন।
// - startIndex: (ঐচ্ছিক) কোন ইন্ডেক্স থেকে উল্টোদিকে খুঁজবেন।

// উদাহরণ:
const text = "This is a test. This is only a test.";
console.log(text.lastIndexOf("test"));
// Output: 30

console.log(text.lastIndexOf("This"));
// Output: 15

// ----------------------------------------------------------------------------

// ৩. includes() মেথড
// এই মেথড true বা false রিটার্ন করে। যদি সাবস্ট্রিং পাওয়া যায়, তবে true, না হলে false।

// সিনট্যাক্স:
// string.includes(substring, startIndex);

// উদাহরণ:
const message = "Welcome to the JavaScript world!";
console.log(message.includes("JavaScript"));
// Output: true

console.log(message.includes("Python"));
// Output: false

// ----------------------------------------------------------------------------

// ৪. startsWith() মেথড
// এই মেথড চেক করে স্ট্রিং কোনো নির্দিষ্ট সাবস্ট্রিং দিয়ে শুরু হয়েছে কি না।

// সিনট্যাক্স:
string.startsWith(substring, startIndex);

// উদাহরণ:
const sentence1 = "Hello, world!";
console.log(sentence1.startsWith("Hello"));
// Output: true

console.log(sentence.startsWith("world", 7));
// Output: true

// ----------------------------------------------------------------------------

// ৫. endsWith() মেথড
// এই মেথড চেক করে স্ট্রিং কোনো নির্দিষ্ট সাবস্ট্রিং দিয়ে শেষ হয়েছে কি না।

// সিনট্যাক্স:
string.endsWith(substring, length);

// উদাহরণ:
const fileName = "image.png";
console.log(fileName.endsWith(".png"));
// Output: true

console.log(fileName.endsWith(".jpg"));
// Output: false

// ----------------------------------------------------------------------------

// ৬. search() মেথড
// এই মেথড রেগুলার এক্সপ্রেশন ব্যবহার করে নির্দিষ্ট অংশ খুঁজে বের করে এবং প্রথম উপস্থিতির ইনডেক্স রিটার্ন করে।

// সিনট্যাক্স:
string.search(regExp);

// উদাহরণ:
const text1 = "JavaScript is fun!";
console.log(text1.search(/is/));
// Output: 11

console.log(text.search(/python/));
// Output: -1

// ----------------------------------------------------------------------------

// ৭. ব্যবহারিক উদাহরণ

// ই-মেইল ভ্যালিডেশন:
const email = "shipan.mallik@gmail.com";
if (email.includes("@")) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
// Output: Valid email

// ফাইল টাইপ চেক:
const file = "document.pdf";
if (file.endsWith(".pdf")) {
  console.log("This is a PDF file.");
} else {
  console.log("This is not a PDF file.");
}
// Output: This is a PDF file.

// ----------------------------------------------------------------------------

// ৮. চ্যালেঞ্জ
// নিচের স্ট্রিং থেকে "JavaScript" সাবস্ট্রিংটি কোথায় আছে তা বের করুন:

const text2 = "Learning JavaScript is fun!";
console.log(text2.indexOf("JavaScript"));
// Output: 9
