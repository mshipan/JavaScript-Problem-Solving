// -------------------------------------------------
// Big-O Notation কী?
// Ans: Big-O Notation হলো একটি পদ্ধতি যার মাধ্যমে আমরা অ্যালগরিদমের সময় এবং মেমরি ব্যবহারের
// দক্ষতা বা জটিলতা প্রকাশ করতে পারি। এটি ইনপুট সাইজের (n) ভিত্তিতে অ্যালগরিদমের কর্মক্ষমতা নির্ধারণ
// করে। Big-O Notation আমাদের বলে যে একটি অ্যালগরিদম ইনপুট সাইজ বৃদ্ধির সাথে কত দ্রুত (বা ধীরে)
// কাজ করবে। এটি সময় বা মেমরি বৃদ্ধির হারকে প্রকাশ করে।
// -------------------------------------------------

// 1. O(1): Constant Time
//    O(1) বোঝায়, অ্যালগরিদমের কাজের সময় ইনপুট সাইজের উপর নির্ভর করে না। অর্থাৎ, ইনপুট সাইজ
//    যাই হোক, এটি সবসময় একই সময় নেবে।

// উদাহরণ: একটি লিস্টের প্রথম আইটেমকে এক্সেস করা।
//      let arr = [1, 2, 3, 4, 5];
//      console.log(arr[0]); // সবসময় O(1) সময় নেবে।
// এক্ষেত্রে, লিস্ট যত বড়ই হোক না কেন, প্রথম আইটেম পাওয়ার জন্য সময় একই থাকবে।

// -------------------------------------------------

// 2. O(n): Linear Time
//    O(n) মানে ইনপুট সাইজের সাথে সময় সরাসরি অনুপাতে বৃদ্ধি পায়। অর্থাৎ, ইনপুট সাইজ যদি দ্বিগুণ
//    হয়, তাহলে অ্যালগরিদমের কাজের সময়ও দ্বিগুণ হবে।

// উদাহরণ: একটি লিস্টের সমস্ত আইটেম প্রিন্ট করা।
//      let arr = [1, 2, 3, 4, 5];
//      arr.forEach(item => console.log(item)); // প্রতিটি আইটেমের জন্য O(1), কিন্তু পুরো
//      লিস্টের জন্য O(n)
// এখানে লিস্টের প্রতিটি আইটেমে একবার করে লুপ চলে, তাই লিস্টের আকারের সাথে সময়ও বাড়ে।

// -------------------------------------------------

// 3. O(log n): Logarithmic Time
//    O(log n) বোঝায়, ইনপুট সাইজ বাড়লেও অ্যালগরিদমের কাজের সময় খুব ধীরে বৃদ্ধি পায়। প্রতিবার
//    কাজের সময় অর্ধেক কমে যায়, যেটা সাধারণত divide-and-conquer ধরনের অ্যালগরিদমে দেখা যায়।

// উদাহরণ: Binary Search (যেখানে একটি সাজানো লিস্ট থেকে একটি আইটেম খোঁজা হয়)।
//      function binarySearch(arr, target) {
//          let left = 0, right = arr.length - 1;
//          while (left <= right) {
//              let mid = Math.floor((left + right) / 2);
//              if (arr[mid] === target) return mid;
//              else if (arr[mid] < target) left = mid + 1;
//              else right = mid - 1;
//          }
//          return -1;
//      }
// Binary Search প্রতি পদক্ষেপে লিস্টের অর্ধেক অংশ বাদ দেয়, তাই কাজের সময় logarithmic হয়।
// এটি খুবই কার্যকর যখন লিস্ট বড় হয়।

// -------------------------------------------------

// 4. O(n^2): Quadratic Time
//    O(n^2) বোঝায়, কাজের সময় ইনপুট সাইজের বর্গের সাথে বৃদ্ধি পায়। অর্থাৎ, ইনপুট সাইজ দ্বিগুণ
//    হলে কাজের সময় চার গুণ হয়ে যায়। এটি সাধারণত nested loops-এর ক্ষেত্রে দেখা যায়।

// উদাহরণ: একটি 2D ম্যাট্রিক্স বা লিস্টের মধ্যে nested লুপ দিয়ে কাজ করা।
//      let matrix = [
//          [1, 2],
//          [3, 4]
//      ];
//      for (let i = 0; i < matrix.length; i++) {
//          for (let j = 0; j < matrix[i].length; j++) {
//          console.log(matrix[i][j]); // O(n^2)
//          }
//      }
// এখানে লিস্টের প্রতিটি আইটেমের জন্য দুটি লুপ চলে, তাই কাজের সময় বর্গ অনুপাতে বৃদ্ধি পায়।

// -------------------------------------------------

// 5. O(2^n): Exponential Time
//    O(2^n) বোঝায়, ইনপুট সাইজের সাথে সময় খুব দ্রুত বৃদ্ধি পায়। এটি সাধারণত recursive
//    অ্যালগরিদমে দেখা যায়, যেখানে প্রতিটি পদক্ষেপে দুইটি নতুন সমস্যা তৈরি হয়।

// উদাহরণ: Fibonacci সিরিজের জন্য একটি naive recursive অ্যালগরিদম।
//      function fibonacci(n) {
//          if (n <= 1) return n;
//          return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n)
//      }
// এখানে, প্রতিটি পদক্ষেপে দুটি নতুন পদক্ষেপ তৈরি হয়, তাই কাজের সময় exponent অনুপাতে বৃদ্ধি পায়।

// -------------------------------------------------

// 6. O(n!): Factorial Time
//    O(n!) হলো সবচেয়ে অদক্ষ complexity যেখানে ইনপুট সাইজ n হলে, কাজের সময় n!
// (ফ্যাক্টোরিয়াল) বাড়ে। এটি সাধারণত permutation বা combinatorial সমস্যা সমাধানে দেখা যায়।
