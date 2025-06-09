const factorial = 5;

function fact(n) {
  if (n < 2) {
    return 1;
  }
  return n * fact(n - 1);
}

const val = fact(factorial);
console.log(val);

// fact(5) = 5 * fact(5-1) <========== fact(5) = 3 * fact(4) <========== fact(2) = 24 * 5
// fact(4) = 4 * fact(4-1) <========== fact(4) = 4 * fact(3) <========== fact(2) = 4 * 6
// fact(3) = 3 * fact(3-1) <========== fact(3) = 3 * fact(2) <========== fact(2) = 3 * 2
// fact(2) = 2 * fact(2-1) <========== fact(2) = 2 * fact(1) <========== fact(2) = 2 * 1
// fact(1) = return 1
