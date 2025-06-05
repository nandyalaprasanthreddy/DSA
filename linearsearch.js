const array1 = [1, 2, 3, 4, 34, 5, 65, 6, 7, 54, 43];
const findNumber = 34;
for (i = 0; i < array1.length - 1; i++) {
  if (array1[i] === findNumber) {
    console.log("Number found at Index:", i, "Value:", array1[i]);
    break;
  }
}

// Time complexity : O(n) as array size grows number of loops get increase
