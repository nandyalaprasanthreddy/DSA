const str = "prasanth";

const countCharcters = (str) => {
  const countChars = {};

  for (let char of str) {
    countChars[char] = (countChars[char] || 0) + 1;
  }
  return countChars;
};
const val = countCharcters(str);
console.log(val);
