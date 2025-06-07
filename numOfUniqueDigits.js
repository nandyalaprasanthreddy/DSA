// array should be in sorted order
const uniqueDigits = (arr) => {
  let indexPos = 0;
  let temp = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[indexPos]) {
      indexPos = indexPos + 1;
      arr[indexPos] = arr[i];
      temp.push(arr[i]);
    }
  }
  return temp;
  //   return indexPos  // No of unique digits in given array
};

const arr = [0, 0, 0, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 7, 8, 9, 9, 9, 9];

const value = uniqueDigits(arr);
console.log("Unique array ", value);
