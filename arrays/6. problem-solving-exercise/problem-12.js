// Write a function that doubles each element in an array and returns a new array (map).

function doubleElem(arr) {
  return arr.map((a) => a * 2);
}

const array = [1, 2, 3, 4];
console.log(doubleElem(array));

// ---------------------------------------------------------------------------

// How It Works:
// - Parameter: map() একটি কলব্যাক ফাংশন নেয়, যা প্রতিটি উপাদানের উপর কার্যকর হয়।
// - Return Value: এটি একটি নতুন অ্যারে তৈরি করে, যা কলব্যাক ফাংশনের আউটপুট ধারণ করে।
// - Unchanged Original Array: মূল অ্যারে অপরিবর্তিত থাকে।

// ---------------------------------------------------------------------------

// Example Breakdown:

// Input Array:
// const array = [1, 2, 3, 4];

// Callback Function:
// a => a * 2

// For each element, এটি তার মানকে ২ দ্বারা গুণ করে:

// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 4 * 2 = 8

// Output Array:
// [2, 4, 6, 8]

// ---------------------------------------------------------------------------

// Edge Cases:

// 1. Empty Array:
// doubleElem([]); // Output: []

// 2. Non-Numeric Elements:
// doubleElem(["a", "b", "c"]); // Output: ["aa", "bb", "cc"]

// 3. Mixed Data Types:
// doubleElem([1, "a", true]); // Output: [2, "aa", 2] (true is treated as 1)

// ---------------------------------------------------------------------------

// Advantages of map:
// - এটি একটি নতুন অ্যারে তৈরি করে মূল অ্যারে অক্ষত রাখে।
// - প্রতিটি উপাদানের জন্য নির্ধারিত অপারেশন খুবই সহজে প্রয়োগ করা যায়।

// ---------------------------------------------------------------------------

// Time Complexity:
// - O(n), যেখানে n হল অ্যারের উপাদান সংখ্যা।

// ---------------------------------------------------------------------------

// Space Complexity:
// - O(n), কারণ নতুন অ্যারে তৈরি হয়।
