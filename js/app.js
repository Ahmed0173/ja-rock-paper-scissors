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
const resetBtnEl = document.querySelector('#reset');

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
    resultDisplayEl.textContent = `Computer chose ${computerchoice} and you chose ${playerchoice}.`;
}

function compare() {
    // Compare player choice and computer choice
    if (playerchoice === computerchoice) {
        msg = 'It\'s a tie!';
    } else if (
        (playerchoice === 'rock' && computerchoice === 'scissors') ||
        (playerchoice === 'paper' && computerchoice === 'rock') ||
        (playerchoice === 'scissors' && computerchoice === 'paper')
    ) {
        msg = 'You win!';
    } else {
        msg = 'You lose!';
    }
    console.log(msg);
    resultDisplayEl.textContent = `Computer chose ${computerchoice} and you chose ${playerchoice}. ${msg}`;
}

function reset() {
    resultDisplayEl.textContent = 'Game reset. Please make a choice.';
    playerchoice = '';
    computerchoice = '';
    msg = '';
}

/*----------------------------- Event Listeners -----------------------------*/

rockBtnEl.addEventListener('click', function() {
    playerchoice = 'rock';
    console.log('Player choice:', playerchoice);
    play();
    compare();
});

paperBtnEl.addEventListener('click', function() {
    playerchoice = 'paper';
    console.log('Player choice:', playerchoice);
    play();
    compare();
});

scissorsBtnEl.addEventListener('click', function() {
    playerchoice = 'scissors';
    console.log('Player choice:', playerchoice);
    play();
    compare();
});

resetBtnEl.addEventListener('click', function() {
    reset();
});
