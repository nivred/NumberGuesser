// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('#message');
      
// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})
// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, `red`);
        console.log(guess);
    }
    // Check if number
    if(guess === winningNum) {
        // Game over - Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game over - Lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - wrong guess
            // Change border color
            guessInput.style.borderColor = 'red';
            // Clear Input
            guessInput.value = '';
            // Set message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, `red`);
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : 'red';
    // Disable input
    guessInput.disabled = true;
    // Chance border color
    guessInput.style.borderColor = color;
    // Change text color
    message.style.color = color;

    // Set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


// Get Winning Number
function getRandomNum(min, max ) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}