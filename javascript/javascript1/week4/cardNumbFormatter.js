let creditCardDetail = {};
function formatCreditCardNumber(cardNumber) {
  let cardStr = cardNumber.toString();
  if (isNaN(cardNumber)) {
    return `Please enter a valid number`;
  }
  creditCardDetail.original = cardNumber;
  creditCardDetail.formattedNumber =
    cardStr.substring(0, 4) +
    " " +
    cardStr.substring(4, 8) +
    " " +
    cardStr.substring(8, 12) +
    " " +
    cardStr.substring(12, 16);

  return creditCardDetail;
}
formatCreditCardNumber(999999999999999);
creditCardDetail.name = "ankita";
console.log(creditCardDetail);
