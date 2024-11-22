// Write a function that removes duplicate elements from an array.

function removeDuplicates(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b); // Copy and sort the array
  if (sortedArr.length === 0) return [];
  let uniqueIndex = 0; // প্রথম পয়েন্টার যা নতুন ইউনিক উপাদান রাখবে।
  for (let currentIndex = 1; currentIndex < sortedArr.length; currentIndex++) {
    if (sortedArr[uniqueIndex] !== sortedArr[currentIndex]) {
      uniqueIndex++; // নতুন ইউনিক উপাদানের জন্য পয়েন্টার বাড়াও।
      sortedArr[uniqueIndex] = sortedArr[currentIndex]; // নতুন ইউনিক উপাদান সেভ করো।
    }
  }
  // ইউনিক উপাদানের অংশটি কেটে বের করি
  return sortedArr.slice(0, uniqueIndex + 1);
}

const array = [1, 2, 3, 1, 3, 4, 5];
console.log(removeDuplicates(array));

// ---------------------------------------------------------------------------

// কোডের ব্যাখ্যা:
// Step 1: Sort the array
// const sortedArray = arr.slice().sort((a, b) => a - b);
// - arr.slice(): নতুন অ্যারে তৈরি করা হয় যাতে মূল অ্যারে পরিবর্তন না হয়।
// - .sort((a, b) => a - b): ইনপুট অ্যারেটি ছোট থেকে বড় ক্রমানুসারে সাজানো হয়।

// Step 2: Remove duplicates using two-pointer technique
// let uniqueIndex = 0;
// for (let currentIndex = 1; currentIndex < sortedArray.length; currentIndex++) {
//   if (sortedArray[uniqueIndex] !== sortedArray[currentIndex]) {
//     uniqueIndex++;
//     sortedArray[uniqueIndex] = sortedArray[currentIndex];
//   }
// }

// - uniqueIndex প্রথমে অ্যারের প্রথম উপাদানের দিকে পয়েন্ট করে।
// - currentIndex লুপের মাধ্যমে অ্যারের প্রতিটি উপাদান পর্যালোচনা করে।
// - যখনই নতুন ইউনিক মান পাওয়া যায়, সেটি uniqueIndex-এর পরবর্তী স্থানে সেট করা হয়।

// Step 3: Return only the unique portion
// return sortedArray.slice(0, uniqueIndex + 1);
// - slice দিয়ে অ্যারের শুধু ডুপ্লিকেট-মুক্ত অংশ রিটার্ন করা হয়।

// ---------------------------------------------------------------------------

// উদাহরণ:
// ইনপুট:
// const array = [4, 2, 4, 1, 3, 2, 1];
// console.log(removeDuplicates(array));

// আউটপুট:
// [1, 2, 3, 4]

// ---------------------------------------------------------------------------

// Time Complexity:
// - Sorting: O(nlogn)
// - Removing Duplicates: O(n)
// মোট টাইম কমপ্লেক্সিটি: O(nlogn)

// ---------------------------------------------------------------------------

// Space Complexity:
// - অ্যারেটি নতুনভাবে slice করে কপি করা হয়েছে, তাই স্পেস কমপ্লেক্সিটি O(n)।
