const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName === "") {
    return console.log(`Please enter the student name.`);
  }
  for (i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      return console.log(
        `This ${studentName} student is already in the class.`
      );
    }
  }
  if (studentName.substring(0, 5) === "Queen") {
    console.log(`Welcome to class Queen`);
    class07Students.push(studentName);
  } else if (class07Students.length === 6) {
    console.log(`Cannot add more students to class 07.`);
  } else if (class07Students.length < 6) {
    class07Students.push(studentName);
  }
}
addStudentToClass("moni");
addStudentToClass("soni");
addStudentToClass("eena");
addStudentToClass("meena");
addStudentToClass("teena");

addStudentToClass("pinki");
addStudentToClass("Queen margerita");
addStudentToClass("Queen margerita");
console.log(class07Students);

function getNumberOfStudents(studentArray) {
  // You write code here
  return studentArray.length;
}
console.log(getNumberOfStudents(class07Students));

//
// const class07Students = [];
// function addStudentToClass(studentName) {
//   // You write code here
//   if (studentName === "") {
//     return console.log(`Please enter the student name.`);
//   } else if (class07Students.includes(studentName)) {
//     return console.log(`This ${studentName} student is already in the class.`);
//   } else if (studentName.substring(0, 5) === "Queen") {
//     console.log(`Welcome to class Queen`);
//     return class07Students.push(studentName);
//   } else if (class07Students.length === 6) {
//     return console.log(`Cannot add more students to class 07.`);
//   } else if (class07Students.length < 6) {
//     return class07Students.push(studentName);
//   }
// }
// addStudentToClass("moni");
// addStudentToClass("soni");
// addStudentToClass("eena");
// addStudentToClass("meena");
// addStudentToClass("teena");

// addStudentToClass("pinki");
// addStudentToClass("Queen margerita");
// addStudentToClass("Queen margerita");
// console.log(class07Students);

// function getNumberOfStudents(studentArray) {
//   // You write code here
//   return studentArray.length;
// }
// console.log(getNumberOfStudents(class07Students));
