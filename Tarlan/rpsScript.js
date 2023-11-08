//Variable to keep track of rounds played
let roundsPlayed = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to handle the game logic
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultSection = document.getElementById('resultSection');
    const yourState = document.getElementById('yourstate');
    const numRounds = document.getElementById('num');

    // Define a function to update the result text
    function updateResultText(message) {
        resultSection.innerHTML = message; // Update the result section with the message
    }

    if (playerChoice === computerChoice) {
        updateResultText(`It's a tie! You both chose ${playerChoice}.`);
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        updateResultText(`You win! You chose ${playerChoice} and computer chose ${computerChoice}.`);
    } else {
        updateResultText(`You lose! You chose ${playerChoice} and computer chose ${computerChoice}.`);
    }

    roundsPlayed++; // Increment rounds played

    // Update the game state and round counter
    yourState.textContent = "Make your next move!";
    numRounds.textContent = `Round ${roundsPlayed } of 3`;

    if (roundsPlayed === 3) {
        disableGameButtons(); // Disable game buttons if all rounds played
        enablePlayAgainButton(); // Enable Play Again button
    }
}

// Function to enable game buttons
function enableGameButtons() {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(button => button.disabled = false); // Enable all game buttons
}

// Function to disable game buttons
function disableGameButtons() {
    const buttons = document.querySelectorAll('.choices button:not(#playAgainButton)');
    buttons.forEach(button => button.disabled = true); // Disable game buttons except Play Again button
}

// Function to reset the game
function resetGame() {
    roundsPlayed = 0;
    const resultSection = document.getElementById('resultSection');
    resultSection.innerHTML = ''; // Clear result section
    enableGameButtons();
    const yourState = document.getElementById('yourstate');
    const numRounds = document.getElementById('num');
    yourState.textContent = "You have 3 tries to win";
    numRounds.textContent = "Set the stage with your opening move!";
}

// Event listener for the "Play Again" button
document.getElementById('playAgainButton').addEventListener('click', resetGame);

// Code for changing images
var images = [];
var time = 3000;
var i=0;

images[0] = "img/01.png";
images[1] = "img/02.png";
images[2] = "img/03.png";

function changeImg(){
    document.getElementById("slide").src = images[i];
    if(i < images.length-1){
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, time); // Set a timeout to change images at intervals
}

window.onload = changeImg; // Start changing images when the window loads

const backToHomeButton = document.getElementById('backToHome');

backToHomeButton.addEventListener('click', function() {
  window.location.href = '../index.html'; // Redirect to the home page when clicked
});


 
