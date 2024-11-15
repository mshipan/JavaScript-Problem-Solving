// Write a function that multiplies all elements in an array to find a total product.

// ১. for Loop Approach:
function multipleOfAllProduct(arr) {
  if (arr.length === 0) return 1; // Handle edge case: empty array

  //   অ্যারের উপাদান গুণফল বের করার ক্ষেত্রে, অ্যারে যদি ফাঁকা (empty) হয়, তখন একটি edge case তৈরি হয়।
  //   এই edge case হ্যান্ডেল করা জরুরি।

  let product = 1; // গুণফল ধরে রাখার জন্য স্টার্টিং পয়েন্ট
  for (let i = 0; i <= arr.length - 1; i++) {
    product *= arr[i]; // প্রতিটি উপাদান গুণ
  }
  return product;
}

const array = [1, 2, 3, 4, 5];
console.log(multipleOfAllProduct(array));

// ব্যাখ্যা:
// 1. product ভ্যারিয়েবল শুরুতে 1 এ সেট করা হয়। কারণ ১ হলো গুণফলের জন্য নিরপেক্ষ মান।
// 2. for লুপ ব্যবহার করে অ্যারের প্রতিটি উপাদান একে একে নেওয়া হয়।
// 3. প্রতিটি উপাদানকে product এর সাথে গুণ করা হয়।
// 4. শেষে product-এর চূড়ান্ত মান রিটার্ন করা হয়।

// ---------------------------------------------------------------------------

// ২. reduce() Method Approach:

function multiplyArrayElements(arr) {
  return arr.reduce((product, num) => product * num, 1);
}

const numbers = [2, 3, 4];
console.log(multiplyArrayElements(numbers));

// ব্যাখ্যা:
// 1. এখানে reduce() মেথড ব্যবহার করা হয়েছে, যা অ্যারের প্রতিটি উপাদান নিয়ে নির্দিষ্ট ক্রিয়া (এক্ষেত্রে গুণ) সম্পন্ন করে।
// 2. product হলো accumulator বা জমাকৃত মান, যা প্রথমে 1 দিয়ে শুরু হয়।
// 3. num হলো বর্তমান উপাদান যা অ্যারের প্রতিটি উপাদান একে একে ধরে কাজ করে।
// 4. প্রতিটি ধাপে product এর সাথে num গুণ হয় এবং শেষ ফলাফল রিটার্ন হয়।
