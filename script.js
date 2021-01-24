const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "You have to actually choose a number...";
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "Wait...You actually won...";
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        "Your guess it too high.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (guess < number) {
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost the game";
    } else {
      document.querySelector(".message").textContent = "Your guess it too low.";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

// document.querySelector(".message").textContent = document.querySelector(".guess").value;

// document.querySelector("#background-color") = green;
