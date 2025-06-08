const stock = [7, 6, 1, 2, 5, 4, 9, 8];

function sellStockForProfit(arr) {
  let minStockVal = 0;
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - minStockVal > maxProfit) {
      maxProfit = arr[i] - minStockVal;
      minStockVal = arr[i];
    }
  }
  return maxProfit;
}
const val = sellStockForProfit(stock);
console.log(val);
