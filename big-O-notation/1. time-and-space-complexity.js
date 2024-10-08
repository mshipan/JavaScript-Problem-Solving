// Time Complexity এবং Space Complexity কীভাবে কাজ করে
// যখন কোনো অ্যালগরিদমের কার্যকারিতা বিশ্লেষণ করা হয়, তখন দুটি মূল বিষয় বিবেচনা করা হয়:

// 1. Time Complexity (সময়ের জটিলতা): এটি মাপা হয় যে ইনপুট সাইজ বৃদ্ধির সাথে সাথে
//    অ্যালগরিদম কত দ্রুত কাজ করে বা কত সময় নেয়।
// 2. Space Complexity (মেমরির জটিলতা): এটি মাপা হয় যে অ্যালগরিদম কতটুকু মেমরি বা
//    স্টোরেজ ব্যবহার করে ইনপুট সাইজ বৃদ্ধির সাথে।

// ------------ **** Time Complexity (সময়ের জটিলতা) **** --------------------
// Time Complexity দিয়ে বুঝানো হয়, একটি অ্যালগরিদমের ইনপুট সাইজ বৃদ্ধির সাথে সাথে সময়
// কীভাবে বৃদ্ধি পায়।

// Time Complexity কীভাবে মাপা হয়? -----------------------------------------------
// - Time Complexity Big-O Notation দিয়ে প্রকাশ করা হয়। এটি ইনপুটের সবচেয়ে খারাপ ক্ষেত্রে
//   অ্যালগরিদম কতটা সময় নেবে তা নির্দেশ করে।
// - উদাহরণ: যদি কোনো অ্যালগরিদমের Time Complexity হয় O(n), তাহলে ইনপুট সাইজের সাথে
//   সময় লিনিয়ার (সরাসরি) অনুপাতে বাড়বে।

// এটি কেন গুরুত্বপূর্ণ? -------------------------------------------------------------
// যদি আপনি ১,০০০টি আইটেম এবং ১,০০,০০০টি আইটেম প্রসেস করেন, তাহলে Time Complexity
// থেকে আপনি জানতে পারবেন যে ইনপুট সাইজ বৃদ্ধির সাথে সময় কীভাবে প্রভাবিত হবে।

// উদাহরণ:
// - যদি অ্যালগরিদমের Time Complexity হয় O(n) তাহলে ইনপুট সাইজ দ্বিগুণ হলে সময়ও প্রায় দ্বিগুণ
//   হবে।
// - যদি Time Complexity হয় O(n^2), তাহলে ইনপুট সাইজ দ্বিগুণ হলে সময় চারগুণ বেড়ে যাবে।

// ------------ **** Space Complexity (মেমরির জটিলতা) **** --------------------
// Space Complexity দিয়ে বোঝানো হয়, ইনপুট সাইজের সাথে অতিরিক্ত মেমরি কতটা দরকার হয়।

// Space Complexity কীভাবে মাপা হয়? --------------------------------------------
// - Space Complexity-ও Big-O Notation দিয়ে প্রকাশ করা হয়।
// - এটি অ্যালগরিদমের কার্যকারিতার সময় ব্যবহৃত অতিরিক্ত মেমরির হিসাব করে।

// এটি কেন গুরুত্বপূর্ণ? ----------------------------------------------------------
// যদি আপনি বড় ইনপুট নিয়ে কাজ করেন, শুধু দ্রুত কাজ করাই নয়, কম মেমরি ব্যবহার করাও গুরুত্বপূর্ণ।
// অনেক সময় অতিরিক্ত মেমরি ব্যবহার করলে সিস্টেম ধীর হয়ে যায় বা ক্র্যাশ করতে পারে।

// উদাহরণ:
// - O(1) Space Complexity বোঝায় যে ইনপুট সাইজ যাই হোক না কেন, মেমরি ব্যবহারের পরিমাণ
//   নির্দিষ্ট থাকবে।
// - O(n) Space Complexity বোঝায় যে ইনপুট সাইজের সাথে মেমরি লিনিয়ার অনুপাতে বাড়বে।

// -----------------------------------------------------------------------------

// Time Complexity এবং Space Complexity এর তুলনা --------------
// - Time Complexity মাপে অ্যালগরিদম কত দ্রুত কাজ করে।
// - Space Complexity মাপে অ্যালগরিদম কত মেমরি ব্যবহার করে।

// সাধারণত, আমরা এমন অ্যালগরিদম চাই যা সময় ও মেমরি উভয় দিক থেকেই কার্যকরী, তবে অনেক সময়
// সময় ও মেমরির মধ্যে একটা সমঝোতা করতে হয়। কিছু ক্ষেত্রে একটি দ্রুত অ্যালগরিদম বেশি মেমরি ব্যবহার
// করতে পারে বা কম মেমরি ব্যবহার করে বেশি সময় লাগতে পারে।
