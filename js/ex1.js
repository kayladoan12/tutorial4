/* Tutorial 4
Example 1 JavaScript code
*/
console.log("Doan's Output from Tutorial 4 HW 4 Exercise 1")
// Valid input function
function validInput() {
  const userInput = prompt("Enter a number between 1 and 100:");
  const shown = userInput === null ? "null" : userInput;

  if (userInput === null) {
    console.log("Sorry, ${number} is not a number.");
    return
  }

  const trimmedInput = userInput.trim();
  const n = Number(trimmedInput);

  const isValid = trimmedInput !== "" && !isNaN(n) && Number.isInteger(n) && n >= 1 && n <= 100; 

  if (isValid) {
    console.log(`${n} is a valid number.`);
  } else {
    console.log(`${userInput} is not a valid number.`);
  }
}

// Guess a number game
function guessNumber() {
  const target = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  
  while (true) {  
    const userGuess = prompt("Guess a number between 1 and 100:");
    if (userGuess === null) {
      alert("Game cancelled.");
      console.log("Game cancelled.");
      return;
    }
    const guess = Number(userGuess);
    attempts++;

    if (Number.isNaN(guess)) {
      alert("Invalid input. Please enter a number between 1 and 100.");
      console.log("Invalid input. Please enter a number between 1 and 100.");
    } else if (guess < target) {
      alert("Too low! Try again.");
      console.log("Too low! Try again.");
    } else if (guess > target) {
      alert("Too high! Try again.");
      console.log("Too high! Try again.");
    } else if (guess === target) {
      alert(`Congratulations! You guessed the number ${target} in ${attempts} attempts.`);
      console.log(`Congratulations! You guessed the number ${target} in ${attempts} attempts.`);
      break;
    } else {
      alert("Unexpected error. Please try again.");
      console.log("Unexpected error. Please try again.");
      break;       
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("validateBtn").addEventListener("click", validInput);
  document.getElementById("guessBtn").addEventListener("click", guessNumber);
});

