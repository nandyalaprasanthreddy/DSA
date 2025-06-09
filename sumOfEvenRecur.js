const arr = [1, 2, 3, 5, 4, 3, 3, 34, 6, 9, 0, 45, 3, 11, 3];

function sum(len) {
  let isOdd = arr[len] % 2 === 0;
  if (len === 0) {
    return isOdd ? arr[len] : 0;
  }
  return isOdd ? arr[len] + sum(len - 1) : 0 + sum(len - 1);
}

const val = sum(arr.length - 1);

console.log(val);
