'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);

//this function check secret Number to user input
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').style.borderColor = '#b1f984';
  setTimeout(() => {
    document.querySelector('.guess').style.borderColor = '#eee';
  }, 1000);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  }
  if (checkInput()) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too High';
      score -= 1;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score -= 1;
    } else if (secretNumber === guess) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '🥇 You Won 😉';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.heading').textContent =
      'Please enter value Between 1 to 20';
    setTimeout(() => {
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.heading').textContent = 'Guess My Number!';
    }, 1000);
  }
}

// this function reset Game
function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
}

//check input value between 1 to 20 only
function checkInput() {
  let inputValue = document.querySelector('.guess').value;
  if (inputValue < 1 || inputValue > 20) {
    return 0;
  } else {
    return 1;
  }
}
