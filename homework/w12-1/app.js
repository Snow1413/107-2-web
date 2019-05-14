/*
GAME FUNCTION:
- Player must guess a number between a min amax
- Player gets a certain amount of guesses 
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validate
    console.log(max, min, guess);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        if (guess === winningNum) {
            // Game OVER - won
            gameOver(true, `${winningNum} is correct, YOU WIN!`)
    
        } else {
            // Wrong number
            guessLeft--;
    
            if (guessLeft === 0) {
                // Game over - lost
                
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
    
                // Game continues - answer wrong
                guessInput.style.borderColor = 'red';   //Change bordere color
    
                guessInput.value = '';                  //clear Input
    
                setMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'red');
            }
        }
    }
});

game.addEventListener('mouseup', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;             // Disable input

    guessInput.style.bordercolor = color;   // Change border color

    message.style.color = color;            // Set text color

    setMessage(msg);                        // Set message

    //Play again?
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}