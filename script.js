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
let humanScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener('click', function () {
        const humanChoice = this.getAttribute('data-name');
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "You Win!") {
            humanScore++;
        } else if (result === "Computer Wins!") {
            computerScore++;
        }

        document.getElementById('result').innerText = 
            `You chose ${humanChoice}. The CPU chose ${computerChoice}. ${result} 
             The score is now ${humanScore} to ${computerScore}.`;

        if (humanScore === 5) {
            document.getElementById('result').innerText = `You chose ${humanChoice}. The CPU chose ${computerChoice}. ${result} 
             The score is now ${humanScore} to ${computerScore}.You won the game. Congrats! Please refresh the page.`
        }    else if (computerScore === 5) {
            document.getElementById('result').innerText = `You chose ${humanChoice}. The CPU chose ${computerChoice}. ${result} 
             The score is now ${humanScore} to ${computerScore}.You lost the game. Sorry! Please refresh the page.`
            }
        })
    });
