const arr1 = [2, 3, 5, 1, 34, 6, 9];

const buubleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // changing this > < it sort ascending descending orders
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
const val = buubleSort(arr1);
console.log(val);
