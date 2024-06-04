function findClosestValue() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent =
      'Please enter valid numbers.';
    return;
  }

  const diff1 = Math.abs(num1 - 100);
  const diff2 = Math.abs(num2 - 100);

  let closestValue;
  if (diff1 < diff2) {
    closestValue = num1;
  } else if (diff2 < diff1) {
    closestValue = num2;
  } else {
    closestValue = `Both ${num1} and ${num2} are equidistant from 100.`;
  }

  document.getElementById(
    'result'
  ).textContent = `The closest value to 100 is: ${closestValue}`;
}
