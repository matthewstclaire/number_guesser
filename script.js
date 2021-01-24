document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "You have to actually choose a number...";
  } else document.querySelector(".message").textContent = document.querySelector(".guess").value;
});
