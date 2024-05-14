// 1) Add an event listener without calling the function
let btn = document.querySelector('.start-btn');
btn.addEventListener('click', takeInput);

// 2) Declare the takeInput function before calling it
function takeInput() {
  let numInput = prompt(`Enter a number between 1 to 10`);

  // 3) Check for valid input correctly
  if (isNaN(numInput) || numInput < 1 || numInput > 10) {
    alert(`Enter a valid number`);
  } else {
    // 4) Call the startProg function with the valid input
    startProg(Number(numInput));
  }
}

function startProg(numInput) {
  let num = Math.ceil(Math.random() * 10);

  if (num === numInput) {
    console.log('Number match');
  } else {
    console.log(
      `Number didn't match. The number generated was ${num} and your number was ${numInput}.`
    );
  }
}
