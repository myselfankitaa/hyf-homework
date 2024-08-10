function calculateAvg(numbers) {
  if (numbers.length === 0) {
    console.log(`Please enter a valid number`);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

const argument = process.argv.slice(2);

const numbers = argument
  .map((arg) => parseFloat(arg))
  .filter((arg) => !isNaN(arg));

if (numbers.length === 0) {
  console.log(`please enter a number`);
} else {
  const average = calculateAvg(numbers);
  console.log(`The Average is: ${average}`);
}
