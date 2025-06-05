const b = 5;
for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }
  console.log(row);
}
