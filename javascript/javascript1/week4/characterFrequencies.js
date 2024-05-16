let characterFrequencies = [];
function getCharacterFrequencies(string) {
  const strArray = string.split("");
  for (let i = 0; i < strArray.length; i++) {
    let character = strArray[i];
    let characterFound = false;

    // looping inside the defined array:
    for (let j = 0; j < characterFrequencies.length; j++) {
      if (characterFrequencies[j].character === character) {
        characterFrequencies[j].count++;
        characterFound = true;
        break;
      }
    }
    if (!characterFound) {
      characterFrequencies.push({ character: character, count: 1 });
    }
  }
  return characterFrequencies;
}

console.log(getCharacterFrequencies("ankita"));
