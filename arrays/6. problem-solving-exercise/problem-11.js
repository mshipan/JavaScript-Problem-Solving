// Write a function that returns a specific part of an array as a new array (slice).

function sliceArray(arr, start, end) {
  return arr.slice(start, end);
}

const numbers = [10, 20, 30, 40, 50];
console.log(sliceArray(numbers, 1, 4));
console.log(sliceArray(numbers, 2));
console.log(sliceArray(numbers, -3));
console.log(sliceArray(numbers, 1, -1));
console.log(sliceArray(numbers));

// ---------------------------------------------------------------------------

// Key Points:

// 1. Parameters:
// - start (optional): এখান থেকে কপি শুরু হবে। এটি নেগেটিভ হলে শেষ দিক থেকে গণনা শুরু হয়।
// - end (optional): এখানে কপি শেষ হবে। এটি নেগেটিভ হলে শেষ দিক থেকে গণনা শুরু হয়। এটি কপি হয় না।

// 2. Return Value:
// - নতুন একটি অ্যারে যার মধ্যে কপি করা অংশগুলো থাকবে।

// ---------------------------------------------------------------------------

// Example Breakdown:
// Example 1:
// sliceArray([10, 20, 30, 40, 50], 1, 4);
// Start index: 1 → 20
// End index: 4 (not included) → 50 before it ends
// Output: [20, 30, 40]

// Example 2:
// sliceArray([10, 20, 30, 40, 50], 2);
// Start index: 2 → 30
// No end index, so it copies till the end
// Output: [30, 40, 50]

// Example 3:
// sliceArray([10, 20, 30, 40, 50], -3);
// Start index: -3 → 30 (counting from the end)
// Output: [30, 40, 50]

// Example 4:
// sliceArray([10, 20, 30, 40, 50], 1, -1);
// Start index: 1 → 20
// End index: -1 → 50 (not included)
// Output: [20, 30, 40]

// Example 5:
// sliceArray([10, 20, 30, 40, 50]);
// No start or end provided, so the entire array is returned
// Output: [10, 20, 30, 40, 50]

// ---------------------------------------------------------------------------

// Edge Cases:
// 1. Empty Array:
// sliceArray([], 1, 3); // Output: []

// 2. Start index >= array length:
// sliceArray([10, 20, 30], 5, 6); // Output: []

// 3. End index <= start index:
// sliceArray([10, 20, 30], 2, 2); // Output: []

// 4. Negative indices:
// - Negative start বা end দিলে অ্যারের শেষ থেকে গণনা হয়।

// ---------------------------------------------------------------------------

// Advantages of slice:
// - মূল অ্যারেটি অপরিবর্তিত থাকে।
// - অ্যারের নির্দিষ্ট অংশ সহজেই কপি করা যায়।

// ---------------------------------------------------------------------------

// Time Complexity:O(k),
// - যেখানে k হল কপি করা উপাদানগুলোর সংখ্যা।

// ---------------------------------------------------------------------------

// Space Complexity: O(k),
// - কারণ নতুন অ্যারে তৈরি হয়।
