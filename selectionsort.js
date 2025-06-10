const arr = [1, 3, 4, 2, 9, 8, 5];

const selectionsort = (arr1) => {
  for (let i = 0; i < arr1.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  return arr1;
};

const val = selectionsort(arr);
console.log(val);
