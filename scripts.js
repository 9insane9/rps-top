// //generate random computer option
// function getComputerChoice() {
//     let computerOptions = ["Rock", "Paper", "Scissors"];
//     let randomIndex = Math.floor(Math.random() * computerOptions.length);
//     let result = (computerOptions[randomIndex]);
//     return result;
// }

// //note to self not to forget quotes around arguments when calling, unless using prompt
// function gameRound(playerSelection = prompt("Rock, paper or scissors?"), computerSelection = getComputerChoice()) {
    
//    //capitalize first letter of player input to match format
//     playerSelectionFormatted = 
//     playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    
//     ////check conditions

//     //tie check
//     if (playerSelectionFormatted === computerSelection) {
//         let result = `It's a tie! You both picked ${computerSelection}!`;
//         return result;
//         console.log(result);

//     //player lose check
//     } else if (
//     (computerSelection === "Rock" && playerSelectionFormatted === "Scissors")
//     || (computerSelection === "Paper" && playerSelectionFormatted === "Rock")
//     || (computerSelection === "Scissors" && playerSelectionFormatted === "Paper")
//     ) { let result = `You lose! ${computerSelection} beats ${playerSelectionFormatted}!`;
//         return result;
//         computerWinCount = ++computerWinCount; //increment counter
//         console.log(result);

//     //player win check
//     } else if (
//         (computerSelection === "Scissors" && playerSelectionFormatted === "Rock")
//         || (computerSelection === "Rock" && playerSelectionFormatted === "Paper")
//         || (computerSelection === "Paper" && playerSelectionFormatted === "Scissors")
//     ) { let result =  `You win! ${playerSelectionFormatted} beats ${computerSelection}!`;
//         return result;
//         playerWinCount = ++playerWinCount; //increment counter
//         console.log(result);
//     }
//     }

/////above is code for one round


    ////game of 5 rounds 

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    //generate random choice for the computer
    function getComputerChoice() {
        let computerOptions = ["Rock", "Paper", "Scissors"];
        let randomIndex = Math.floor(Math.random() * computerOptions.length);
        let result = (computerOptions[randomIndex]);
        return result;
    }
    
    //note to self not to forget quotes around arguments when calling, unless using prompt (example of bad comment)

    //gameround function
    function gameRound(playerSelection = prompt("Rock, paper or scissors?"), computerSelection = getComputerChoice()) {
        
       //capitalize first letter of player input to match format
        playerSelectionFormatted = 
        playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    
        
        ////check conditions
    
        //tie check
        if (playerSelectionFormatted === computerSelection) {
            let result = `It's a tie! You both picked ${computerSelection}!`;
            alert(result);
            console.log(result);
            return result;
    
        //player lose check
        } else if (
        (computerSelection === "Rock" && playerSelectionFormatted === "Scissors")
        || (computerSelection === "Paper" && playerSelectionFormatted === "Rock")
        || (computerSelection === "Scissors" && playerSelectionFormatted === "Paper")
        ) { let result = `You lose! ${computerSelection} beats ${playerSelectionFormatted}!`;
            computerWinCount++; //increment counter
            alert(result);
            console.log(result);
            return result;
    
        //player win check //just use else and no condition becaause if player didnt lose and it wasnt a tie, there are no other options
        } else if (
            (computerSelection === "Scissors" && playerSelectionFormatted === "Rock")
            || (computerSelection === "Rock" && playerSelectionFormatted === "Paper")
            || (computerSelection === "Paper" && playerSelectionFormatted === "Scissors")
        ) { let result =  `You win! ${playerSelectionFormatted} beats ${computerSelection}!`;
            playerWinCount++; //increment counter
            alert(result);
            console.log(result);
            return result;
        }
        }
        for (roundCount = 0;//game loop of 5 rounds
            roundCount < 5;
            ++roundCount) {gameRound()}

        ////after 5 games, who won?
        if (roundCount === 5) {
        if (playerWinCount === computerWinCount) {
            let result = `It's a tie! You both won ${playerWinCount} times!`;
            alert(result);
            console.log(result);
        } else if (playerWinCount > computerWinCount) {
            let result = `You won! You beat the computer ${playerWinCount} to ${computerWinCount}!`;
            alert(result);
            console.log(result);
        } else {
            let result = `You lost! The computer beat you ${computerWinCount} to ${playerWinCount}!`;
            alert(result);
            console.log(result);
        }}
            
         }
    