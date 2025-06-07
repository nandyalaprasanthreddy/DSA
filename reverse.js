const reverseString = (arr) => {
  for (i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

const val = reverseString(["p", "r", "a", "s", "a", "n", "t", "h", "r"]);
console.log(val);

// swap happens here with in array first and last, then 2nd first and 2nd last so on
//  time complexity log n
