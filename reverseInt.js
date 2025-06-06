function reverse(num) {
  let copyNum = num;
  num = Math.abs(num);
  let rev = 0;
  while (num > 0) {
    let last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  //   let limit = 2**31
  if (rev < -limit || rev > limit) return 0;
  return copyNum < 0 ? -rev : rev;
}
const value = 0;
const val = reverse(value);
console.log(val);
