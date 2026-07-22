//Using JavaScript to create a game of rock, paper, scissors
 console.log("Hello, World!");

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