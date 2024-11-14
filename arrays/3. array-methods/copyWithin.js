// copyWithin() মেথডের ব্যাখ্যা
// copyWithin() জাভাস্ক্রিপ্ট অ্যারের একটি মেথড যা একটি অ্যারের মধ্যে থেকে উপাদানগুলোকে অন্য ইনডেক্সে কপি করতে ব্যবহৃত হয়। 
// এটি মূল অ্যারেটির উপরেই কাজ করে এবং কোনো নতুন অ্যারে তৈরি না করেই কপিকৃত উপাদানগুলো স্থানান্তর করে।

// --------------------------------------------------------------------------

// copyWithin() মেথডের বৈশিষ্ট্য:
// - মূল অ্যারেটির ইনডেক্সগুলোর মধ্যে নির্দিষ্ট পরিসরে উপাদানগুলোকে কপি করতে দেয়।
// - এটি মূল অ্যারেটি পরিবর্তন করে।
// - নতুন কোনো উপাদান যোগ করে না; শুধুমাত্র বর্তমান উপাদানগুলোকে স্থানান্তর করে।

// --------------------------------------------------------------------------

// সিনট্যাক্স:
array.copyWithin(target, start, end)

// - target: যে ইনডেক্স থেকে কপি শুরু করা হবে এবং নতুন অবস্থানে বসানো হবে।
// - start: যে ইনডেক্স থেকে কপি শুরু করতে হবে (ডিফল্ট: 0)।
// - end: যে ইনডেক্স পর্যন্ত কপি চলবে, তবে এই ইনডেক্সটি অন্তর্ভুক্ত নয় (ডিফল্ট: অ্যারের দৈর্ঘ্য)।

// --------------------------------------------------------------------------

// উদাহরণ: মূল অ্যারে পরিবর্তন করা
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);

console.log(numbers); // আউটপুট: [4, 5, 3, 4, 5]

// এখানে, copyWithin(0, 3) মেথডটি 3 ইনডেক্স থেকে শুরু করে উপাদানগুলোকে 0 ইনডেক্স থেকে বসানো হয়েছে। 
// অর্থাৎ, 4 এবং 5 মূল অ্যারেটির প্রথম অংশে চলে এসেছে।

// --------------------------------------------------------------------------

// নির্দিষ্ট পরিসরে কপি করা
let numbers2 = [10, 20, 30, 40, 50];
numbers2.copyWithin(1, 3, 5);

console.log(numbers2); // আউটপুট: [10, 40, 50, 40, 50]

// এখানে, copyWithin(1, 3, 5) মেথডটি 3 থেকে 5 (যা 40 এবং 50) পর্যন্ত উপাদানগুলোকে 1 ইনডেক্স থেকে বসিয়েছে।

// --------------------------------------------------------------------------

// copyWithin() মেথডের সুবিধা:
// 1. অ্যারের মধ্যে উপাদানগুলো দ্রুত স্থানান্তর করা: অ্যারের ভিতরে থেকেই উপাদানগুলোকে স্থানান্তর করা সহজ করে।
// 2. কোনো অতিরিক্ত স্পেস প্রয়োজন হয় না: এটি অ্যারের মধ্যে স্থানান্তর করলেও অতিরিক্ত মেমোরি প্রয়োজন হয় না।

// --------------------------------------------------------------------------

// সতর্কতা:
// - যেহেতু এটি মূল অ্যারেটির উপরেই পরিবর্তন আনে, তাই সতর্কতার সাথে ব্যবহার করা উচিত।
// - এটি অ্যারের নতুন সংস্করণ তৈরি না করে মূল অ্যারেটিতে সরাসরি পরিবর্তন করে, যা কখনো কখনো অনাকাঙ্ক্ষিত ফলাফল আনতে পারে।

let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(2, 0, 2);

console.log(arr); // আউটপুট: [1, 2, 1, 2, 5, 6]

// এখানে copyWithin(2, 0, 2) 0 এবং 2 এর মধ্যে উপাদানগুলোকে 2 ইনডেক্স থেকে বসিয়েছে।
