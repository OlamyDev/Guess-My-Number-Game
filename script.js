const message = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const scorePoints = document.querySelector(".score");
const highScorePoints = document.querySelector(".highscore");
const body = document.querySelector("body"); // no .body because its not a class that can be selected
const number = document.querySelector(".number");
const resetButton = document.querySelector(".again");

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log("secret number:" + secretNumber);

checkButton.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  console.log(guess);

  //falsey values => undefined, null,false, 0, Nan

  if (!guess) {
    message.innerHTML = "no number typed";
  } else if (guess == secretNumber) {
    message.innerHTML = "correct!";

    if (score > highScore) {
      highScore = score;
      highScorePoints.innerHTML = highScore;
    }
    number.innerHTML = secretNumber;
    body.style.backgroundColor = "green";
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.innerHTML = "Too Low";
      score--;
      scorePoints.innerHTML = score;
    } else {
      message.innerHTML = "You Lost";
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.innerHTML = "Too High";
      score--;
      scorePoints.innerHTML = score;
    } else {
      message.innerHTML = "You Lost";
    }
  }
});

// assignment
// work on the reset button

resetButton.addEventListener("click", () => {
  body.style.backgroundColor = "#222";
  message.innerHTML = "Start guessing...";
  highScorePoints.innerHTML = highScore;
});

//mr edison answer
resetButton.addEventListener("click", () => {
  let secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  scorePoints.innerHTML = score;
  message.innerHTML = "Start Guessing ...";
  body.style.backgroundColor = "black";
  number.innerHTML = "?";
  guessInput.value = "?";
});
