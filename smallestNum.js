const smallestNum = (arr) => {
  let smallest = Infinity;
  if (arr.length === 0) return null;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};
// const arr = [75,47384,54634,543,379934,6546588934,7784]
const arr = [];
const value = smallestNum(arr);
console.log(value);
