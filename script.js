'use strict';

const highScoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const messageEl = document.querySelector('.message');
let secret = Math.floor(Math.random() * 20 + 1);
let isActive = true;
let score = 20;
let highScore = 0;
console.log(secret);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (isActive) {
    if (!guess)
      document.querySelector('.message').textContent = '⛔ No number!';
    else {
      if (guess === secret) {
        messageEl.textContent = '🏆 You Win!';
        document.body.style.backgroundColor = '#60b347';
        isActive = false;
        if (score > highScore) {
          highScore = score;
          highScoreEl.textContent = highScore;
        }
        document.querySelector('.number').textContent = secret;
      } else if (guess > secret) {
        messageEl.textContent = '⬆️ Too High!';
        LoseRound();
      } else if (guess < secret) {
        messageEl.textContent = '⬇️ Too Low!';
        LoseRound();
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.floor(Math.random() * 20 + 1);
  console.log(secret);
  isActive = true;
  document.body.style.backgroundColor = '#222';
  messageEl.textContent = 'Start guessing...';
  score = 20;
  scoreEl.textContent = score;
  document.querySelector('.number').textContent = '?';
});

function LoseRound() {
  score--;
  scoreEl.textContent = score;
  if (!score) {
    document.body.style.backgroundColor = 'red';
    isActive = false;
    document.querySelector('.message').textContent = '😔 You Lose!';
  }
}
