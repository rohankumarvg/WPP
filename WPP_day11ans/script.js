function checkSequence() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const num3 = Number(document.getElementById('num3').value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById('result').textContent =
      'Please enter valid numbers.';
    return;
  }

  const isStrictIncreasing = num1 < num2 && num2 < num3;
  const isSoftIncreasing = num1 <= num2 && num2 <= num3;

  if (isStrictIncreasing) {
    document.getElementById('result').textContent =
      'The numbers are increasing in strict mode.';
  } else if (isSoftIncreasing) {
    document.getElementById('result').textContent =
      'The numbers are increasing in soft mode.';
  } else {
    document.getElementById('result').textContent =
      'The numbers are not increasing.';
  }
}
