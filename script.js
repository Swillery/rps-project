// (create a function for getComputerChoice -  Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.)

// create a const to generate an integer 1-100 (randomNumber)
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

// create a variable to return the functions answer and relay the answer to console.log
const computerChoice = getComputerChoice();
console.log("The CPU Chose:", computerChoice);

//create a prompt to allow user to input answer and a function that returns a valid input
function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    //normalize inputs to be case insensitive
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    //user answer should return into a valid answer
    if (input == "Rock") {
        return "Rock";
    } else if (input == "Paper") {
        return "Paper";
    } else if (input == "Scissors") {
        return "Scissors"
    }
}

// create a variable to return the functions answer and relay the answer to console.log (calls the prompt to appear)
const humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);

// create a function to take choices, play round
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

console.log(playRound(humanChoice, computerChoice))

// write variables to keep track of the players score in global scope, initialize at 0
let humanScore = 0
let computerScore = 0
//write a function to incrementally increase score, use a variable to recognize winner and ++ to add score
function score() {
    const result = playRound(humanChoice, computerChoice)

    if (result == "You Win!") {
        humanScore++
    } else if (result == "Computer Wins!") {
        computerScore++
    }
}
score();


console.log("The Score is", humanScore, "to the User &", computerScore, "to the CPU.")