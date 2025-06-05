const a = 6;
for (let i = 0; i < a; i++) {
  let row = "";
  for (j = 0; j < a - (i - 1); j++) {
    row = row + " ";
  }
  for (k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
//        *
//       **
//      ***
//     ****
//    *****
//   ******
// const a = 6;
// for (let i = 0; i < a; i++) {
//   let row = "";
//   for (j = 0; j < a - (i - 1); j++) {
//     row = row + " ";
//   }
//   for (k = 0; k < i + 1; k++) {
//     row = row + " *"; // adding extra space here before star then we get triangle
//   }
//   console.log(row);
// }

//         *
//        * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * *
