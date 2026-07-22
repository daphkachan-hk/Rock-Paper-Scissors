//Using JavaScript to create a game of rock, paper, scissors
 console.log("Hello, World!");

let answer = prompt("Choose a number: 1 (Rock), 2 (Paper), or 3 (Scissors)", "");
console.log(answer);
function getHumanChoice() {
    if (answer === "1") {
        console.log("Rock");
    }
    else if (answer === "2") {
        console.log("Paper");
    }
    else if (answer === "3") {
        console.log("Scissors");
    }
}
console.log(getHumanChoice());

let randomNumber = Math.floor(Math.random()*100)+1;

function getComputerChoice(randomNumber) {
    if (randomNumber % 3 === 0) {
        console.log("Rock");
    }
    else if (randomNumber % 2 === 0) {
        console.log("Paper");
    }
    else console.log("Scissors");
}

console.log(randomNumber);
console.log(getComputerChoice(randomNumber));

let humanScore = 0;
let computerScore = 0;

console.log("The current score is (Player vs Computer):");
console.log(humanScore);
console.log(computerScore);