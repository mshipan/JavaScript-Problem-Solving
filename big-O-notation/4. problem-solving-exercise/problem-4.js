// Write a function that takes an array of integers and returns the sum of all elements.
// Analyze the time complexity of your solution.

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const array = [1, 2, 3, 4, 5];
console.log(sum(array));

// ----------------------------------------------------------------------
// টাইম কমপ্লেক্সিটি বিশ্লেষণ:
// এই ফাংশনটি একটি অ্যারের প্রতিটি উপাদানকে একবার করে লুপের মাধ্যমে যাচাই করে এবং যোগ করে।
// - for লুপটি অ্যারের প্রতিটি উপাদানকে একবার করে প্রক্রিয়াকরণ করে। যদি অ্যারেতে nটি উপাদান থাকে,
//   তাহলে লুপটি n বার চলবে।
// - প্রতিটি লুপের ধাপ একটি নির্দিষ্ট সময়ে (constant time) কাজ করে, যেটা যোগফল আপডেট করে।

// টাইম কমপ্লেক্সিটি:
// - এই ফাংশনের টাইম কমপ্লেক্সিটি হলো O(n), যেখানে n হলো অ্যারের দৈর্ঘ্য। কারণ লুপটি পুরো
//   অ্যারের প্রতিটি উপাদানকে একবার করে প্রক্রিয়াকরণ করে। ইনপুট অ্যারের আকারের উপর ভিত্তি
//   করে ফাংশনের সময় সরাসরি বাড়ে। যদি অ্যারেতে ১০টি উপাদান থাকে, তাহলে লুপ ১০
//   বার চলবে; ১০০টি উপাদান থাকলে, লুপ ১০০ বার চলবে।

// উদাহরণ:
// যদি ইনপুট অ্যারে [1, 2, 3, 4, 5] হয়, তাহলে লুপটি ৫ বার চলবে এবং প্রতিটি উপাদানকে যোগ
// করবে। শেষ পর্যন্ত total হবে ১৫।

// ব্যাখ্যা (বাংলা):
// ফাংশনটি একটি অ্যারের সব উপাদানকে যোগ করে মোট যোগফল বের করে। যেহেতু এটি প্রতিটি
// উপাদানকে একবার করে প্রক্রিয়াকরণ করছে, তাই এর টাইম কমপ্লেক্সিটি O(n)। যদি ইনপুট
// অ্যারের আকার বড় হয়, তাহলে কাজের সময়ও তত বেশি হবে। n উপাদান থাকলে,
// এটি ঠিক n বার কাজ করবে।
