// Write a function that swaps two numbers without using any extra space. What is
// the space complexity of your solution?

function swapNumber(a, b) {
  console.log(`Before Swap: a = ${a}, b = ${b}`);

  // অতিরিক্ত স্পেস ব্যবহার না করে অদলবদল
  a = a + b; // এখানে a এবং b এর যোগফল a তে রাখা হচ্ছে
  b = a - b; // b এখন a এর পুরোনো মানে পরিবর্তিত হচ্ছে
  a = a - b; // a এখন b এর পুরোনো মানে পরিবর্তিত হচ্ছে

  console.log(`After Swap: a = ${a}, b = ${b}`);
}

swapNumber(5, 10);

// ------------------------------------------------------------------------

// ব্যাখ্যা:
// - এই ফাংশনটি কোনো অতিরিক্ত ভ্যারিয়েবল বা স্পেস ব্যবহার না করে শুধুমাত্র গণিতের মাধ্যমে দুইটি সংখ্যার
//   অদলবদল করে।
// - প্রথমে a এবং b এর যোগফল a তে রাখা হয়, এরপর b এর মান পরিবর্তন করা হয় এবং শেষ পর্যন্ত a
//   এর মান পরিবর্তিত হয়।

// স্পেস কমপ্লেক্সিটি:
// এই সমাধানের স্পেস কমপ্লেক্সিটি হলো O(1)। কারণ ফাংশনটি কোনো অতিরিক্ত মেমরি বা ডাটা স্ট্রাকচার
// ব্যবহার করছে না। এটি শুধুমাত্র বিদ্যমান ভ্যারিয়েবলগুলো (a এবং b) ব্যবহার করে এবং কোনো নতুন
// ভ্যারিয়েবল তৈরি করে না, যা স্পেস কমপ্লেক্সিটিকে কনস্ট্যান্ট রাখে।