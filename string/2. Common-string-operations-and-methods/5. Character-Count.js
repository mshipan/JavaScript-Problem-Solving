// স্ট্রিং থেকে নির্দিষ্ট অক্ষরের বা প্রতিটি অক্ষরের সংখ্যা গণনা করা প্রায়ই প্রয়োজন হয়। এটি সাধারণত টেক্সট অ্যানালাইসিস, ডেটা প্রসেসিং, বা ডিবাগিং-এর সময় ব্যবহৃত হয়।

// ----------------------------------------------------------------------------

// পদ্ধতি ১: নির্দিষ্ট অক্ষর গণনা
// স্ট্রিং-এ নির্দিষ্ট একটি অক্ষর কতবার রয়েছে, তা বের করার জন্য একটি লুপ বা বিল্ট-ইন পদ্ধতি ব্যবহার করা যায়।

// উদাহরণ:
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const text = "hello world";
console.log(countCharacter(text, "o"));
// Output: 2

// ----------------------------------------------------------------------------

// পদ্ধতি ২: প্রতিটি অক্ষরের সংখ্যা গণনা
// প্রতিটি অক্ষর কতবার স্ট্রিং-এ রয়েছে, তা বের করার জন্য একটি অবজেক্ট ব্যবহার করা হয়।

// উদাহরণ:
function countAllCharacters(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

const text1 = "hello world";
console.log(countAllCharacters(text1));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// ----------------------------------------------------------------------------

// পদ্ধতি ৩: `Array.reduce()` ব্যবহার করে গণনা
// লুপ ছাড়াও, `reduce()` পদ্ধতি ব্যবহার করে অক্ষরের সংখ্যা গণনা করা যায়।

// উদাহরণ:
function countAllCharacters(str) {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

const text2 = "hello world";
console.log(countAllCharacters(text2));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// ----------------------------------------------------------------------------

// পদ্ধতি ৪: নিয়মিত প্রকাশ (Regular Expression)
// নির্দিষ্ট একটি অক্ষরের সংখ্যা গণনার জন্য `match` পদ্ধতি ব্যবহার করা যায়।

// উদাহরণ:
function countCharacter(str, char) {
  const matches = str.match(new RegExp(char, "g"));
  return matches ? matches.length : 0;
}

const text3 = "hello world";
console.log(countCharacter(text3, "l"));
// Output: 3

// ----------------------------------------------------------------------------

// পদ্ধতি ৫: কেস-ইনসেনসিটিভ গণনা (Case-Insensitive Count)
// অক্ষর বড় হাত বা ছোট হাত যেকোনো অবস্থায় থাকলে সেটি গণনা করতে চাইলে `toLowerCase` ব্যবহার করা যায়।

// উদাহরণ:
function countCharacterCaseInsensitive(str, char) {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  return lowerStr.split(lowerChar).length - 1;
}

const text4 = "Hello World";
console.log(countCharacterCaseInsensitive(text4, "l"));
// Output: 3

// ----------------------------------------------------------------------------

// পদ্ধতি ৬: Map ব্যবহার করে গণনা
// অক্ষর গণনার জন্য Map ডেটা স্ট্রাকচারও ব্যবহার করা যায়।

// উদাহরণ:
function countAllCharactersUsingMap(str) {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  return Object.fromEntries(charCount);
}

const text5 = "hello world";
console.log(countAllCharactersUsingMap(text5));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
