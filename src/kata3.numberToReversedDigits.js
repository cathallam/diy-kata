const numberToReversedDigits = (number) => {
  const numberAsString = number.toString();
  const splitNumber = numberAsString.split("");
  const reverseArray = splitNumber.reverse();

  // use .map to convert every string to a number - string is my chosen parameter name
  return reverseArray.map(string => parseInt(string, 10));
}

module.exports = numberToReversedDigits;
