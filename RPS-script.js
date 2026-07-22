//Using JavaScript to create a game of rock, paper, scissors
 console.log("Hello, World!");

let answer = prompt("Choose: Rock, Paper or Scissors", "");
function getHumanChoice(answer) {
    let humanChoice = answer.toUpperCase();
    return humanChoice;
}
const humanSelection = getHumanChoice(answer);
console.log(humanSelection);
//player choice is interpreted as ROCK, PAPER, or SCISSORS

let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
let computerChoice = randomNumber;
console.log(computerChoice);

function getComputerChoice(computerChoice) {  
    if (computerChoice % 3 === 0) {
        return computerChoice = "ROCK";
    }
    else if (computerChoice % 2 === 0) {
        return computerChoice = "PAPER";
    }
    else {
        return computerChoice = "SCISSORS";
    }
}
//Assign computer choice as ROCK, PAPER, or SCISSORS based on the randomly generated number

const computerSelection = getComputerChoice(computerChoice);
console.log(computerSelection);

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "ROCK" && computerSelection === "ROCK") {
        console.log("Draw! Both sides chose rock");
    }
    else if (humanSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You lose! Paper beats rock");
        ++computerScore;
    }
    else if (humanSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win! Rock beats scissors");
        ++humanScore;
    }
    else if (humanSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You win! Paper beats rock");
        ++humanScore;
    }
    else if (humanSelection === "PAPER" && computerSelection === "PAPER") {
        console.log("Draw! Both sides chose paper");
    }
    else if (humanSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You lose! Scissors beats paper");
        ++computerScore;
    }
    else if (humanSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You lose! Rock beats scissors");
        ++computerScore;
    }
    else if (humanSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You win! Scissors beats paper");
        ++humanScore;
    }
    else if (humanSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("Draw! Both sides chose scissors");
    }
console.log("The current score is (Player vs Computer):");
console.log(humanScore);
console.log(computerScore);
}
//There might be a better way to do this? But all I can currently think of is listing out each possible scenario because the explanation for the round results are slightly different in each case.

playRound(humanSelection, computerSelection);
