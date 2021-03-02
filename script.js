// jshint esversion:6
// * Variables we are going to use
let min = 1,
	max = 10,
	winningNum = 5,
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
	// disable the input
	guessInput.disabled = true;
	// set the color of border on the condition
	guessInput.style.borderColor = color;
	// set the message and color
	setMessage(msg, color);
};

// * Add event listner on submit button
// ! Here we are not using a form, so we can't use a submit event here

guessBtn.addEventListener('click', () => {
	const guess = parseInt(guessInput.value);

	// Validate the guess number

	if (guess < min || guess > max || isNaN(guess)) {
		setMessage(`Please enter a number between ${min} & ${max}`, 'red');
	} else if (guess === winningNum) {
		// Gameover, you won
		gameOver(true, `Yes, ${winningNum} number is correct, YOU WIN!`);
	} else {
		// Decrease the guess left
		guessLeft -= 1;

		if (guessLeft === 0) {
			// if all guess are over. game over , you lost
			gameOver(
				false,
				`Game Over. You Lost. The correct answer is ${winningNum}`
			);
		} else {
			setMessage(
				`${guessInput.value} is wrong number, ${guessLeft} guess left.`,
				'red'
			);
			// empty the guess input value
			guessInput.value = '';
		}
	}
});
