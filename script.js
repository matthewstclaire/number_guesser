let number = Math.trunc(Math.random() * 20) + 1;
//uncomment to see the number
//document.querySelector(".number").textContent = number;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent =
      "Thanks for playing again. Choose a number.";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?"; //
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
  });

  if (!guess) {
    document.querySelector(".message").textContent =
      "You have to actually choose a number...";
    document.querySelector(".guess").value = "";
    //winner
  } else if (guess === number) {
    document.querySelector(
      ".message"
    ).textContent = `You win! Your score is ${score}!`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
    //devil secret beginning
  } else if (guess === 666) {
    document.querySelector(".message").textContent = "Okay Damien try again!";
    document.querySelector("body").style.backgroundColor = "#b30f04";
    document.querySelector(".guess").value = "";
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "Your guess it too high.";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".guess").value = "";
    }
  } else if (guess < number) {
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost the game";
    } else {
      document.querySelector(".message").textContent = "Your guess it too low.";
      score--;
      document.querySelector(".guess").value = "";
      document.querySelector(".score").textContent = score;
    }
  }
});

// document.querySelector(".message").textContent = document.querySelector(".guess").value;

// document.querySelector("#background-color") = green;
