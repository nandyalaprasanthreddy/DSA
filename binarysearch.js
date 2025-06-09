// constraint apply on sorted ascending array
// two pointers

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return "Invalid or empty array";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log("Number found:", arr[mid], "at index", mid);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return "Number not found in the array";
}

const value = binarySearch([], 0);
console.log(value);
