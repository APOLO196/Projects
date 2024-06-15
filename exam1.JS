function calculateTotalCost(input) {
      let priceOfWrappingPaper = 5.80 * Number(input [0]);
      let priceOfFabric = 7.20 * Number(input [1]);
      let priceOfGlue = 1.20 * Number(input [2]);
      let discountPercentage = Number(input [3]);

      let totalPriceBeforeDiscount = priceOfWrappingPaper + priceOfFabric + priceOfGlue;
     
      
  let totalCost = ((totalPriceBeforeDiscount) * discountPercentage);
  let discountAmount = totalPriceBeforeDiscount * (discountPercentage / 100);
      let totalPriceAfterDiscount = totalPriceBeforeDiscount - discountAmount;
  return totalPriceAfterDiscount.toFixed(3);
  console.log(totalCost);

}
calculateTotalCost(["2",
"3",
"2.5",
"25"]);
