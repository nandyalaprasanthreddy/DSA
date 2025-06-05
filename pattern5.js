const a = 6;
for (let i = 0; i < a; i++) {
  let row = "";

  for (let k = 0; k < i; k++) {
    row = row + " ";
  }
  for (let j = 0; j < a - (i + 1); j++) {
    row = row + "*";
  }
  console.log(row);
}
