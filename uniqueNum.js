// finding unique num from array using bitwise operator XOR

//      when a * a = 0

//      a*0 = a

const arr = [1, 2, 2, 2, 1, 3, 4, 5, 6, 4, 5, 6];

const unique = (arr1) => {
  let xor = 0;
  for (let i = 0; i < arr1.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
};

const val = unique(arr);
console.log(val);
