#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const message1 = chalk.blue.bold.underline.dim("!!!!!WELCOME TO NUMBER GUESSING GAME!!!!!");
const message2 = chalk.yellowBright.bold.italic("      TRY TO GUESS THE CORRECT NUMBER          ");
const message3 = chalk.green.bold(" !!!!LETS START NOW!!!!");
const message4 = chalk.red.bold("OMG ! You nailed it U are a winner of this game ");
const message5 = chalk.blue("Try again ! You have two moe chances left");
const message6 = chalk.blue("Try again ! You have only one  chance left");
const message7 = chalk.redBright.bold.underline("<~> You Missed your Three chances<..>");
const message8 = chalk.greenBright.bold("~~IN THIS GAME YOU HAVE THREE CHANCES TO WIN SO, TRY YOUR LUCK~~");
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message8);
const randomNumber = Math.floor(Math.random() * 10 + 1);
const maxChances = 3;
let chancesLeft = maxChances;
let guessedCorrectly = false;
while (chancesLeft > 0 && !guessedCorrectly) {
    const answers = await inquirer.prompt([
        {
            name: "UserGuessedNumber",
            type: "number",
            message: "Guess a number",
        },
    ]);
    if (answers.UserGuessedNumber == true) {
        console.log("You guessed correct number");
        console.log(message4);
    }
    else {
        chancesLeft--;
        if (chancesLeft == 2) {
            console.log(message5);
        }
        else if (chancesLeft == 1) {
            console.log(message6);
        }
        else {
            console.log("You loss");
            console.log(message7);
            console.log("The correct number is", randomNumber);
        }
    }
}
