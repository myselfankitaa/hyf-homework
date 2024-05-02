const boughtCandyPrices = [];
const candyTablePrice = [
  ["sweet", 0.5],
  ["chocolate", 0.7],
  ["toffee", 1.1],
  ["chewing-gum", 0.03],
];

function addCandy(candyType, weight) {
  for (i = 0; i < candyTablePrice.length; i++) {
    {
      if (candyTablePrice[i][0] === candyType) {
        let priceActual = candyTablePrice[i][1] * weight;
        return priceActual;
      }
    }
  }
}
boughtCandyPrices.push(addCandy("sweet", 20));
boughtCandyPrices.push(addCandy("chocolate", 50));
boughtCandyPrices.push(addCandy("toffee", 10));
boughtCandyPrices.push(addCandy("chewing-gum", 100));
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
let boughtPrice = 0;
for (i = 0; i < boughtCandyPrices.length; i++) {
  boughtPrice += boughtCandyPrices[i];
}
console.log(boughtPrice);

if (amountToSpend > boughtPrice) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
