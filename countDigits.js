// const a = 1239989;

// function countDigits(num) {
//   let count = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
//   return count;
// }

// console.log(countDigits(a));

const a = 7784944329099;
function countDigits(num) {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    // count++;
    count = count + 1;
  }
  return count;
}
console.log(countDigits(a));
