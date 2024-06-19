// Get references to the input and output fields
const inputString = document.getElementById('input-string');
const outputString = document.getElementById('output-string');
const reverseButton = document.getElementById('reverse-btn');

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Event listener for the "Reverse String" button
reverseButton.addEventListener('click', () => {
  const originalString = inputString.value.trim();
  if (originalString) {
    const reversedString = reverseString(originalString);
    outputString.value = reversedString;
  } else {
    outputString.value = '';
    alert('Please enter a valid string.');
  }
});
