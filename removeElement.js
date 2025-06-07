const arr = [3, 3, 2, 1, 9, 5, 6, 6, 42, 78, 89, 86];

function removeNum(arr, num) {
  let pos = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      arr[pos] = arr[i];
      pos = pos + 1;
    }
  }
  return pos;
}
const val = removeNum(arr, 86);
console.log(val);
