const fibonaaciSequence = [0, 1];
let newNumber = 0;
const upperLimit = 50;
function createFibonnaci() {
  for (let i = 0; i < fibonaaciSequence.length; i++) {
    if (newNumber <= upperLimit) {
      newNumber =
        fibonaaciSequence[fibonaaciSequence.length - 1] +
        fibonaaciSequence[fibonaaciSequence.length - 2];
      fibonaaciSequence.push(newNumber);
    } else {
      fibonaaciSequence.pop();
      return;
    }
  }
}
createFibonnaci();
console.log(fibonaaciSequence);
