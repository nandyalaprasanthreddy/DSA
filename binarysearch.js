// Example usage:
// binary serach works only on sorted array
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 34, 43, 54, 65];
const findNumber = 34;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(right + left / 2);
    if (arr[mid] === target) {
      return console.log("Number found:", arr[mid]);
    } else if (arr[mid] < left) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "Number not found in the array";
}
binarySearch(sortedArray, findNumber);

// Time complexity : O(log n)
// For small arrays, the difference isn't huge.
// But for large arrays, binary search is dramatically faster — that's the power of logarithmic time!
