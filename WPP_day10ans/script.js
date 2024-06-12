function transformString() {
  const inputString = document.getElementById('inputString').value;
  let transformedString;

  if (inputString.length < 3) {
    transformedString = inputString.toUpperCase();
  } else {
    const firstThree = inputString.substring(0, 3).toLowerCase();
    const remaining = inputString.substring(3);
    transformedString = firstThree + remaining;
  }

  document.getElementById('result').textContent = transformedString;
}
