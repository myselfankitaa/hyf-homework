//FreeCOdeCamp Exercise link
//https://www.freecodecamp.org/myselfankitaa

//Age-ify (A future age calculator)
const yearOfBirth = 1988;
let yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
let dogYearFuture = 2045;
const dogAge = dogYearFuture - dogYearOfBirth;
let dogYear = dogAge * 7;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogAge + " human years old in " + dogYearFuture
  );
}

//Housey pricey (A house price estimator)
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseheight = 10;
const peterGardenSizeInM2 = 100;
const peterHouseActualPrice = 2500000;
let volumeInMeters = peterHouseheight * peterHouseDepth * peterHouseWidth;
let housePrice = volumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
console.log("Actual house Price is " + housePrice);
if (housePrice > peterHouseActualPrice) {
  console.log("Peter paid too little.");
} else {
  console.log("Peter paid too much.");
}

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseheight = 8;
const juliaGardenSizeInM2 = 70;
const juliaHouseActualPrice = 1000000;
volumeInMeters = juliaHouseheight * juliaHouseDepth * juliaHouseWidth;
housePrice = volumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log("Actual house Price is " + housePrice);
if (housePrice > juliaHouseActualPrice) {
  console.log("Julia paid too little.");
} else {
  console.log("Julia paid too much.");
}

// Ez Namey (Startup name generator)
const firstWords = [
  "Innovate",
  "Revolution",
  "Venture",
  "Corporate",
  "Next",
  "Thrive",
  "Selection",
  "Pioneer",
  "RiseUp",
  "Horizon",
];
const secondWords = [
  "Awesome",
  "Choice",
  "UpStart",
  "Spark",
  "Evergreen",
  "Catalyst",
  "Accelerate",
  "Ignite",
  "Momentum",
  "Accelerate",
];
const firstRandomName = Math.floor(Math.random() * 10);
const secondRandomName = Math.floor(Math.random() * 10);
const startupName =
  firstWords[firstRandomName] + " " + secondWords[secondRandomName];
const startupLength = startupName.length;
console.log(
  `The startup: \"${startupName}\" contains ${startupLength} characters.`
);
