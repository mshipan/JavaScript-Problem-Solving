// Create a function that merges two arrays of numbers into a single sorted array using the spread operator.
const mergeArrays = function (arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];
  console.log(mergedArr);
  const arr = mergedArr.sort((a, b) => a - b);

  return arr;
};

const array1 = [2, 6, 3, 1, 5];
const array2 = [10, 8, 11, 9, 7];

const result = mergeArrays(array1, array2);
console.log(result);
