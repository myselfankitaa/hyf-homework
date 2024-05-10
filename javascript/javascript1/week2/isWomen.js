function getFullName(firstName, surName, useFormalName, isWoman) {
  if (useFormalName && isWoman) {
    return `Lady ${firstName} ${surName}`;
  } else if (useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else {
    return `${firstName} ${surName}`;
  }
}

const fullName3 = getFullName("Ankita", "Mishra", true, true);
const fullName4 = getFullName("Harish", "Tripathi", true, false);
const fullName5 = getFullName("Ishaan", "Tripathi");
console.log(`Your full Name: ${fullName3}`);
console.log(`Your full Name: ${fullName4}`);
console.log(`Your full Name: ${fullName5}`);
