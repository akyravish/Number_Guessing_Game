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

// * Add event listner on submit button
// ! Here we are not using a form, so we can't use a submit event here

guessBtn.addEventListener('click', () => {
	const guess = parseInt(guessInput.value);

	// Validate the guess number

	if (guess < min || guess > max || isNaN(guess)) {
		setMessage(`Please enter a number between ${min} & ${max}`, 'red');
	} else if (guess === winningNum) {
		// if answer is corred, we are going to disable the input and add it border color to green
		guessInput.disabled = true;
		guessInput.style.borderColor = 'green';
		setMessage(`Yes, ${winningNum} number is correct, YOU WIN!`, 'green');
	} else {
		setMessage(`Your guessed number is wrong, please try again`);
	}
});
