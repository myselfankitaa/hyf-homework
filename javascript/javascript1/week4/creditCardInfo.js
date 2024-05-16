const cards = {
  instaPaymentCard: /^63[7-9][0-9]{13}$/,
  maestroCard: /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{8,15}$/,
  masterCard: /^5[1-5][0-9]{14}$/,
  soloCard: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
  unionPayCard: /^(62[0-9]{14,17})$/,
  visaCard: /^4[0-9]{12}(?:[0-9]{3})?$/,
  visaMasterCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
};

function getCardInfo(cardNumber) {
  const cardStr = cardNumber.toString();
  if (isNaN(cardNumber)) {
    return `Please enter a valid number`;
  }
  for (const [type, pattern] of Object.entries(cards)) {
    if (cardStr.match(pattern)) {
      return type.toUpperCase();
    }
  }

  return "Unknown";
}

console.log(getCardInfo(4111111111111111));
