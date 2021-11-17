// three separate options to choose from for the game
let gameOptions = ["rock", "paper", "scissors"];

// function for the computer play that returns a random "integer" from the game option length(1-3): Rock = 1, Paper = 2, Scissors = 3 //
function computerPlay() {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// playRound utilizes both the playerSelection and computerSelection parameters for it's function. toLowerCase is utilized to convert any entry into the playerSelection into stricly lower case to match the gameOptions variable. if .. else if .. and else conditionals are used for the various outcomes and provide an alert based on that outcome.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }   else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper") {
        console.log(`It's a tie!`);
    }   else {
        console.log(`You lose.. ${computerSelection} beats ${playerSelection}.`);
    }
}

// the game function prompts the player asking what their pick will be out of three options. Once picked the playRound function is envoked and will run the game.
function game() {
    let playerSelection = prompt("What is your pick? Rock, paper, or scissors?");
    // the computerSelection variable envokes the computerPlay function as it's selection ***if computerSelection were in the Global Scope it will only run once and will not change. (Ex if the page is refreshed in the code is in the global scope and the computer selections 'Scissors', it will ALWAYS be 'Scissors'. Putting computerSelection in the local scope will allow it to run each time the function is invoked.)** //
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

game();
game();
game();
game();