function todaysWeather(temperature) {
  if (temperature <= 7) {
    return `Please remember to wear winter Jaket.`;
  } else if (temperature > 7 && temperature < 16) {
    return `Please wear sweatshirt or autumn jaket.`;
  } else {
    return `Hurray!!! Its Summer time, you can wear shorts and shirts.`;
  }
}

const whatToWear = todaysWeather(6);
console.log(whatToWear);
