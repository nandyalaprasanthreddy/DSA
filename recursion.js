// function call itself by splitting intgpo small chunks of same problems

function recursion(val) {
  if (val === 0) return; // base case
  console.log(val);
  recursion(val - 1); // recursive function
}

recursion(5);

// recursion(5)
// recursion(4)
// recursion(3)
// recursion(2)
// recursion(1)
