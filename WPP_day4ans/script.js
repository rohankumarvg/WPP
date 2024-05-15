// Step 1: Get the current date
const currentDate = new Date();

// Step 2: Set the target date (Christmas)
const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // Month is 0-indexed, so 11 represents December

// Step 3: Check if Christmas has already passed this year
if (christmasDate < currentDate) {
  // If Christmas has already passed, set the target date to the next year
  christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

// Step 4: Calculate the difference in milliseconds between the current date and Christmas
const timeDifference = christmasDate.getTime() - currentDate.getTime();

// Step 5: Convert the difference to days
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Step 6: Display the result on the webpage
const countdownElement = document.getElementById('countdown');
countdownElement.textContent = `${daysLeft} days left until Christmas!`;
