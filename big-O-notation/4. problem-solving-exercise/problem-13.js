// Write an algorithm that checks if a string is a palindrome. First, solve it using
// O(n^2) time complexity, and then try to optimize it to O(n).

// 1. অ্যালগরিদম (O(n²) টাইম কমপ্লেক্সিটি) দিয়ে প্যালিনড্রোম চেক করা
// প্রথম পদ্ধতিতে প্রতিটি ক্যারেক্টারকে অন্য ক্যারেক্টারের সাথে তুলনা করা হয় nested loop ব্যবহার করে।
// এর ফলে টাইম কমপ্লেক্সিটি হয় O(n²), কারণ আমরা ক্যারেক্টারগুলোকে একাধিকবার তুলনা করি।

function isPalindromeNaive(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    // বর্তমান ক্যারেক্টারকে শেষের দিকে সমান অবস্থানের ক্যারেক্টারের সাথে তুলনা
    if (str[i] !== str[n - i - 1]) {
      return false; // প্যালিনড্রোম নয়
    }
  }
  return true; // এটি প্যালিনড্রোম
}

const testStr = "racecar";
console.log(isPalindromeNaive(testStr));

// -----------------------------------------------------------------

// ব্যাখ্যা:
// - আমরা প্রতিটি ক্যারেক্টারকে ধরে তুলনা করি শেষের দিকে থাকা সমান অবস্থানের ক্যারেক্টারের সাথে।
// - এই ক্যারেক্টার তুলনা একটি লুপে করা হলেও, ক্যারেক্টার তুলনার জন্য nested loop ব্যবহার করা হয়।
//   তাই টাইম কমপ্লেক্সিটি O(n²) হয়।

// 2. অপ্টিমাইজড অ্যালগরিদম (O(n) টাইম কমপ্লেক্সিটি)
// এই সমাধানকে অপ্টিমাইজ করতে আমরা two-pointer টেকনিক ব্যবহার করতে পারি। একটি পয়েন্টার
// শুরু করবে স্ট্রিং এর শুরু থেকে এবং আরেকটি পয়েন্টার শেষ থেকে। ক্যারেক্টারগুলো সরাসরি তুলনা
// করা হবে এবং এর ফলে টাইম কমপ্লেক্সিটি হবে O(n), কারণ আমরা পুরো স্ট্রিংটি একবারই iterate করব।

function isPalindromeOptimized(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // প্যালিনড্রোম নয়
    }
    left++;
    right--;
  }
  return true; // এটি প্যালিনড্রোম
}

console.log(isPalindromeOptimized(testStr)); // আউটপুট: true

// -----------------------------------------------------------------------

// ব্যাখ্যা:
// - আমরা দুইটি পয়েন্টার ব্যবহার করি, একটি left শুরু হয় স্ট্রিং এর শুরু থেকে এবং আরেকটি right
//   শুরু হয় স্ট্রিং এর শেষ থেকে।
// - আমরা উভয় অবস্থানের ক্যারেক্টারগুলো তুলনা করি। যদি তারা সমান হয়, পয়েন্টারগুলো কেন্দ্রের দিকে
//   চলে যায়।
// - কোনো অবস্থানে ক্যারেক্টারগুলো যদি না মেলে, তাহলে ফাংশন false রিটার্ন করে।
// - এটি টাইম কমপ্লেক্সিটি O(n) তে নামিয়ে আনে কারণ আমরা স্ট্রিংটি একবারই iterate করি।

// টাইম কমপ্লেক্সিটির তুলনা:
// - O(n²) সমাধানটি অপ্রয়োজনীয় nested তুলনা করে।
// - অপ্টিমাইজড O(n) সমাধানটি two-pointer টেকনিক ব্যবহার করে ক্যারেক্টার তুলনার সংখ্যা
//   কমিয়ে দেয়।