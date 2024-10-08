// অ্যারে (Array) হচ্ছে একটি ডেটা স্ট্রাকচার যা একাধিক ভ্যালু বা উপাদান (elements) ধরে রাখতে পারে,
// এবং এগুলোকে একটি সিঙ্গেল ভ্যারিয়েবলের মধ্যে স্টোর করা হয়। প্রতিটি উপাদানের একটি নির্দিষ্ট পজিশন
// বা ইনডেক্স থাকে। অ্যারের সাহায্যে একই টাইপের একাধিক উপাদান একসাথে সংরক্ষণ করা যায়।

// ---------------------------------------------------------------------------

// অ্যারে-এর বৈশিষ্ট্য:
// 1. ইনডেক্সড: অ্যারে ইনডেক্স ব্যবহার করে উপাদানগুলোতে অ্যাক্সেস করা যায়। ইনডেক্স সাধারণত ০ থেকে
//    শুরু হয়।
//    উদাহরণ: প্রথম উপাদানের ইনডেক্স 0, দ্বিতীয়টির 1, তৃতীয়টির 2, এভাবে চলতে থাকে।

// 2. হোমোজিনিয়াস অথবা হেটারোজিনিয়াস: সাধারণত, অ্যারেতে একই টাইপের ডেটা (যেমন সব ইন্টিজার বা
//    সব স্ট্রিং) রাখা হয়। কিন্তু জাভাস্ক্রিপ্টের মতো কিছু ল্যাংগুয়েজে বিভিন্ন ধরনের ডেটাও একই অ্যারেতে
//    রাখা যায় (যেমন ইন্টিজার, স্ট্রিং, বুলিয়ান ইত্যাদি একসাথে)।

// 3. স্থির বা গতিশীল আকার: কিছু প্রোগ্রামিং ভাষায় অ্যারের আকার স্থির থাকে (fixed size), যেমন
//    C, Java ইত্যাদি। তবে, জাভাস্ক্রিপ্টে অ্যারে গতিশীল (dynamic), অর্থাৎ প্রয়োজন অনুযায়ী
//    অ্যারের আকার বাড়ানো বা ছোট করা যায়।

// ---------------------------------------------------------------------------

// অ্যারে ডিক্লারেশন:
// জাভাস্ক্রিপ্টে অ্যারে ডিক্লার করার কিছু সাধারণ উপায় হলো:

//    খালি অ্যারে তৈরি করা
//    let arr = [];

//    কিছু উপাদান সহ অ্যারে তৈরি করা
//    let arr = [10, 20, 30, 40];

//    বিভিন্ন ধরনের ডেটা সহ অ্যারে
//    let mixedArr = [1, "Hello", true, null];

// ---------------------------------------------------------------------------

// অ্যারেতে অ্যাক্সেস করা:
// একটি অ্যারেতে থাকা উপাদানে অ্যাক্সেস করতে তার ইনডেক্স ব্যবহার করা হয়:

//    let arr = [10, 20, 30, 40];

//    প্রথম উপাদানে অ্যাক্সেস
//    console.log(arr[0]);  // আউটপুট: 10

//    তৃতীয় উপাদানে অ্যাক্সেস
//    console.log(arr[2]);  // আউটপুট: 30

// ---------------------------------------------------------------------------

// অ্যারের বৈশিষ্ট্য:
// 1. স্টোরেজ: অ্যারে একটি লিনিয়ার ডেটা স্ট্রাকচার, যেখানে উপাদানগুলো ধারাবাহিকভাবে (contiguously)
//    মেমোরিতে সংরক্ষিত থাকে।

// 2. সিম্পল অপারেশনস: অ্যারে-তে উপাদান যোগ, বাদ, এবং অনুসন্ধান (searching) করা অনেক সহজ
//    এবং কার্যকর।

// 3. ইনডেক্স ভিত্তিক অ্যাক্সেস: অ্যারের যেকোনো উপাদানে ইনডেক্সের মাধ্যমে সরাসরি অ্যাক্সেস করা যায়।

// ---------------------------------------------------------------------------

// অ্যারের অ্যাডভান্টেজ:
// 1. ফাস্ট অ্যাক্সেস: যেকোনো উপাদানে ইনডেক্সের মাধ্যমে দ্রুত অ্যাক্সেস করা যায়, কারণ ইনডেক্স ভিত্তিক
//    অপারেশনগুলো O(1) সময় নেয়।

// 2. ইফিশিয়েন্ট স্টোরেজ: অ্যারে সংরক্ষণের জন্য লিনিয়ার স্ট্রাকচার হওয়ায় মেমোরি ব্যবহারে কার্যকর।

// ---------------------------------------------------------------------------

// অ্যারের ডিসঅ্যাডভান্টেজ:
// 1. ফিক্সড সাইজ (কিছু ভাষায়): অনেক প্রোগ্রামিং ভাষায়, অ্যারের আকার আগে থেকেই নির্ধারণ করতে হয়,
//    যা পরবর্তী সময়ে পরিবর্তন করা যায় না।

// 2. ইনসার্ট/ডিলিট সমস্যা: যদি একটি অ্যারের মাঝখানে নতুন উপাদান যোগ বা মুছে ফেলতে হয়, তাহলে সব
//    উপাদানকে পুনরায় সাজাতে হয়, যা সময়সাপেক্ষ (O(n))।

// ---------------------------------------------------------------------------

// সংক্ষেপে:
// অ্যারে হচ্ছে একটি গুরুত্বপূর্ণ ডেটা স্ট্রাকচার যেখানে একাধিক উপাদান একসাথে সংরক্ষণ করা যায়।
// অ্যারের ইনডেক্স ব্যবহার করে দ্রুত উপাদানে অ্যাক্সেস করা সম্ভব, তবে ইনসার্ট এবং ডিলিট
// অপারেশনগুলো সময়সাপেক্ষ হতে পারে।
