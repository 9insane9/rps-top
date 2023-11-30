let playerWinCount = 0;
let computerWinCount = 0;
let roundCount = 0;

let buttons = document.querySelector(".buttons");
let playerSelection = "";

let message = document.querySelector(".message");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");


    
    //generate random choice for the computer
function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * computerOptions.length);
    let result = (computerOptions[randomIndex]);
    return result;
};

    //gameround function
function gameRound(playerSelection, computerSelection = getComputerChoice()) {

    console.log(computerSelection);
    let result;

    //tie check
    if (playerSelection === computerSelection) {
        result = `It's a tie! You both picked ${computerSelection}!`;
        playerSelection = "";//reset

    //player lose check
    } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors")
    || (computerSelection === "Paper" && playerSelection === "Rock")
    || (computerSelection === "Scissors" && playerSelection === "Paper")
    ) { result = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerWinCount++; //increment counter
        playerSelection = "";//reset

    //player win check
    } else if (
        (computerSelection === "Scissors" && playerSelection === "Rock")
        || (computerSelection === "Rock" && playerSelection === "Paper")
        || (computerSelection === "Paper" && playerSelection === "Scissors")
    ) { result =  `You win! ${playerSelection} beats ${computerSelection}!`;
        playerWinCount++; //increment counter
        playerSelection = "";//reset
    }

    roundCount++;
    message.textContent = result;
    playerScore.textContent = `Your score: ${playerWinCount}`;
    computerScore.textContent = `Computer score: ${computerWinCount}`;
    endScoring();

};

function endScoring () {
    if (roundCount >= 5) {
        let finalResult;
        if (playerWinCount === computerWinCount) {
            finalResult = `It's a tie game! You both won ${playerWinCount} times!`;
        } else if (playerWinCount > computerWinCount) {
            finalResult = `You won the game! You beat the computer ${playerWinCount} to ${computerWinCount}!`;
        } else {
            finalResult = `You lost the game! The computer beat you ${computerWinCount} to ${playerWinCount}!`;
        }

    message.textContent +="\n\n" + `${finalResult}`;

    console.log(message.textContent)

    }
}; 

buttons.addEventListener('click', (event) => {
    let clickTarget = event.target;

    switch (clickTarget.getAttribute("class")) {
        case 'rock':
            console.log("Rock chosen!");
            playerSelection = "Rock";
            break;
        case 'paper':
            console.log("Paper chosen!");
            playerSelection = "Paper";
            break;
        case 'scissors':
            console.log("Scissors chosen!");
            playerSelection = "Scissors";
            break;
    }

    if (playerSelection !== "" && roundCount < 5) {
        gameRound(playerSelection, computerSelection = getComputerChoice());
    }
});