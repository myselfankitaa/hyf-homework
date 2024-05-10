// console.log("inside event.");
// const now = new Date();
let day = new Date().getDay();
let calcweekday;
const weekList = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

function getDay(eventDay) {
  const getremaindarWeekDay = eventDay % 7;
  let weekday = day + getremaindarWeekDay;

  if (weekday >= 7) {
    calcweekday = weekday % 7;
  } else {
    calcweekday = weekday;
  }
  console.log(`The event is held on ${weekList[calcweekday]}`);
}

getDay(2);

// // console.log("inside event.");
// const now = new Date();
// let day = now.getDay();
// let newday;
// let calcweekday;

// function getDay(eventDay) {
//   const getremaindarWeekDay = eventDay % 7;
//   let weekday = day + getremaindarWeekDay;

//   if (weekday >= 7) {
//     calcweekday = weekday % 7;
//   } else {
//     calcweekday = weekday;
//   }

//   switch (calcweekday) {
//     case 0:
//       newday = "Sunday";
//       break;
//     case 1:
//       newday = "Monday";
//       break;
//     case 2:
//       newday = "Tuesday";
//       break;
//     case 3:
//       newday = "Wednesday";
//       break;
//     case 4:
//       newday = "Thursday";
//       break;
//     case 5:
//       newday = "Friday";
//       break;
//     case 6:
//       newday = "Saturday";
//       break;
//   }
//   console.log(`The event is held on ${newday}`);
// }

// getDay(99);
