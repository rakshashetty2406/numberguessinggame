let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

document.getElementById('guessButton').onclick = () => {
  const guess = Number(document.getElementById('guessInput').value);
  attempts++;
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Enter a valid number (1–100)';
  } else if (guess < secretNumber) {
    message.textContent = 'Too low! Try again.';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high! Try again.';
  } else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  }
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
};
