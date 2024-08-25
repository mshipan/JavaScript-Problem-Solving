// Write a program that compares two functions: one declared with a function expression and the other with a function declaration. Call each function before it is defined in the code and observe the results.

// ফাংশনগুলো ডিফাইন করার আগে কল করা হচ্ছে
try {
  console.log("Calling declaredFunction:", declaredFunction());
} catch (error) {
  console.log("Error calling declaredFunction:", error.message);
}

try {
  console.log("Calling expressedFunction:", expressedFunction());
} catch (error) {
  console.log("Error calling expressedFunction:", error.message);
}

// ফাংশন ডিক্লারেশন
function declaredFunction() {
  return "This is a function declaration";
}

// ফাংশন এক্সপ্রেশন
const expressedFunction = function () {
  return "This is a function expression";
};

// ব্যাখ্যা:
// 1. ফাংশন ডিক্লারেশন (declaredFunction):
//    - ফাংশন ডিক্লারেশন "হোইস্টেড" হয়, অর্থাৎ পুরো স্কোপ জুড়ে (কোডের শুরুতে) ফাংশনটি ব্যবহারযোগ্য থাকে, এমনকি এটি ডিফাইন করার আগেও। তাই, declaredFunction() ডিফাইন করার আগে কল করলে
//      কোন সমস্যা হবে না এবং এটি ঠিকভাবে কাজ করবে।

// 2. ফাংশন এক্সপ্রেশন (expressedFunction):
//    - ফাংশন এক্সপ্রেশন একইভাবে হোইস্ট হয় না। এখানে, ভ্যারিয়েবল expressedFunction হোইস্ট হয় কিন্তু এটি ডিফাইন না করা পর্যন্ত undefined থাকে। তাই, expressedFunction() ডিফাইন করার আগে কল
//      করলে একটি এরর হবে কারণ আপনি undefined কে একটি ফাংশন হিসাবে কল করার চেষ্টা করছেন।
