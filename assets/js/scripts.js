// Game values
let min = 1,
    max = 10,
    winningNum = 2,
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

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, `red`);
    }
    // Check if number
    if(guess === winningNum) {
        // Disable input
        guessInput.disabled = true;
        // Chance border color
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, YOU WIN!`, );`green`
    } else {

    }
});

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}