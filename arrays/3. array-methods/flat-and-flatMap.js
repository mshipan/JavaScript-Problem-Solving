// flat() মেথডের ব্যাখ্যা
// flat() মেথডটি জাভাস্ক্রিপ্ট অ্যারে থেকে নেস্টেড বা গভীর অ্যারেগুলোকে নির্দিষ্ট স্তর পর্যন্ত ফ্ল্যাট (সমতল) করতে ব্যবহৃত হয়। 
// এটি একটি নতুন অ্যারে তৈরি করে যাতে নেস্টেড উপাদানগুলোকে নির্দিষ্ট গভীরতা পর্যন্ত সমতল করা হয়।

// --------------------------------------------------------------------------

// flat() মেথডের বৈশিষ্ট্য:
// - নেস্টেড অ্যারেগুলোকে ফ্ল্যাট করা: এটি অ্যারের মধ্যে নেস্টেড অ্যারেগুলোকে ফ্ল্যাট করে একটি একক স্তরে আনে।
// - ডিফল্ট স্তর: যদি কোন স্তর নির্ধারণ না করা হয়, তবে ডিফল্টভাবে 1 স্তর পর্যন্ত ফ্ল্যাট করে।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
array.flat(depth)

// - depth: কত স্তর পর্যন্ত ফ্ল্যাট করতে হবে তা নির্ধারণ করা হয় (ডিফল্ট: 1)।

// --------------------------------------------------------------------------

// উদাহরণ:
let numbers = [1, [2, [3, [4]]]];
console.log(numbers.flat(2)); // আউটপুট: [1, 2, 3, [4]]

// এখানে, flat(2) মেথডটি অ্যারেটির প্রথম দুটি স্তর ফ্ল্যাট করেছে, তাই [3, [4]] আকারে বাকি থাকে।

// --------------------------------------------------------------------------

// flat() মেথডের সুবিধা:
// 1. এমবেডেড বা নেস্টেড ডেটাকে সহজে একত্রে আনা: গভীর নেস্টেড অ্যারে থেকে উপাদানগুলো একত্রে এনে ডেটা পরিচালনা সহজ করে।
// 2. কোডের সরলতা: কম কোড দিয়ে জটিল অ্যারেগুলোর ডেটা ফ্ল্যাট করা যায়।

// --------------------------------------------------------------------------

// flatMap() মেথডের ব্যাখ্যা
// flatMap() মেথডটি map() এবং flat() মেথডের সমন্বয়ে কাজ করে। এটি প্রথমে প্রতিটি উপাদানে একটি map() ফাংশন 
// প্রয়োগ করে এবং তারপর ফ্ল্যাট করে একটি নতুন অ্যারে তৈরি করে।

// --------------------------------------------------------------------------

// flatMap() মেথডের বৈশিষ্ট্য:
// - ম্যাপ ও ফ্ল্যাট একসাথে করা: এটি প্রতিটি উপাদানে একটি ফাংশন প্রয়োগ করে এবং তারপর একটি স্তর পর্যন্ত ফ্ল্যাট করে।
// - ডিফল্ট গভীরতা: flatMap() কেবল একটি স্তর পর্যন্ত ফ্ল্যাট করতে পারে।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
array.flatMap(callback)

// - callback: প্রতিটি উপাদানে প্রয়োগ করার জন্য ফাংশন।

// --------------------------------------------------------------------------

// উদাহরণ:
let numbers2 = [1, 2, 3];
let result = numbers2.flatMap(x => [x, x * 2]);

console.log(result); // আউটপুট: [1, 2, 2, 4, 3, 6]

// এখানে, flatMap(x => [x, x * 2]) প্রতিটি উপাদানকে একটি নতুন অ্যারেতে এনে ফ্ল্যাট করে দেয়, ফলে একটি স্তরে উপাদানগুলো দেখা যায়।

// --------------------------------------------------------------------------

// flatMap() মেথডের সুবিধা:
// 1. একক লাইনে ম্যাপিং ও ফ্ল্যাটিং: ম্যাপ করা ও এক স্তর ফ্ল্যাট করার কাজকে এক লাইনে সহজে করতে দেয়।
// 2. জটিল অ্যারে ম্যানিপুলেশন সহজ করে: বিশেষত যখন প্রতিটি উপাদানকে প্রসেসিং করে একটি স্তর ফ্ল্যাট করতে হয়, তখন এটি কার্যকরী হয়।

// --------------------------------------------------------------------------

// flat() এবং flatMap() এর মধ্যে পার্থক্য:
// - flat(): শুধুমাত্র ফ্ল্যাট করে, ম্যাপিং করে না।
// - flatMap(): ম্যাপ ও ফ্ল্যাট উভয়ই করে, তবে কেবল একটি স্তর পর্যন্ত ফ্ল্যাট করতে পারে।
