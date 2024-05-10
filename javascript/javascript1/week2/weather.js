const temperatureRange = [
  [0, "Please put on winter jacket"],
  [10, "Please wear sweatshirt or autumn jaket."],
  [20, "Looks Like Summer is on the way, You can go on without jacket"],
  [30, "Its Too Hot!! Have you shorts and you can go for swimming."],
];

function todaysWeather(temperature) {
  let displayMessage = `Its too cold out side, please put on your winter jacket along with winnie and gloves.`;
  for (let i = 0; i < temperatureRange.length; i++) {
    if (temperature >= temperatureRange[i][0]) {
      displayMessage = temperatureRange[i][1];
    } else {
      break;
    }
  }
  console.log(displayMessage);
}

const whatToWear = todaysWeather(21);

// function todaysWeather(temperature) {
//   if (temperature <= 7) {
//     return `Please remember to wear winter Jaket.`;
//   } else if (temperature > 7 && temperature < 16) {
//     return `Please wear sweatshirt or autumn jaket.`;
//   } else {
//     return `Hurray!!! Its Summer time, you can wear shorts and shirts.`;
//   }
// }

// const whatToWear = todaysWeather(6);
// console.log(whatToWear);
