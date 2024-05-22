function isMultipleOf3Or7(num) {
  if (num <= 0) {
    return 'Please enter a positive number.';
  }

  if (num % 3 === 0) {
    return `${num} is a multiple of 3.`;
  } else if (num % 7 === 0) {
    return `${num} is a multiple of 7.`;
  } else {
    return `${num} is not a multiple of 3 or 7.`;
  }
}

function checkMultiple() {
  const num = Number(document.getElementById('numberInput').value);
  const result = isMultipleOf3Or7(num);
  document.getElementById('result').textContent = result;
}
