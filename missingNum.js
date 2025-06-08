const arr = [0, 1, 3];
function missDigit(arr1) {
  const len = arr1.length;
  const sum = (len * (len + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < arr1.length; i++) {
    partialSum = partialSum + arr1[i];
  }
  return sum - partialSum;
}
const val = missDigit(arr);
console.log(val);
