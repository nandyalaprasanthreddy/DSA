const c = 5;

for (let i = 0; i < c; i++) {
  let row = "";
  for (j = 0; j < c - i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
