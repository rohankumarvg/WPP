function removeCharacter() {
  const inputString = document.getElementById('inputString').value;
  const position = parseInt(document.getElementById('position').value) - 1;

  if (inputString && position >= 0 && position < inputString.length) {
    const modifiedString = removeCharFromString(inputString, position);
    document.getElementById(
      'result'
    ).textContent = `Modified string: ${modifiedString}`;
  } else {
    document.getElementById('result').textContent =
      'Please enter a valid string and position (1-based indexing).';
  }
}

function removeCharFromString(str, pos) {
  return str.slice(0, pos) + str.slice(pos + 1);
}
