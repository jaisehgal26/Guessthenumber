"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!!";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".ques").textContent = 13;

// document.querySelector(".score1").textContent = 0;

// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".ques").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  // when no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number🥺";
    // when player wins
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore1").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score1").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game😭";
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is greater then number
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High📈";
  //     score--;
  //     document.querySelector(".score1").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game😭";
  //     document.querySelector(".score1").textContent = 0;
  //   }
  //   //when guess is less then number
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low📉";
  //     score--;
  //     document.querySelector(".score1").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game😭";
  //     document.querySelector(".score1").textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score1").textContent = score;
  //   document.querySelector(".ques").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
