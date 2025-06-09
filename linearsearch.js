const arr = [1, 2, 3, 4, 34, 5, 65, 6, 7, 54, 43];
const find = 34;
function linearSearch(array1, findNumber) {
  for (i = 0; i < array1.length - 1; i++) {
    if (array1[i] === findNumber) {
      return i;
    }
    return -1;
  }
}
linearSearch(arr, find);
// Time complexity : O(n) as array size grows number of loops get increase
