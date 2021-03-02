// jshint esversion:6

// * Variables we are going to use
let min = 1,
	max = 10,
	winningNum = getRandomNum(min, max),
	guessLeft = 3;

// * Ui Elements we are going to use

const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessInput = document.querySelector('#guess-input'),
	guessBtn = document.querySelector('#guess-btn'),
	message = document.querySelector('.message');

// * Set the value of Min & Max

minNum.textContent = min;
maxNum.textContent = max;

// * setMessage function

const setMessage = (msg, color) => {
	// show the message and change it color to red
	message.textContent = msg;
	message.style.color = color;
};

// * Gameover function to dry the code

const gameOver = (won, msg) => {
	let color;
	won === true ? (color = 'green') : (color = 'red');
	guessInput.disabled = true; // disable the input
	guessInput.style.borderColor = color; // set the color of border on the condition
	setMessage(msg, color); // set the message and color
};

// * Play Again Function
const playAgain = () => {
	// set the value of submit to Play again
	guessBtn.value = 'Play Again';
	// Add a class
	guessBtn.className += 'play-again';
};

// * Add event listner on submit button
// ! Here we are not using a form, so we can't use a submit event here

guessBtn.addEventListener('click', () => {
	const guess = parseInt(guessInput.value);

	// Validate the guess number

	if (guess < min || guess > max || isNaN(guess)) {
		setMessage(`Please enter a number between ${min} & ${max}`, 'red'); // if value is less or greater then min and max
	} else if (guess === winningNum) {
		gameOver(true, `Yes, ${winningNum} number is correct, YOU WIN!`); // Gameover, you won
		playAgain(); // play Again
	} else {
		guessLeft -= 1; // Decrease the guess left
		if (guessLeft === 0) {
			// if all guess are over. game over , you lost
			gameOver(
				false,
				`Game Over. You Lost. The correct answer is ${winningNum}`
			);
			playAgain();
		} else {
			setMessage(
				`${guessInput.value} is wrong number, ${guessLeft} guess left.`,
				'red'
			);
			guessInput.value = ''; // empty the guess input value
		}
	}
});

// * Play again event listner
game.addEventListener('mousedown', (e) => {
	if (e.target.classList.contains('play-again')) {
		window.location.reload();
	}
});

// * Random number function
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
