function checkString() {
  const inputString = document.getElementById('inputString').value;
  const result = inputString.startsWith('Java') ? 'True' : 'False';
  document.getElementById('result').innerText = result;
}
