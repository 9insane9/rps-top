//generate random computer option
function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * computerOptions.length);
    let result = (computerOptions[randomIndex]);
    return result;
}

//note to self not to forget quotes around arguments when calling, unless using prompt
function gameRound(playerSelection = prompt("Rock, paper or scissors?"), computerSelection = getComputerChoice()) {
    
   //capitalize first letter of player input to match format
    playerSelectionFormatted = 
    playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    
    ////check conditions

    //tie check
    if (playerSelectionFormatted === computerSelection) {
        console.log(`It's a tie! You both picked ${computerSelection}!`);
    //player lose check
    } else if (
    (computerSelection === "Rock" && playerSelectionFormatted === "Scissors")
    || (computerSelection === "Paper" && playerSelectionFormatted === "Rock")
    || (computerSelection === "Scissors" && playerSelectionFormatted === "Paper")
    ) { return `You lose! ${computerSelection} beats ${playerSelectionFormatted}!`;
        console.log(`You lose! ${computerSelection} beats ${playerSelectionFormatted}!`)
    //player win check
    } else if (
        (computerSelection === "Scissors" && playerSelectionFormatted === "Rock")
        || (computerSelection === "Rock" && playerSelectionFormatted === "Paper")
        || (computerSelection === "Paper" && playerSelectionFormatted === "Scissors")
    ) { return `You win! ${playerSelectionFormatted} beats ${computerSelection}!`;
    console.log(`You win! ${playerSelectionFormatted} beats ${computerSelection}!`)
    }
    }