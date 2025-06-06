const a = 840;

function sumDigits(num) {
  if (n === 0) return 0;
  let sum = 0;
  // *********  change negative nums to positive  *********
  num = Math.abs(num);
  // *********  change negative nums to positive  *********
  while (num !== 0) {
    console.log(num % 10, num / 10);
    sum = sum + (num % 10);

    num = Math.floor(num / 10);
  }
  return sum;
}

const value = sumDigits(a);
console.log(value);
