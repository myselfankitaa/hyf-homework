// Flight booking fullname function
/*function getFullName(firstname, surname) {
  return `${firstName} ${surName}`;
}
const fullName1 = getFullName("Ankita", "Mishra");
const fullName2 = getFullName("Harish", "Tripathi");
console.log(`Your full Name: ${fullName1}`);
console.log(`Your full Name: ${fullName2}`);*/

//Formal fullname
function getFullname(firstName, surName, useFormalName) {
  if (firstName && surName && useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else if (firstName && surName) {
    return `${firstName} ${surName}`;
  } else {
    return `Please provide the Fisrt Name & Last Name`;
  }
}

const fullName1 = getFullname();
const fullName2 = getFullname("Harish", "Tripathi", true);
console.log(`Your full Name: ${fullName1}`);
console.log(`Your full Name: ${fullName2}`);
