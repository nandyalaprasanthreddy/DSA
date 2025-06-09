// given the index of fibonacci and find the number inb that sequence
// [0,1,1,2,3,5,8,13,21]
const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const val = fibonacci(8);
console.log(val);

// time complexity big O (2 power of n) worse time complexity to rid these use dynamic programm
