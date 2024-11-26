// স্ট্রিং বিভাজন বলতে একটি বড় স্ট্রিংকে নির্দিষ্ট কোনো ডেলিমিটার বা বিভাজকের মাধ্যমে ছোট ছোট অংশে ভেঙে
// একটি অ্যারেতে রূপান্তর করার প্রক্রিয়াকে বোঝায়। এটি সাধারণত split() মেথডের মাধ্যমে করা হয়।

// ----------------------------------------------------------------------------

// ১. split() মেথড
// split() মেথড একটি স্ট্রিং নেয় এবং একটি নির্দিষ্ট ডেলিমিটার বা বিভাজক ব্যবহার করে সেই স্ট্রিংকে একটি অ্যারেতে ভেঙে ফেলে।

// সিনট্যাক্স:
string.split(separator, limit);
// - separator: কোন চিহ্ন বা স্ট্রিং দিয়ে স্ট্রিং বিভাজন করা হবে।
// - limit: বিভাজন করার পর কতটি আইটেম অ্যারেতে রাখা হবে তা নির্ধারণ করে।

// ----------------------------------------------------------------------------

// ২. উদাহরণসমূহ

// ক) সাদামাটা বিভাজন:
const sentence = "I love JavaScript";
const words = sentence.split(" "); // স্পেসকে ডেলিমিটার হিসেবে ব্যবহার
console.log(words);
// Output: ["I", "love", "JavaScript"]

// খ) কমা (,) দিয়ে বিভাজন:
const csv = "apple,banana,cherry,dates";
const fruits = csv.split(",");
console.log(fruits);
// Output: ["apple", "banana", "cherry", "dates"]

// গ) কোন ডেলিমিটার ছাড়া (প্রতিটি অক্ষরে বিভাজন):
const name = "Shipan";
const chars = name.split("");
console.log(chars);
// Output: ["S", "h", "i", "p", "a", "n"]

// ঘ) বিভাজন সীমিত করা:
const sentence1 = "I love JavaScript and coding";
const limitedWords = sentence1.split(" ", 3); // সর্বোচ্চ ৩টি অংশ
console.log(limitedWords);
// Output: ["I", "love", "JavaScript"]

// ----------------------------------------------------------------------------

// ৩. সাধারণ ব্যবহার

// 1. ডেটা প্রক্রিয়াকরণ:
// ডেটার ইনপুট যদি কোনো নির্দিষ্ট ফরম্যাটে থাকে, তবে তা প্রক্রিয়া করার জন্য বিভাজন করা হয়।
const csvData = "name,age,location";
const columns = csvData.split(",");
console.log(columns);
// Output: ["name", "age", "location"]

// 2. স্ট্রিংয়ের অক্ষর গণনা:
const word = "JavaScript";
console.log(word.split("").length);
// Output: 10 (অক্ষরের সংখ্যা)

// 3. একাধিক ডেলিমিটার ব্যবহার:
// রেগুলার এক্সপ্রেশন (RegEx) দিয়ে একাধিক বিভাজক ব্যবহার করা যায়।
const text = "I-love|JavaScript";
const result = text.split(/[-|]/); // ড্যাশ (-) এবং পাইপ (|) ব্যবহার
console.log(result);
// Output: ["I", "love", "JavaScript"]

// ----------------------------------------------------------------------------

// ৪. বাস্তব উদাহরণ

// ইউজার ইনপুট থেকে নাম বিভাজন:
const fullName = "Shipan Mallik";
const parts = fullName.split(" ");
const firstName = parts[0];
const lastName = parts[1];
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
// Output: First Name: Shipan, Last Name: Mallik

// ই-মেইল ভ্যালিডেশন:
const email = "shipan.mallik@gmail.com";
const parts1 = email.split("@");
if (parts1.length === 2) {
  console.log(`Username: ${parts1[0]}, Domain: ${parts1[1]}`);
}
// Output: Username: shipan.mallik, Domain: gmail.com

// ----------------------------------------------------------------------------

// ৫. সীমাবদ্ধতা

// 1. খালি ডেলিমিটার দিলে পুরো স্ট্রিং অক্ষরগুলোতে ভেঙে যায়:
console.log("Hello".split(""));
// Output: ["H", "e", "l", "l", "o"]

// 2. যদি ডেলিমিটার না থাকে: পুরো স্ট্রিং একটি মাত্র আইটেম হিসেবে রিটার্ন হয়।
console.log("Hello".split(","));
// Output: ["Hello"]

// ----------------------------------------------------------------------------

// ৬. চ্যালেঞ্জ

// নিচের স্ট্রিং থেকে প্রথম তিনটি শব্দ বের করার জন্য একটি ফাংশন লিখুন:
const sentence2 = "JavaScript is a versatile language!";
function getFirstWords(str, n) {
  return str.split(" ", n);
}
console.log(getFirstWords(sentence2, 3));
// Output: ["JavaScript", "is", "a"]
