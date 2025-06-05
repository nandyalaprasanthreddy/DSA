// const arr = [3,233,44,34,3,4,77,985,343,44344,4343]
const arr = [5, 5];

const secondSmallestNum = (arr) => {
  if (arr.length < 2) return null;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
};
const value1 = secondSmallestNum(arr);
console.log(value1);
