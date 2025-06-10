const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (curr < arr[prev] && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr; ///here the index becomes -1
  }
  return arr;
};
const val = insertionSort([9, 2, 4, 5, 45, 55]);
console.log(val);
