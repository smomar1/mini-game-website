// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessInput');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
const lowOrHi = document.getElementById('lowOrHi');

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = 'Well done!';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = '#E70612';
    
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  resetParas = document.querySelectorAll('.guessParas p');
  for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

const backToHomeButton = document.getElementById('backToHome');

backToHomeButton.addEventListener('click', function() {
  window.location.href = '../index.html';
});