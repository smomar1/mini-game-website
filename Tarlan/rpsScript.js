//Variable to keep track of rounds played
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

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
    // Add this function to update scores after each round
    function updateScores(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return; // It's a tie, no need to update scores
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            playerScore++;
        } else {
            computerScore++;
        }
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

    updateScores(playerChoice, computerChoice); // Update scores after each round


    roundsPlayed++; // Increment rounds played

    // Update the game state and round counter
    yourState.textContent = "Make your next move!";
    numRounds.textContent = `Round ${roundsPlayed } of 3`;

    if (roundsPlayed === 3) {

        recordScores(); // Record scores after each set of three rounds
        if (playerScore > computerScore) {
            updateResultText(`You won this set of three rounds!`);
        } else if (playerScore < computerScore) {
            updateResultText(`Computer won this set of three rounds.`);
        } else {
            updateResultText(`It's a tie! Both the player and the computer won an equal number of sets.`);
        }

        //yourState.textContent = "";
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

// Function to record scores after each set of three rounds
function recordScores() {
    const yourState = document.getElementById('yourstate');
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');

    const playerScoreElement = document.createElement('p');
    playerScoreElement.textContent = `Player Score: ${playerScore}`;

    const computerScoreElement = document.createElement('p');
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;

    scoreContainer.appendChild(playerScoreElement);
    scoreContainer.appendChild(computerScoreElement);

    yourState.appendChild(scoreContainer);

    // Reset scores after each set of three rounds
    playerScore = 0;
    computerScore = 0;


}

function displayDescription() {
    const description = "This is the description text."; // Replace with your actual description
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = description;
}
// Assuming you have a button with id "showDescriptionButton"
const showDescriptionButton = document.getElementById('showDescriptionButton');

showDescriptionButton.addEventListener('click', displayDescription);


function toggleDescription() {
    const descriptionContainer = document.getElementById('descriptionContainer');
    descriptionContainer.classList.toggle('open'); // Add or remove the 'open' class
}

const toggleDescriptionButton = document.getElementById('toggleDescriptionButton');

toggleDescriptionButton.addEventListener('click', toggleDescription);


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


 
