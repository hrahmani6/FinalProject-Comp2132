function diceForOpponent() {
  dice.forEach(function (oneDice) {
    oneDice.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (oneDice) {
      oneDice.classList.remove("shake");
    });
    let opponentSide1 = Math.floor(Math.random() * 6 + 1);
    let opponentSide2 = Math.floor(Math.random() * 6 + 1);
    let diceOpponentSide1 = document.querySelector(".opponent-first-dice");
    diceOpponentSide1.src = "images/dice/dice-" + opponentSide1 + ".png";
    let diceOpponentSide2 = document.querySelector(".opponent-second-dice");
    diceOpponentSide2.src = "images/dice/dice-" + opponentSide2 + ".png";

    let opponentResult = document.getElementById("opponent-score-result");
    let opponentRoundScore = 0;
    let opponentTotalScore = 0;

    if (opponentSide1 == 1 || opponentSide2 == 1) {
      opponentResult.innerHTML = "<p>oops...No Score..!</p>";
    } else if (opponentSide1 === opponentSide2) {
      opponentRoundScore = (opponentSide1 + opponentSide2) * 2;
      opponentResult.innerHTML =
        "Nice move! Your Score is" + " " + opponentRoundScore + " " + "point";
    } else {
      opponentRoundScore = opponentSide1 + opponentSide2;
      opponentResult.innerHTML = "Your Score is " + " " + opponentRoundScore;
    }
  }, 1500);
}
