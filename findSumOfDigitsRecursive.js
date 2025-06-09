//
function sumRecur(value) {
  if (value === 0) return 0;
  console.log(value);
  return value + sumRecur(value - 1);
}
const val = sumRecur(5);

console.log(val);

// sumRecur(5) => value + sumRecur(value+1)
// sumRecur(4) => value + sumRecur(value+1)
// sumRecur(3) => value + sumRecur(value+1)
// sumRecur(2) => value + sumRecur(value+1)
// sumRecur(1) => value + sumRecur(value+1)
// sumRecur(0) => 0
