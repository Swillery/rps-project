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
    const input = prompt("Rock, Paper, or Scissors?");

    //user answer should return into a valid answer
    if (input == "rock") {
        return "Rock";
    } else if (input == "paper") {
        return "Paper";
    } else if (input == "scissors") {
        return "Scissors"
    }
}

// create a variable to return the functions answer and relay the answer to console.log (calls the prompt to appear)
const humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);