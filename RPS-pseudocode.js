//Pseudocode to plan out the actual JS

/* Part 1: Computer Choice Logic
Write code so that getComputer Choice will randomly return one of the three string values: "rock", "paper", or "scissors"

Hint: Math.random returns a random number that is greater or equal to 0 and less than 1
Note: arrays are not necessary for this project
*/
//Randomly generate a number using Math.random and convert into a whole number between 1-100
//If random number is divisible by 3, assign it the rock value
//If random number is divisible by 2, assign it the paper value
//If random number is not divisible by 3 or 2, assign it the scissors value

/* Part 2: Player Choice Logic
Write code so that getHumanChoice takes the user choice and returns a valid choice, depending on the input.

Hint: Use the prompt method to get the user input.
Note: For now, we can assume that the user will always enter a valid choice.
*/
//Prompt user to enter Rock, Paper, or Scissors in the prompt window
//Note to self: Add this before the computer logic so the player cannot see the computer's choice before picking 

/* Part 3: Score Keeping
Create 2 new variables to keep track of the player and computer scores in the global scope. Both variables start with the initial value of zero.
*/
//humanScore variable set to zero
//computerScore variable set to zero

/* Part 4: Logic for Playing a Round
Write a function that takes the human and computer choices as arguments and increments the round winner's score and logs a winner announcement.
*/
