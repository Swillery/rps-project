// (create a function for getComputerChoice -  Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.)

// create a function to generate an integer 1-100 (randomNumber) and allocate numbers to inputs (computers input)
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // if #>=1 && <=33(rock), # >=34 && <=66(paper), #>=67(scissors)
    if (randomNumber >= 1 && randomNumber <= 33) {
        return "Rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



//create a function to prompt user to input answer
function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    //normalize inputs to be case insensitive
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    //therefor user answer should return into a "valid" answer
     if (input === "Rock" || input === "Paper" || input === "Scissors") {
        return input;
    }
}

// create a function to take choices & decide winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie"
    }  if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}

// initialize score at 0
let humanScore = 0
let computerScore = 0

//write a loop to play 5 rounds
for (let round = 1; round <= 5; round++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    console.log("The CPU Chose:", computerChoice);
    console.log("You chose:", humanChoice);

    const result = playRound(humanChoice, computerChoice)
    console.log(result);

        if (result == "You Win!") {
            humanScore++
        } else if (result == "Computer Wins!") {
            computerScore++
        }

        console.log("The Score is", humanScore, "to the User &", computerScore, "to the CPU.")
    }