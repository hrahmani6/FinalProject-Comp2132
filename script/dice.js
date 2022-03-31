const dice = document.querySelectorAll("img");
const button = document.getElementById("roll");
const popup = document.getElementById("pop-up");
const outPutPlayer = document.getElementById("player-score-total");
const outputOpponent = document.getElementById("Opponent-score-total");

popup.style.display = "none";
let playAgain = false;
// to sum the score
let totalScorePlayer = 0;
let totalScoreOpponent = 0;
let numberOfRounds = 0;

button.addEventListener("click", function () {
  numberOfRounds++;
  if (numberOfRounds > 3) {
    popup.style.display = "block  ";
    showPopup();
  } else {
    diceForPlayer();
  }
});
// .............opponent............
let numberOfRounds02 = 0;

button.addEventListener("click", function () {
  numberOfRounds02++;
  if (numberOfRounds02 > 3) {
  } else {
    diceForOpponent();
  }
});
