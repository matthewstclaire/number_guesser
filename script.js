const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "You have to actually choose a number...";
  } else if (guess === number) {
    document.querySelector(".message").textContent =
      "Wait...You actually won...";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Your guess it too high.";
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Your guess it too low.";
  }
});

// document.querySelector(".message").textContent = document.querySelector(".guess").value;

document.querySelector("#background-color") = green;
