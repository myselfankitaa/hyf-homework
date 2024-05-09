// Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

const indexOfRemoverdElement = names.indexOf(nameToRemove);

names.splice(indexOfRemoverdElement, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// Part--2
// When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function notThisFunctionName() {
  const calculatedTravelTimeInHour =
    travelInformation.destinationDistance / travelInformation.speed;
  const calculatedTravelTimeInMinutes = (calculatedTravelTimeInHour % 1) * 60;
  return `${Math.floor(calculatedTravelTimeInHour)} hours and ${Math.round(
    calculatedTravelTimeInMinutes
  )} minutes`;
}

const travelTime = notThisFunctionName(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes

// Part-3
//Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const lifeSpan = 80;
const lifeSpanInHours = 80 * 365 * 24;
let keysOfTime = ["days", "hours", "minutes"];

function calculateTotalTimeInHours(seriesDurations) {
  const totalTimeInHours =
    seriesDurations.days * 24 +
    seriesDurations.hours +
    seriesDurations.minutes / 60;
  // console.log(totalTimeInHours);
  return totalTimeInHours;
}

// Calling function just to check the output
// calculateTotalTimeInHours({
//   title: "Game of thrones",
//   days: 3,
//   hours: 1,
//   minutes: 0,
// });

function logOutSeriesText() {
  let totalSeriesTime = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    let series = seriesDurations[i];
    let seriesTime = 0;
    // console.log(seriesTime);
    for (let j = 0; j < keysOfTime.length; j++) {
      let key = keysOfTime[j];
      seriesTime += series[key];
    }
    totalSeriesTime += calculateTotalTimeInHours(series);
    const percentageOfLife =
      (calculateTotalTimeInHours(series) / lifeSpanInHours) * 100;
    console.log(
      `${seriesDurations[i].title} took ${percentageOfLife.toFixed(
        3
      )} % of my life`
    );
  }
  const totalPercentageOfLife = (totalSeriesTime / lifeSpanInHours) * 100;
  console.log(
    `In total that is ${totalPercentageOfLife.toFixed(2)} % of my life`
  );
}
// console.log(totalSeriesTime);

logOutSeriesText();
