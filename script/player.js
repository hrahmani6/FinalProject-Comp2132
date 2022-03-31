function diceForPlayer() {
  dice.forEach(function (oneDice) {
    oneDice.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (oneDice) {
      oneDice.classList.remove("shake");
    });
    let playerSide1 = Math.floor(Math.random() * 6 + 1);
    let playerSide2 = Math.floor(Math.random() * 6 + 1);
    let dicePlayerSide1 = document.querySelector(".player-first-dice");
    dicePlayerSide1.src = "images/dice/dice-" + playerSide1 + ".png";
    let dicePlayerSide2 = document.querySelector(".player-second-dice");
    dicePlayerSide2.src = "images/dice/dice-" + playerSide2 + ".png";

    let playerResult = document.getElementById("player-score-result");
    let playerRoundScore = 0;
    let playerTotalScore = 0;

    if (playerSide1 == 1 || playerSide2 == 1) {
      playerResult.innerHTML = "<p>oops...No Score..!</p>";
    } else if (playerSide1 === playerSide2) {
      playerRoundScore = (playerSide1 + playerSide2) * 2;
      playerResult.innerHTML =
        "Nice move! Your Score is" + " " + playerRoundScore + " " + "point";
    } else if (playerSide1 !== playerSide2) {
      playerRoundScore = playerSide1 + playerSide2;
      playerResult.innerHTML = "Your Score is " + " " + playerRoundScore;
      outPutPlayer.innerHTML = `Total Score is : ${playerTotalScore}`;
      return;
    }
  }, 1500);
}
