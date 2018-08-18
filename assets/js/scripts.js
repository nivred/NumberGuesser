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
        // Game over - Won
        // Disable input
        guessInput.disabled = true;
        // Chance border color
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, YOU WIN!`, );`green`
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game over - Lost
            // Disable input
            guessInput.disabled = true;
            // Chance border color
            guessInput.style.borderColor = 'red';
            // Set message
            setMessage(`Game Over, you lost. The correct number was ${winningNum}`, `red`);

        } else {
            // Game continues - wrong guess
            // Chance border color
            guessInput.style.borderColor = 'red';
            // Clear Input
            guessInput.value = '';
            // Set message
            setMessage(`${guess} is not correct, ${guessesLeft} gesses left`, `red`);
        }
    }
});

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}