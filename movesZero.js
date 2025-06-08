const arr = [0, 1, 0, 3, 4, 0, 8];
function movesZero(arr) {
  let pos = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[pos]) {
      arr[pos] = arr[i];
      arr[i] = 0;
      pos++;
    }
  }
  return arr;
}
const val = movesZero(arr);
console.log(val);

// pos=0
// i =0 [0,1,3,0,4,0,8]

// i=1[1,0,3,0,4,0,8]
// pos=1

// i=2[1,3,0,0,4,0,8]
// pos=2

// i=3[1,3,0,0,4,0,8]
// pos=2

// i=4[1,3,4,0,0,0,8]
// pos=3

// i=4[1,3,4,0,0,0,8]
// pos=3

// i=5[1,3,4,0,0,0,8]
// pos=3

// i=5[1,3,4,8,0,0,0]
// pos=3
