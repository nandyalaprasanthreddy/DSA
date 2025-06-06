const a = 840;

function sumDigits(num) {
  let sum = 0;
  while (num !== 0) {
    console.log(num % 10, num / 10);
    sum = sum + (num % 10);

    num = Math.floor(num / 10);
  }
  return sum;
}

const value = sumDigits(a);
console.log(value);
