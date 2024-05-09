// Adding an activity
let activities = [];
function addActivity(date, activity, duration) {
  if (
    typeof date === "string" &&
    typeof activity === "string" &&
    typeof duration === "number"
  ) {
    const newActivity = { date: date, activity: activity, duration: duration };
    activities.push(newActivity);
    console.log(activities);
  } else {
    console.log(`Please enter the detail in proper format`);
  }
}
addActivity("23/7-18", "Youtube", 30);
addActivity("25/7-18", "Netflix", 75);
addActivity("24/7-18", "Playing Games", 80);
console.log(activities);

// Show my status
const durationLimit = 200;
function showStatus(activities) {
  if (activities.length === 0) {
    console.log(`Please enter some activity.`);
  }
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }
  if (totalDuration <= durationLimit) {
    console.log(
      `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
    );
  } else {
    console.log(`"You have reached your limit, no more smartphoning for you!"`);
  }
}
showStatus(activities);
addActivity("29/7-18", "Playing Games", 80);
showStatus(activities);
