function palindrome(num) {
  if (num < 0) return false;
  let rev = 0;
  let original = num;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev === original;
}
const val = 1112111;
const value = palindrome(val);
console.log(value);
