function fizzBuzz(num1 = 3, num2 = 5) {
  const numbers = [];
  for (let i = 0; i < 101; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      numbers.push("FizzBuzz");
    } else if (i % num1 === 0 && i % num2 !== 0) {
      numbers.push("Fizz");
    } else if (i % num2 === 0 && i % num1 !== 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(fizzBuzz());

console.log(fizzBuzz(2, 7));

// function fizzBuzz(Fizz = 3, Buzz = 5) {
//   let message = "";
//   for (let i = 0; i < 101; i++) {
//     if (i % Fizz === 0 && i % Buzz === 0) {
//       message += "FizzBuzz: " + i + "\n";
//     } else if (i % Fizz === 0 && i % Buzz !== 0) {
//       message += "Fizz: " + i + "\n";
//     } else if (i % Buzz === 0 && i % Fizz !== 0) {
//       message += "Buzz: " + i + "\n";
//     } else {
//       message += i + "\n";
//     }
//   }
//   return message;
// }

// const firstCondition = fizzBuzz();
// console.log(firstCondition);
// const secondCondition = fizzBuzz(2, 7);
// console.log(secondCondition);
