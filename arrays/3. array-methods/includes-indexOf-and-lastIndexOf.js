// includes(), indexOf(), এবং lastIndexOf() হলো জাভাস্ক্রিপ্টের অ্যারে মেথড যা অ্যারের মধ্যে
// নির্দিষ্ট উপাদান আছে কিনা বা তার অবস্থান খুঁজে বের করতে ব্যবহৃত হয়। প্রতিটি মেথডের আলাদা
// ব্যবহার আছে, এবং এগুলো অ্যারের উপাদান খুঁজতে অনেক সহায়ক।

// --------------------------------------------------------------------------

// ১. includes() মেথড
// includes() মেথডটি একটি অ্যারের মধ্যে নির্দিষ্ট উপাদান আছে কিনা তা চেক করে এবং একটি বুলিয়ান
// (true/false) মান রিটার্ন করে। এটি শুধুমাত্র উপাদানটি অ্যারেতে আছে কিনা তা যাচাই করে,
// তার অবস্থান জানায় না।

// সিনট্যাক্স:
array.includes(element, startIndex);

// - element: যে উপাদানটি আপনি খুঁজছেন।
// - startIndex: কোথা থেকে খুঁজবেন তা নির্ধারণ করার জন্য (ঐচ্ছিক, ডিফল্ট হলো ০)।

// --------------------------------------------------------------------------

// উদাহরণ:
let fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.includes("banana")); // আউটপুট: true
console.log(fruits.includes("grape")); // আউটপুট: false

// এখানে, includes() চেক করে দেখছে যে "banana" আছে কিনা, যা true রিটার্ন করেছে, আর
// "grape" নেই বলে false রিটার্ন করেছে।

// --------------------------------------------------------------------------

// ২. indexOf() মেথড
// indexOf() মেথডটি অ্যারের মধ্যে নির্দিষ্ট উপাদানের প্রথম উপস্থিতির ইনডেক্স রিটার্ন করে। যদি উপাদানটি
// না পাওয়া যায়, তাহলে এটি -1 রিটার্ন করে। এটি বাম দিক থেকে অর্থাৎ প্রথম থেকে শুরু করে খুঁজে।

// সিনট্যাক্স:
array.indexOf(element, startIndex);

// - element: যে উপাদানটি খুঁজবেন।
// - startIndex: খোঁজার শুরু বিন্দু (ঐচ্ছিক, ডিফল্ট হলো ০)।

// --------------------------------------------------------------------------

// উদাহরণ:
let fruits2 = ["apple", "banana", "mango", "banana", "orange"];

console.log(fruits2.indexOf("banana")); // আউটপুট: 1
console.log(fruits2.indexOf("grape")); // আউটপুট: -1

// এখানে, "banana" এর প্রথম উপস্থিতি ইনডেক্স ১-এ পাওয়া গেছে। কিন্তু "grape" না পাওয়ায় -1
// রিটার্ন হয়েছে।

// --------------------------------------------------------------------------

// ৩. lastIndexOf() মেথড
// lastIndexOf() মেথডটি অ্যারের মধ্যে নির্দিষ্ট উপাদানের শেষ উপস্থিতির ইনডেক্স রিটার্ন করে। যদি
// উপাদানটি না পাওয়া যায়, এটি -1 রিটার্ন করে। এটি ডান দিক থেকে অর্থাৎ শেষ থেকে শুরু করে খুঁজে।

// সিনট্যাক্স:
array.lastIndexOf(element, startIndex);

// - element: যে উপাদানটি খুঁজবেন।
// - startIndex: খোঁজার শেষ বিন্দু (ঐচ্ছিক, ডিফল্ট হলো অ্যারের শেষ)।

// --------------------------------------------------------------------------

// উদাহরণ:
let fruits3 = ["apple", "banana", "mango", "banana", "orange"];

console.log(fruits3.lastIndexOf("banana")); // আউটপুট: 3
console.log(fruits3.lastIndexOf("grape")); // আউটপুট: -1

// এখানে, "banana" এর শেষ উপস্থিতি ইনডেক্স ৩-এ পাওয়া গেছে। কিন্তু "grape" খুঁজে না পাওয়ায়
// -1 রিটার্ন হয়েছে।

// --------------------------------------------------------------------------

// মূল পার্থক্য:
// 1. includes(): অ্যারের মধ্যে একটি উপাদান আছে কিনা তা যাচাই করে, true বা false রিটার্ন করে।
// 2. indexOf(): অ্যারের মধ্যে নির্দিষ্ট উপাদানের প্রথম উপস্থিতির ইনডেক্স রিটার্ন করে।
// 3. lastIndexOf(): অ্যারের মধ্যে নির্দিষ্ট উপাদানের শেষ উপস্থিতির ইনডেক্স রিটার্ন করে।

// --------------------------------------------------------------------------

// আরো উদাহরণ:
let colors = ["red", "blue", "green", "blue", "yellow"];

// `includes()` দিয়ে নির্দিষ্ট রং আছে কিনা চেক করা
console.log(colors.includes("blue")); // আউটপুট: true
console.log(colors.includes("pink")); // আউটপুট: false

// `indexOf()` দিয়ে প্রথম `blue` এর ইনডেক্স খুঁজে বের করা
console.log(colors.indexOf("blue")); // আউটপুট: 1

// `lastIndexOf()` দিয়ে শেষ `blue` এর ইনডেক্স খুঁজে বের করা
console.log(colors.lastIndexOf("blue")); // আউটপুট: 3