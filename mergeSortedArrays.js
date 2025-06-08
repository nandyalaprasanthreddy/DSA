// non increasing order
const arr1 = [2, 3, 4, 5, 5, 6, 0, 0, 0, 0];
const arr2 = [1, 2, 3, 4, 7, 9];
function mergeArr(ar1, m, ar2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (pointer2 < 0) break;
    if (pointer1 >= 0 && ar1[pointer1] > ar2[pointer2]) {
      ar1[i] = ar1[pointer1];
      pointer1--;
    } else {
      ar1[i] = ar2[pointer2];
      pointer2--;
    }
  }
  return ar1;
}

const val = mergeArr(arr1, 6, arr2, 6);
console.log(val);
