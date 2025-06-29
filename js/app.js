/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let msg
let playerchoice
let computerchoice

/*------------------------ Cached Element References ------------------------*/

const rockBtnEl = document.querySelector('#rock');
const paperBtnEl = document.querySelector('#paper');
const scissorsBtnEl = document.querySelector('#scissors');
const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/

function getComputerChoice() {
    // Generate a random index based on the choices array length
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log('Random Index:', randomIndex);
    // select the item from the array
    return choices[randomIndex];
}

// Initialize the game state
function play() {
    console.log('computer choice:', computerchoice);
    computerchoice = getComputerChoice();
    console.log('computer choice:', computerchoice);
    getComputerChoice();
    // after updating the game state, render to html
    render();
}

play();

// Update our UI/html directly
function render() {

}

/*----------------------------- Event Listeners -----------------------------*/
