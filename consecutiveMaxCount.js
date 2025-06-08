const arr1 = [0, 111, 0, 9, 8, 0, 1, 1, 1, 1, 1, 1, 5, 7, 1, 1, 1, 1, 1, 1, 1];

function maxConsec(arr) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currCount++;
    } else if (maxCount < currCount) {
      Math.max(maxCount, currCount);
      currCount = 0;
    }
  }
  return Math.max(maxCount, currCount);
}

const val = maxConsec(arr1);
console.log(val);
