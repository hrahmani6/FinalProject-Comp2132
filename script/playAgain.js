const buttonNewGame = document.getElementById("new-game");

buttonNewGame.addEventListener("click", function () {
  numberOfRounds = 0;
  if (numberOfRounds == 0) {
    totalScorePlayer = 0;
    totalScoreOpponent = 0;
    playerResult.innerHTML += "new Game";
    outPutPlayer.innerHTML += `new game`;

    return;
  }
});
