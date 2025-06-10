const arr = [2, 1, 3, 5, 9, 8, 6, 7, 4];

const sortArr = (left, right) => {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
};
function mergesort(ar) {
  if (ar.length <= 1) return ar;

  let mid = Math.floor(ar.length / 2);
  let left = mergesort(ar.slice(0, mid));
  let right = mergesort(ar.slice(mid));
  return sortArr(left, right);
}
const val = mergesort(arr);
console.log(val);
