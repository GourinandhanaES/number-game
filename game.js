let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const feedback = document.getElementById('result');
    const attemptsText = document.getElementById('attempts');

    attempts++;
    
    if (userGuess == randomNumber) {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
        feedback.style.color = 'green';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'orange';
    }

    attemptsText.textContent = `Number of attempts: ${attempts}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('userGuess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
}