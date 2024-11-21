// Write a function that uses flatMap to map each element in an array and flatten the result by one level.

function mapAndFlatten(arr) {
  return arr.flatMap((x) => [x, x * 3]);
}

const array = [1, 2, 3, 4];
console.log(mapAndFlatten(array));

// ---------------------------------------------------------------------------

// ব্যাখ্যা:
// 1. flatMap():
//    - এটি প্রথমে প্রতিটি উপাদানে map() অপারেশন চালায়।
//    - তারপরে ফ্ল্যাট অপারেশন করে এক স্তর কমিয়ে দেয়।

// 2. কোড বিশ্লেষণ:
//    - flatMap(x => [x, x * 3]):
//      - প্রতিটি উপাদানের জন্য একটি অ্যারে তৈরি করা হয় যার মধ্যে:
//      - প্রথম উপাদান: x (মূল উপাদান)।
//      - দ্বিতীয় উপাদান: x * 3 (উপাদানের তিনগুন)।
//      - ম্যাপ অপারেশনের পরে, তৈরি করা nested অ্যারেগুলিকে ফ্ল্যাট করে।

// 3. উদাহরণ:

//    - Input Array: [1, 2, 3, 4]
//    - Mapping Step:
//      - 1 -> [1, 3]
//      - 2 -> [2, 6]
//      - 3 -> [3, 9]
//      - 4 -> [4, 12]
//    - Flattening Step:
//      - [1, 3] + [2, 6] + [3, 9] + [4, 12] -> [1, 3, 2, 6, 3, 9, 4, 12]

// ---------------------------------------------------------------------------

// Edge Cases
// Case 1: Empty Array
// - যদি অ্যারে খালি থাকে, flatMap() খালি অ্যারে ফেরত দেয়।
// console.log(mapAndFlatten([])); // Output: []

// Case 2: Non-Numeric Elements
// - ফাংশনটি অন্য ধরনের উপাদানের সাথেও কাজ করবে।
// const array = ['a', 'b'];
// console.log(mapAndFlatten(array));
// // Output: ['a', 'aa', 'b', 'bb']

// Case 3: Sparse Elements
// - flatMap() অ্যারেতে থাকা sparse elements (holes) উপেক্ষা করে।
// const sparseArray = [1, , 3];
// console.log(mapAndFlatten(sparseArray));
// // Output: [1, 2, 3, 6]

// ---------------------------------------------------------------------------

// Time Complexity:
// - ম্যাপিং এবং ফ্ল্যাটিং একত্রে সম্পন্ন হয়।
// - মোট: O(n) যেখানে n = অ্যারের দৈর্ঘ্য।

// ---------------------------------------------------------------------------

// Space Complexity:
// - নতুন অ্যারে তৈরি করার জন্য অতিরিক্ত স্থান ব্যবহার করে।
// - মোট: O(n) (ফলাফলের জন্য স্পেস)।
