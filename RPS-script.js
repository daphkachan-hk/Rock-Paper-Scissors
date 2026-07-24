//Using JavaScript to create a game of rock, paper, scissors
 console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function playGame() {

function playRound() {
    gameRound++;

    function getHumanChoice() {
        let answer = prompt("Choose: Rock, Paper or Scissors", "");
        let humanChoice = answer.toUpperCase();
        return humanChoice;
    }
    const humanSelection = getHumanChoice();
    console.log(humanSelection);
    //player choice is interpreted as ROCK, PAPER, or SCISSORS

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random()*100)+1;
        // If you want to see the random number generated: console.log(computerChoice);  

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
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

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
console.log("Rounds Played:" + gameRound);
console.log("The current score is (Player vs Computer):" + humanScore + ":" + computerScore);
}
//There might be a better way to do this? But all I can currently think of is listing out each possible scenario because the explanation for the round results are slightly different in each case.

function gameReset() {
    let gameRound = 0;
}

for (let gameRound = 0; gameRound < +Infinity; gameRound++) {
    playRound();
if (humanScore === 3) {
    console.log("You win! Congrats!");
    alert("Refresh the page to play again");
    gameReset();
}
else if (computerScore === 3) {
    console.log("You lose! Better luck next time!");
    alert("Refresh the page to play again");
    gameReset();
}
}
}

playGame();