// স্ট্রিংয়ের দৈর্ঘ্য নির্ণয় করা প্রোগ্রামিংয়ে একটি সাধারণ এবং প্রয়োজনীয় কাজ। এটি ব্যবহার করে আপনি জানতে পারেন একটি স্ট্রিংয়ে
// মোট কতটি অক্ষর (characters) আছে।

// ----------------------------------------------------------------------------

// কেন দৈর্ঘ্য নির্ণয় গুরুত্বপূর্ণ?

// 1. ইনপুট যাচাই করা: কোনো স্ট্রিং ছোট নাকি বড় তা যাচাই করতে।
// 2. ইটারেশন বা লুপে ব্যবহার: স্ট্রিংয়ের প্রতিটি অক্ষরের উপর লুপ চালানোর জন্য।
// 3. সাবস্ট্রিং বা কাটিং: স্ট্রিং থেকে নির্দিষ্ট অংশ বের করতে।
// 4. এলগরিদম: যেমন পালিন্ড্রোম চেক, স্ট্রিং রিভার্স ইত্যাদি।

// ----------------------------------------------------------------------------

// স্ট্রিংয়ের দৈর্ঘ্য নির্ণয়ের পদ্ধতি
// জাভাস্ক্রিপ্টে length প্রপার্টি ব্যবহার করে স্ট্রিংয়ের দৈর্ঘ্য খুব সহজেই নির্ণয় করা যায়।

// ----------------------------------------------------------------------------

// উদাহরণ

// ১. সাধারণ স্ট্রিং
const str = "Hello, World!";
console.log(str.length);
// Output: 13

// বর্ণনা:
// স্ট্রিং Hello, World! এ ১৩টি অক্ষর রয়েছে। স্পেস এবং চিহ্নও গণনায় অন্তর্ভুক্ত হয়।

// ----------------------------------------------------------------------------

// ২. খালি স্ট্রিং
const emptyStr = "";
console.log(emptyStr.length);
// Output: 0

// বর্ণনা:
// যদি স্ট্রিং খালি হয়, তাহলে এর দৈর্ঘ্য হবে 0।

// ----------------------------------------------------------------------------

// ৩. বিশেষ চিহ্ন এবং স্পেস সহ স্ট্রিং
const specialStr = "  Shipan Mallik!  ";
console.log(specialStr.length);
// Output: 18

// বর্ণনা:
// স্ট্রিংয়ের শুরু এবং শেষে থাকা স্পেস এবং ! চিহ্ন দৈর্ঘ্যের মধ্যে গণনা করা হয়।

// ----------------------------------------------------------------------------

// ইউনিকোড স্ট্রিং
// ইউনিকোড চিহ্ন (যেমন ইমোজি) ব্যবহারের সময় দৈর্ঘ্য নির্ণয় একটু ভিন্ন হতে পারে কারণ একটি ইমোজি একাধিক কোড পয়েন্ট নিয়ে গঠিত হতে পারে।

const emojiStr = "😀👍";
console.log(emojiStr.length);
// Output: 2

// বর্ণনা:
// স্ট্রিংয়ে দুইটি ইউনিকোড ইমোজি আছে এবং প্রতিটির জন্য একটি করে কোড পয়েন্ট গণনা করা হয়।

// ----------------------------------------------------------------------------

// স্ট্রিং দৈর্ঘ্যের কিছু ব্যবহারিক উদাহরণ

// ১. সর্বোচ্চ দৈর্ঘ্যের যাচাই
function validateInput(input) {
  if (input.length > 10) {
    return "Input is too long!";
  }
  return "Input is valid.";
}

console.log(validateInput("HelloWorld!"));
// Output: "Input is too long!"

// ----------------------------------------------------------------------------

// ২. লুপে ব্যবহার
const str1 = "JavaScript";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t