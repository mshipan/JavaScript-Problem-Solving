// স্ট্রিং-এর প্রতিটি অক্ষরের জন্য একটি নির্দিষ্ট অ্যাসকি (ASCII) ভ্যালু থাকে। এই ভ্যালুগুলি একটি ইউনিকড ভ্যালু যা অক্ষর, সংখ্যা,
// এবং বিশেষ চিহ্নের জন্য একটি নির্দিষ্ট সংখ্যা প্রদান করে। জাভাস্ক্রিপ্টে স্ট্রিং থেকে অ্যাসকি ভ্যালু বের করতে charCodeAt()
// মেথড ব্যবহার করা হয়।

// ----------------------------------------------------------------------------

// charCodeAt() মেথড
// স্ট্রিং-এর নির্দিষ্ট পজিশনে থাকা অক্ষরের অ্যাসকি ভ্যালু বের করতে charCodeAt(index) মেথডটি ব্যবহার করা হয়।

// ----------------------------------------------------------------------------

// উদাহরণ ১: একক অক্ষরের অ্যাসকি ভ্যালু বের করা
function getAsciiValue(str, index) {
  return str.charCodeAt(index);
}

const text = "Hello";
console.log(getAsciiValue(text, 0));
// Output: 72 (H এর অ্যাসকি ভ্যালু)
console.log(getAsciiValue(text, 1));
// Output: 101 (e এর অ্যাসকি ভ্যালু)

// ----------------------------------------------------------------------------

// উদাহরণ ২: সম্পূর্ণ স্ট্রিং-এর অ্যাসকি ভ্যালু বের করা
// স্ট্রিং-এর প্রতিটি অক্ষরের অ্যাসকি ভ্যালু বের করতে একটি লুপ ব্যবহার করা যেতে পারে।

function getAsciiValues(str) {
  const asciiValues = [];
  for (let i = 0; i < str.length; i++) {
    asciiValues.push(str.charCodeAt(i));
  }
  return asciiValues;
}

const text1 = "Hello";
console.log(getAsciiValues(text1));
// Output: [72, 101, 108, 108, 111]

// ----------------------------------------------------------------------------

// উদাহরণ ৩: প্রতিটি অক্ষর এবং তার অ্যাসকি ভ্যালু দেখানো

function displayAsciiValues(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(`'${str[i]}' এর ASCII ভ্যালু: ${str.charCodeAt(i)}`);
  }
}

const text2 = "World";
displayAsciiValues(text2);
// Output:
// 'W' এর ASCII ভ্যালু: 87
// 'o' এর ASCII ভ্যালু: 111
// 'r' এর ASCII ভ্যালু: 114
// 'l' এর ASCII ভ্যালু: 108
// 'd' এর ASCII ভ্যালু: 100

// ----------------------------------------------------------------------------

// উদাহরণ ৪: অ্যাসকি ভ্যালু থেকে অক্ষর বের করা
// অ্যাসকি ভ্যালু থেকে অক্ষর পেতে String.fromCharCode() ব্যবহার করা হয়।

function getCharFromAscii(ascii) {
  return String.fromCharCode(ascii);
}

console.log(getCharFromAscii(65));
// Output: A
console.log(getCharFromAscii(97));
// Output: a

// ----------------------------------------------------------------------------

// কেস ইনসেনসিটিভ অ্যাসকি ভ্যালু তুলনা

function compareAsciiValues(char1, char2) {
  const ascii1 = char1.charCodeAt(0);
  const ascii2 = char2.charCodeAt(0);
  return ascii1 === ascii2;
}

console.log(compareAsciiValues("a", "a"));
// Output: true
console.log(compareAsciiValues("a", "A"));
// Output: false

// ----------------------------------------------------------------------------

// কোড প্রয়োগের ক্ষেত্র
// 1. এনক্রিপশন ও ডিক্রিপশন: অ্যাসকি ভ্যালু ব্যবহার করে অক্ষর এনক্রিপ্ট বা ডিক্রিপ্ট করা যায়।
// 2. অক্ষরের তুলনা: দুটি অক্ষরের পার্থক্য বা সমতা যাচাই।
// 3. অক্ষর গণনা: স্ট্রিং-এ অক্ষরের ধরণ বের করা।
// 4. ডাটা প্রসেসিং: বিশেষ অক্ষর ফিল্টার করা।
