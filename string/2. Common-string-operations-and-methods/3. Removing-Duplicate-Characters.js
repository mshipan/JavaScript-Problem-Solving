// স্ট্রিং থেকে ডুপ্লিকেট অক্ষর সরিয়ে শুধুমাত্র অনন্য অক্ষরগুলোর একটি নতুন স্ট্রিং তৈরি করা অনেক ক্ষেত্রে প্রয়োজন হয়।
// JavaScript-এ এটি করার জন্য বেশ কয়েকটি পদ্ধতি রয়েছে।

// ----------------------------------------------------------------------------

// পদ্ধতি ১: Set ব্যবহার করে
// Set হল JavaScript-এর একটি ডাটা স্ট্রাকচার, যা শুধুমাত্র অনন্য মান ধারণ করে। স্ট্রিং থেকে একটি Set তৈরি করে
// এবং তারপর এটিকে আবার স্ট্রিংয়ে রূপান্তর করলে ডুপ্লিকেট অক্ষর সরানো সম্ভব।

// উদাহরণ:
const removeDuplicates = (str) => {
  return [...new Set(str)].join("");
};

const input = "aabbccddeeff";
const result = removeDuplicates(input);
console.log(result);
// Output: "abcdef" (ডুপ্লিকেট অক্ষর সরানো হয়েছে)

// ----------------------------------------------------------------------------

// পদ্ধতি ২: filter() এবং indexOf() ব্যবহার করে
// স্ট্রিংকে অ্যারেতে রূপান্তর করে filter() মেথডের মাধ্যমে প্রতিটি অক্ষর চেক করা যায়। যদি অক্ষরটির প্রথম আবির্ভাবের
// ইন্ডেক্স বর্তমান ইন্ডেক্সের সাথে মিলে যায়, তাহলে সেটি রাখা হয়।

// উদাহরণ:
const removeDuplicates1 = (str) => {
  return [...str].filter((char, index) => str.indexOf(char) === index).join("");
};

const input1 = "aabbccddeeff";
const result1 = removeDuplicates1(input1);
console.log(result1);
// Output: "abcdef"

// ----------------------------------------------------------------------------

// পদ্ধতি ৩: reduce() ব্যবহার করে
// reduce() মেথড ব্যবহার করে একটি অস্থায়ী স্ট্রিং বা অ্যারে ধরে রাখা যায়, যেখানে অনন্য অক্ষরগুলো যোগ করা হয়।

// উদাহরণ:
const removeDuplicates2 = (str) => {
  return [...str].reduce((acc, char) => {
    if (!acc.includes(char)) {
      acc += char;
    }
    return acc;
  }, "");
};

const input2 = "aabbccddeeff";
const result2 = removeDuplicates2(input2);
console.log(result2);
// Output: "abcdef"

// ----------------------------------------------------------------------------

// পদ্ধতি ৪: Regular Expression (RegExp) ব্যবহার করে
// নিয়মিত অভিব্যক্তি দিয়ে ডুপ্লিকেট অক্ষর চিহ্নিত এবং সরানো সম্ভব।

// উদাহরণ:
const removeDuplicates3 = (str) => {
  return str.replace(/(.)(?=.*\1)/g, "");
};

const input3 = "aabbccddeeff";
const result3 = removeDuplicates3(input3);
console.log(result3);
// Output: "abcdef"

// ----------------------------------------------------------------------------

// পদ্ধতি ৫: মান্যুকভাবে (Manual Iteration)
// একটি লুপ ব্যবহার করে স্ট্রিং প্রসেস করতে পারেন এবং একটি অ্যারে বা স্ট্রিংয়ে অনন্য অক্ষর যোগ করতে পারেন।

// উদাহরণ:
const removeDuplicates4 = (str) => {
  let unique = "";
  for (let char of str) {
    if (!unique.includes(char)) {
      unique += char;
    }
  }
  return unique;
};

const input4 = "aabbccddeeff";
const result4 = removeDuplicates4(input4);
console.log(result4);
// Output: "abcdef"
