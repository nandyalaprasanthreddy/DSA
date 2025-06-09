function powerOfTwo(num) {
  if (num == 1) return true;
  if (num < 1 || num % 2 !== 0) return false;
  return powerOfTwo(num / 2);
}

const val = powerOfTwo(15);
console.log(val);
