const arr = [3, 6, 8, 9, 8, 7, 6, 7, 8];

function sum(len) {
  if (arr.length === 0) return 0;
  if (len === 0) return arr[0];
  return arr[len] + sum(len - 1);
}

const val = sum(arr.length - 1);
console.log(val);
