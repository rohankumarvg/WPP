function createString(str) {
  // Check if the string length is less than 3
  if (str.length < 3) {
    return 'String length must be 3 or more.';
  }

  // Get the last 3 characters of the string
  const lastThree = str.slice(-3);

  // Create the new string by adding the last 3 characters to the front and back
  const newString = lastThree + str + lastThree;

  return newString;
}

const originalString = 'JavaScript';
const modifiedString = createString(originalString);
console.log(modifiedString);
