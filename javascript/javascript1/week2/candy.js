const boughtCandyPrices = [];
const candyTablePrice = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewinggum: 0.03,
};
// const candyName = "sweet";
function addCandy(candyType, weight) {
  // console.log(candyTablePrice[candyType]);
  let priceActual = candyTablePrice[candyType] * weight;
  // console.log(priceActual);
  return priceActual;
}

boughtCandyPrices.push(addCandy("sweet", 20));
boughtCandyPrices.push(addCandy("chocolate", 50));
boughtCandyPrices.push(addCandy("toffee", 10));
boughtCandyPrices.push(addCandy("chewinggum", 100));
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
// console.log(amountToSpend);

function candyBoughtPrice() {
  let boughtPrice = 0;
  for (i = 0; i < boughtCandyPrices.length; i++) {
    boughtPrice += boughtCandyPrices[i];
  }
  // console.log(boughtPrice);
  return boughtPrice;
}
function boughtPricecheck() {
  if (amountToSpend > candyBoughtPrice()) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
boughtPricecheck();
