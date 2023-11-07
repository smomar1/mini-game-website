const words = ["html", "css", "javascript", "games", "website"];
const chosenWord = words[Math.floor(Math.random() * words.length)];
let displayWord = "_".repeat(chosenWord.length);

const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessInput');
const wordDisplay = document.getElementById('wordDisplay');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');

let guessedLetters = [];
let incorrectGuesses = 0;

function updateDisplayWord() {
  let tempWord = '';
  for (let i = 0; i < chosenWord.length; i++) {
    tempWord += guessedLetters.includes(chosenWord[i]) ? chosenWord[i] : '_';
  }
  displayWord = tempWord;
  wordDisplay.textContent = displayWord.split("").join(" ");
}

function checkGuess() {
  const userGuess = guessField.value.toLowerCase();
  if (userGuess && userGuess.length === 1 && /^[a-z]$/.test(userGuess)) {
    if (!guessedLetters.includes(userGuess)) {
      guessedLetters.push(userGuess);
      if (!chosenWord.includes(userGuess)) {
        incorrectGuesses++;
      }
      updateDisplayWord();
    }
    
    guesses.textContent = 'Guessed Letters: ' + guessedLetters.join(', ');

    if (displayWord === chosenWord) {
      lastResult.textContent = 'Congratulations! You guessed the word!';
      lastResult.style.backgroundColor = 'green';
      setGameOver();
    } else if (incorrectGuesses === 6) {
      lastResult.textContent = '!!!GAME OVER!!! The word was ' + chosenWord;
      setGameOver();
    } else {
      if (chosenWord.includes(userGuess)) {
        lastResult.textContent = `Good guess!`;
      } else {
        lastResult.textContent = `Incorrect! ${6 - incorrectGuesses} attempts left.`;
      }
    }
  }
  guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  let chosenWord = words[Math.floor(Math.random() * words.length)];
  displayWord = "-".repeat(chosenWord.length);
  guessedLetters = [];
  incorrectGuesses = 0;
  wordDisplay.textContent = displayWord.split("").join(" ");
  let resetButton = document.createElement('button');
  resetButton.textContent = 'Play Again';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', () => {
    location.reload();  // refresh the page for a new game
  });
}

function homeButton() {
  const backToHomeButton =document.getElementById('backToHome');
  backToHomeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });  
}

homeButton();