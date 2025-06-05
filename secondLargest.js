const secondLargestNum = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  if (arr.length < 2) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
// const arr = [3,233,44,34,3,4,77,985,343,44344,4343]
const arr = [5, 5];
const value = secondLargestNum(arr);
console.log(value);
