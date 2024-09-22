// Write a function that returns the maximum element in an array. Analyze the time
// complexity of your function.

function findMax(arr) {
  if (arr.length === 0) {
    return null; // অ্যারে যদি খালি হয়
  }

  let max = arr[0]; // প্রথম উপাদানটিকে সর্বাধিক হিসাবে ধরে নিচ্ছি

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // যদি বড় মান পাওয়া যায়, তাহলে max আপডেট হবে
    }
  }

  return max;
}

const nums = [1, 2, 4, 5, 3, 9];
console.log(findMax(nums)); // আউটপুট: 9
