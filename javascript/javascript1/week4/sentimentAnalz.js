const positiveWords = ["awesome", "super", "good", "nice", "better"];
const negativeWords = ["bore", "stressed", "sad", "low", "hate", "nervous"];

function getSentimentScore(inputString) {
  const cleanedInputString = inputString.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
    ""
  );
  const strArray = cleanedInputString.toLowerCase().split(" ");
  let newObject = { score: 0, positiveWords: [], negativeWords: [] };
  for (let i = 0; i < strArray.length; i++) {
    // console.log(strArray[i]);
    if (positiveWords.includes(strArray[i])) {
      newObject.positiveWords.push(strArray[i]);
      console.log(newObject.positiveWords);
    } else if (negativeWords.includes(strArray[i])) {
      newObject.negativeWords.push(strArray[i]);
    }
  }
  newObject.score =
    newObject.positiveWords.length - newObject.negativeWords.length;
  return newObject;
}
const sentimentalScore = getSentimentScore(
  "I am feeling awesome, but a bit nervous"
);
console.log(sentimentalScore);
